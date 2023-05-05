import { App } from '@tinyhttp/app'
import { cors } from '@tinyhttp/cors'
import bodyParser from 'body-parser'
import routes from './routes/index.js'
import handleErrors from './middleware/handleErrors.js'

const app = new App({ onError: handleErrors })

app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use('/api', routes)

export default app
