import { Schema } from 'mongoose'
import { conn, verifyUniqueKeys } from '../../services/mongo.js'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
  dni: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 8 },
  code: { type: String },
  isAdmin: { type: Boolean, default: false },
  firstnames: { type: String },
  lastnames: { type: String },
  profilePictureURL: { type: String, default: 'public/profiles/default.png' },
  specialty: { type: Schema.Types.ObjectId }
})

UserSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10)
})

UserSchema.post('validate', async function (doc, next) {
  await verifyUniqueKeys(['dni'], 'User', doc, next)
})

const User = conn.model('User', UserSchema)

export { User }
