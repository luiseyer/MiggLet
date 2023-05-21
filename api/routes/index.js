import { App } from '@tinyhttp/app'
import userRoutes from '../components/user/routes.js'
import { login } from '../middleware/auth.js'

const router = new App()

router.use('login', login)
router.use('/users', userRoutes)

export default router
