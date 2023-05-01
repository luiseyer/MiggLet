import { App } from '@tinyhttp/app'
import userController from './controller.js'

const router = new App()

router.get('/', userController.getAll)
router.get('/:id', userController.getOne)
router.post('/', userController.create)
router.patch('/:id', userController.update)
router.delete('/:id', userController.delete)

export default router
