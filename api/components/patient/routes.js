import { App } from '@tinyhttp/app'
import {
  getPatients,
  getPatient,
  createPatient,
  updatePatient
} from './controller.js'
import { verifyToken } from '../../middlewares/auth.js'

const router = new App()

router.use(verifyToken)
router.get('/', getPatients)
router.get('/:id', getPatient)
router.post('/', createPatient)
router.patch('/:id', updatePatient)

export default router
