import { users } from './helpers.js'
import User from '../components/user/model.js'

test('Reiniciando base de datos', async () => {
  await User.deleteMany({})

  for (const user of users) {
    await new User(user).save()
  }
})
