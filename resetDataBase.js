import dotenv from 'dotenv'
import User from './api/components/user/model.js'
import { api, users } from './api/tests/helpers.js'
np
const resetDataBase = async () => {
  for (const user of users) {
    await api
      .post('/api/users')
      .set('Content-Type', 'application/json')
      .send(user)
  }
}

console.log('Reiniciando base de datos...')
resetDataBase().then(() => console.log('Base de datos reiniciada'))
