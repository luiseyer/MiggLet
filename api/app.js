import { App } from '@tinyhttp/app'
import * as dotenv from '@tinyhttp/dotenv'
import mongodbConnect from './services/mongo.js'
import routes from './routes/index.js'

dotenv.config()
mongodbConnect()

const app = new App()

app.use('/api', routes)

export default app
