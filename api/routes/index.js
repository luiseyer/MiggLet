import { App } from '@tinyhttp/app'
import userRoutes from '../components/user/routes.js'
import { login, verifyToken } from '../middlewares/auth.js'

const router = new App()

router.use('login', login)
router.use('/users', verifyToken, userRoutes)

export default router
