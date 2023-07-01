import { App } from '@tinyhttp/app'
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  setRemoveActive,
  setRemoveAdmin
} from './controller.js'
import { verifyToken } from '../../middlewares/auth.js'

const router = new App()

router.use(verifyToken)
router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.patch('/:id', updateUser)
router.patch('/set-remove-admin/:id', setRemoveAdmin)
router.patch('/set-remove-active/:id', setRemoveActive)

export default router
