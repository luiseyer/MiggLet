import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.send('Fetching All Users'))
router.post('/', () => { })
router.get('/:id', (req, res) => res.send('Fetching User By Id ' + req.params.id))
router.patch('/:id', () => { })
router.delete('/:id', () => { })

export default router
