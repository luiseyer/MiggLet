/* eslint-disable object-shorthand */
import { User } from './model.js'
import * as DTO from './dto.js'

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({})
    return res.json(DTO.multiple(users))
  } catch (error) {
    return next(error)
  }
}

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    return user
      ? res.json(DTO.single(user))
      : res.sendStatus(404)
  } catch (error) { return next(error) }
}

const createUser = async (req, res, next) => {
  try {
    const { dni, password } = req.body
    await User.validate({ dni, password })
    const newUser = new User({ dni, password })
    const savedUser = await newUser.save()
    return res.status(201).json(DTO.single(savedUser))
  } catch (error) { return next(error) }
}

const updateUser = async (req, res) => {
  return res.json({ message: 'this feature is under development' })
}

const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    return res.sendStatus(204)
  } catch (error) { next(error) }
}

export { getUsers, getUser, createUser, updateUser, deleteUser }
