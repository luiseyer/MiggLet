import User from './model.js'
import * as DTO from './dto.js'
import bcrypt from 'bcrypt'

const getUsers = async (req, res, next) => {
  try {
    const { id } = req.user
    const page = req.query.page || 0
    const limit = req.query.limit || 10
    const view = req.query.view
    const counter = req.query.counter || false
    const search = req.query.search && req.query.search.trim().length !== 0
      ? req.query.search
      : '.'

    const searchRegExp = new RegExp(`(${search})+`, 'gui')

    const VIEW_HANDLERS = {
      active: { isActive: true },
      inactive: { isActive: false },
      all: { $or: [{ isActive: true }, { isActive: false }] }
    }

    const handleView = VIEW_HANDLERS[view] || VIEW_HANDLERS.all

    const filters = {
      $and: [
        {
          ...(!counter
            ? { _id: { $ne: id } }
            : {})
        },
        { ...handleView },
        {
          $or: [
            { firstnames: searchRegExp },
            { lastnames: searchRegExp }
          ]
        }
      ]
    }

    const users = !counter
      ? await User.find(filters).skip(page * limit).limit(limit).sort({ updatedAt: 'desc' })
      : []
    const count = await User.find(filters).count()

    return res.json({ users: DTO.multiple(users), count })
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
      password,
      phone,
      firstnames,
      lastnames,
      profilePictureURL,
      specialty,
      department
    } = req.body

    await User.validate({
      dni,
      code,
      email,
      password,
      phone,
      firstnames,
      lastnames,
      profilePictureURL,
      specialty,
      department
    })

    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new User({
      dni,
      code,
      email,
      password: passwordHash,
      phone,
      firstnames,
      lastnames,
      profilePictureURL,
      specialty,
      department
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
      specialty,
      department
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
        specialty,
        department
      }
    })

    const updatedUser = await User.findById(id)

    return res.status(200).json(DTO.single(updatedUser))
  } catch (error) { next(error) }
}

const setRemoveActive = async (req, res, next) => {
  try {
    const { id } = req.params
    const { isActive } = await User.findById(id)

    await User.findByIdAndUpdate(id, { $set: { isActive: !isActive } })

    const updatedUser = await User.findById(id)

    return res.status(200).json(DTO.single(updatedUser))
  } catch (error) { next(error) }
}

const setRemoveAdmin = async (req, res, next) => {
  try {
    const { id } = req.params
    const { isAdmin } = await User.findById(id)

    await User.findByIdAndUpdate(id, { $set: { isAdmin: !isAdmin } })

    const updatedUser = await User.findById(id)
    return res.status(200).json(DTO.single(updatedUser))
  } catch (error) { next(error) }
}

export { getUsers, getUser, createUser, updateUser, setRemoveActive, setRemoveAdmin }
