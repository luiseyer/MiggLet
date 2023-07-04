import { users, patients } from './helpers.js'
import User from '../components/user/model.js'
import Patient from '../components/patient/model.js'

beforeAll(async () => {
  await User.deleteMany({})
  await Patient.deleteMany({})

  for (const user of users) {
    await new User(user).save()
  }

  for (const patient of patients) {
    await new Patient(patient).save()
  }
})

test('Reiniciando base de datos', () => {})
