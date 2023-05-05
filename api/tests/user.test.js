import { api } from './helpers.js'
import { User } from '../components/user/model.js'

describe('Test del componente de usuarios', () => {
  beforeAll(async () => {
    await User.deleteMany({})
    const user = new User({ _id: '64502948553e8f158d93235a', dni: '29979243', password: 'pswd1234' })
    await user.save()
  })

  describe('Obteniendo usuarios', () => {
    test('Obteniendo multiples usuarios', async () => {
      await api
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('Obteniendo usuario por ID', async () => {
      await api
        .get('/api/users/64502948553e8f158d93235a')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('Obteniendo usuario que no existe', async () => {
      await api
        .get('/api/users/00000000000f00000000000f')
        .expect(404)
    })

    test('Obteniendo usuario con ID no válida', async () => {
      await api
        .get('/api/users/invalid-id')
        .expect(400)
        .expect('Content-Type', /application\/json/)
    })
  })

  describe('Creando usuarios', () => {
    test('Creando un usuario', async () => {
      const user = JSON.stringify({ dni: '28522135', password: 'pwsd1234' })
      await api
        .post('/api/users')
        .set('Content-Type', 'application/json')
        .send(user)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    })

    test('Creando usuario que ya existe', async () => {
      const user = JSON.stringify({ dni: '29979243', password: 'pwsd1234' })
      await api
        .post('/api/users')
        .set('Content-Type', 'application/json')
        .send(user)
        .expect(400)
        .expect('Content-Type', /application\/json/)
    })

    test('Creando usuario con datos invalidos', async () => {
      const user = JSON.stringify({ password: '1' })
      await api
        .post('/api/users')
        .set('Content-Type', 'application/json')
        .send(user)
        .expect(400)
        .expect('Content-Type', /application\/json/)
    })
  })

  describe('Borrando usuarios', () => {
    test('Borrando usuario por ID', async () => {
      await api
        .delete('/api/users/64502948553e8f158d93235a')
        .expect(204)
    })

    test('Borrando usuario con ID no válida', async () => {
      await api
        .delete('/api/users/invalid-id')
        .expect(400)
        .expect('Content-Type', /application\/json/)
    })
  })
})
