import { Router } from 'express'
import medic from '../components/medic/routes.js'

const router = Router()

router.use('/medic', medic)

export default router
