import dotenv from 'dotenv'
import { createConnection } from 'mongoose'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const URI = process.env.MONGO_URI
const options = { autoIndex: true }

const conn = createConnection(URI, options)

export { conn }
