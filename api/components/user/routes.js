import { App } from '@tinyhttp/app'
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from './controller.js'

const router = new App()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
