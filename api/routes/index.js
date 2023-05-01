import { App } from '@tinyhttp/app'
import userRoutes from '../components/user/routes.js'

const router = new App()

router.use('/users', userRoutes)

export default router
