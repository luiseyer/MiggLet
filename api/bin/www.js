import { createServer } from 'http'
import app from '../app.js'

const PORT = process.env.PORT
const server = createServer(app.attach)

server.listen(PORT, () =>
  console.log(`---> Server is running in http://localhost:${PORT}`))
