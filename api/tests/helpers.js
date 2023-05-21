import supertest from 'supertest'
import app from '../app.js'

const api = supertest(app.attach)
const autorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTdmODU2NWFiMTI1NzQwZmM4ZDk0OSIsImRuaSI6IjI5OTc5MjQzIiwiaWF0IjoxNjgzNDk0NzI5fQ.J5K_4wOJzaw3bDryLRg2lQ71oSb0lf2-57V1Cooqssc'
const users = [
  { _id: '64502948553e8f158d93235a', dni: '29979243', code: 1, email: 'luis@reyes.com', password: 'pass1234' },
  { _id: '64502948553e8f158d93235b', dni: '28522135', code: 2, email: 'joseilys@yanez.com', password: 'pass1234' }
]

export { api, users, autorization }
