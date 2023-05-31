import { App } from '@tinyhttp/app'
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  setRemoveAdmin
} from './controller.js'
// import { isAdmin } from '../../middlewares/auth.js'

const router = new App()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)
router.patch('/set-remove-admin/:id/', setRemoveAdmin)

export default router
