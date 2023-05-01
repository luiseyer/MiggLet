import User from './model.js'
import DTO from './DTO.js'

const userController = {
  async getAll (req, res) {
    const users = await User.find({})
    return res.json(DTO.multiple(users))
  },

  async getOne (req, res) {
    const user = await User.findById(req.params.id)
    if (!user) return res.sendStatus(404)
    return res.json(DTO.single(user))
  },

  async create (req, res) {
    const user = null
    return res.status(201).json(DTO.single(user))
  },

  async update (req, res) {},

  async delete (req, res) {}
}

export default userController
