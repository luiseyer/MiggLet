import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../components/user/model.js'
import * as DTO from '../components/user/dto.js'

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const userName = username && username.toLowerCase()

    const user = await Promise.allSettled([
      User.findOne({ dni: userName }),
      User.findOne({ email: userName }),
      User.findOne({ code: userName })
    ])
      .then(results => results.find(result => result.value).value)
      .catch(() => null)

    const isMatch = !(user && password)
      ? false
      : await bcrypt.compare(password, user.password)

    if (!isMatch || !user.isActive) {
      return next(new jwt.JsonWebTokenError('Invalid user or password'))
    }

    const userForToken = {
      id: user.id,
      dni: user.dni
    }

    const token = jwt.sign(userForToken, process.env.JWT_SECRET)

    res.status(200).json({ ...DTO.single(user), token })
  } catch (error) { return next(error) }
}

const verifyToken = async (req, _, next) => {
  try {
    const token = req.headers.authorization ?? ''

    const decodedToken = jwt.verify(token.substring(7), process.env.JWT_SECRET)
    const user = await User.findById(decodedToken.id)

    if (!user) {
      return next(new jwt.JsonWebTokenError('User does not exist'))
    }

    req.user = user
    next()
  } catch (error) { next(error) }
}

const isAdmin = async (req, res, next) => {
  try {
    const { id } = req.user
    const { isAdmin } = await User.findById(id)

    if (isAdmin) {
      return next()
    }

    return res.sendStatus(403)
  } catch (error) { next(error) }
}

export { login, verifyToken, isAdmin }
