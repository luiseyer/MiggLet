import supertest from 'supertest'
import app from '../app.js'

const api = supertest(app.attach)

export { api }
