import { api, users } from './helpers.js'
import User from '../components/user/model.js'

describe('Test del componente de usuarios', () => {
  beforeAll(async () => {
    await User.deleteMany({})
    await new User(users[0]).save()
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
        .get(`/api/users/${users[0]._id}`)
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
      await api
        .post('/api/users')
        .set('Content-Type', 'application/json')
        .send(users[1])
        .expect(201)
        .expect('Content-Type', /application\/json/)
    })

    test('Creando usuario que ya existe', async () => {
      await api
        .post('/api/users')
        .set('Content-Type', 'application/json')
        .send(users[1])
        .expect(400)
        .expect('Content-Type', /application\/json/)
    })

    test('Creando usuario con datos invalidos', async () => {
      await api
        .post('/api/users')
        .set('Content-Type', 'application/json')
        .send({})
        .expect(400)
        .expect('Content-Type', /application\/json/)
    })
  })

  describe('Borrando usuarios', () => {
    test('Borrando usuario por ID', async () => {
      await api
        .delete(`/api/users/${users[1]._id}`)
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
