import User from './model.js'
import * as DTO from './dto.js'
import bcrypt from 'bcrypt'

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({})
    return res.json(DTO.multiple(users))
  } catch (error) { next(error) }
}

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    return user
      ? res.json(DTO.single(user))
      : res.sendStatus(404)
  } catch (error) { next(error) }
}

const createUser = async (req, res, next) => {
  try {
    const {
      dni,
      code,
      email,
      password
    } = req.body

    await User.validate({
      dni,
      code,
      email,
      password
    })

    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new User({
      dni,
      code,
      email,
      password: passwordHash
    })

    const savedUser = await newUser.save()

    return res.status(201).json(DTO.single(savedUser))
  } catch (error) { next(error) }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params

    const {
      dni,
      code,
      email,
      password,
      phone,
      firstnames,
      lastnames,
      profilePictureURL,
      specialty
    } = req.body

    let passwordHash

    if (password) {
      await User.validate({ password }, ['password'])
      passwordHash = await bcrypt.hash(password, 10)
    }

    await User.findByIdAndUpdate(id, {
      $set: {
        dni,
        code,
        email,
        password: passwordHash,
        phone,
        firstnames,
        lastnames,
        profilePictureURL,
        specialty
      }
    })

    const updatedUser = await User.findById(id)

    return res.status(201).json(DTO.single(updatedUser))
  } catch (error) { next(error) }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    return res.sendStatus(204)
  } catch (error) { next(error) }
}

const setRemoveAdmin = async (req, res, next) => {
  try {
    const { id } = req.params
    const { isAdmin } = req.body
    await User.findByIdAndUpdate(id, { $set: { isAdmin } })
    const updatedUser = await User.findById(id)
    return res.status(201).json(DTO.single(updatedUser))
  } catch (error) { next(error) }
}

export { getUsers, getUser, createUser, updateUser, deleteUser, setRemoveAdmin }
