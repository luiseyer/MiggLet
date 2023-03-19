import express from 'express'
import routes from './routes/index.js'

const app = express()

app.use(express.json())
app.use(express.static('file.js'))
app.use('/api', routes)

export default app
