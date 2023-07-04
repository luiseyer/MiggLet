import { App } from '@tinyhttp/app'
import userRoutes from '../components/user/routes.js'
import patientRoutes from '../components/patient/routes.js'
import { login } from '../middlewares/auth.js'

const router = new App()

router.use('login', login)
router.use('/users', userRoutes)
router.use('/patients', patientRoutes)

export default router
