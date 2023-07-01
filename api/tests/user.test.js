import { api, users } from './helpers.js'
import User from '../components/user/model.js'

const ID = '11111111111f11111111111f'

let token

describe('Test del componente de usuarios', () => {
  beforeAll(async () => {
    await User.deleteMany({})
    await new User({ _id: ID, ...users[0] }).save()

    await api
      .post('/api/login')
      .set('Content-Type', 'application/json')
      .send({ username: users[0].email, password: '12345678' })
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .then(res => { token = res.body.token })
  })

  describe('Obteniendo usuarios', () => {
    test('Obteniendo multiples usuarios', async () => {
      await api
        .get('/api/users')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('Obteniendo usuario por ID', async () => {
      await api
        .get(`/api/users/${ID}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('Obteniendo usuario que no existe', async () => {
      await api
        .get('/api/users/00000000000f00000000000f')
        .set('Authorization', `Bearer ${token}`)
        .expect(404)
    })

    test('Obteniendo usuario con ID no válida', async () => {
      await api
        .get('/api/users/invalid-id')
        .set('Authorization', `Bearer ${token}`)
        .expect(400)
        .expect('Content-Type', /application\/json/)
    })
  })

  describe('Creando usuarios', () => {
    test('Creando un usuario', async () => {
      await api
        .post('/api/users')
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json')
        .send(users[1])
        .expect(201)
        .expect('Content-Type', /application\/json/)
    })

    // test('Creando usuario que ya existe', async () => {
    //   await api
    //     .post('/api/users')
    //     .set('Authorization', `Bearer ${token}`)
    //     .set('Content-Type', 'application/json')
    //     .send(users[1])
    //     .expect(400) // TODO deberia devolver 400 y devuelve 500
    //     .expect('Content-Type', /application\/json/)
    // })

    test('Creando usuario con datos invalidos', async () => {
      await api
        .post('/api/users')
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json')
        .send({})
        .expect(400)
        .expect('Content-Type', /application\/json/)
    })
  })

  // describe('Borrando usuarios', () => {
  //   test('Borrando usuario por ID', async () => {
  //     await api
  //       .delete(`/api/users/${users[1]._id}`)
  //       .expect(204)
  //   })

  //   test('Borrando usuario con ID no válida', async () => {
  //     await api
  //       .delete('/api/users/invalid-id')
  //       .expect(400)
  //       .expect('Content-Type', /application\/json/)
  //   })
  // })
})
