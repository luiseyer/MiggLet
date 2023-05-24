import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../components/user/model.js'
import * as DTO from '../components/user/dto.js'

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = await Promise.allSettled([
      User.findOne({ dni: username }),
      User.findOne({ email: username }),
      User.findOne({ code: username })
    ])
      .then(results => results.find(result => result.value).value)
      .catch(() => null)

    const isMatch = !(user && password)
      ? false
      : await bcrypt.compare(password, user.password)

    if (!isMatch) return next(new jwt.JsonWebTokenError('invalid user or password'))

    const userForToken = {
      id: user.id,
      dni: user.dni
    }

    const token = jwt.sign(userForToken, process.env.JWT_SECRET)

    res.status(200).json({ id: DTO.single(user).id, token })
  } catch (error) { return next(error) }
}

const hasToken = async (req, res, next) => {
  try {
    const token = req.get('Authorization') ?? ''
    const decodedToken = jwt.verify(token.substring(7), process.env.JWT_SECRET)
    const user = await User.findById(decodedToken.id)

    if (!user) return next(new jwt.JsonWebTokenError('user does exist'))

    req.user = decodedToken
    next()
  } catch (error) { next(error) }
}

const isAdmin = async (req, res, next) => {
  try {
    const { id } = req.user
    const isAdmin = await User.findById(id, 'isAdmin').exec()
    if (isAdmin) return next()
    return res.sendStatus(403)
  } catch (error) { next(error) }
}

export { login, hasToken, isAdmin }
