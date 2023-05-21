import { Schema } from 'mongoose'
import { conn } from '../../services/mongo.js'

const UserSchema = new Schema({
  dni: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 8 },
  isAdmin: { type: Boolean, default: false },
  phone: { type: String },
  firstnames: { type: String },
  lastnames: { type: String },
  profilePictureURL: { type: String, default: 'public/profiles/default.png' },
  specialty: { type: Schema.Types.ObjectId }
})

const User = conn.model('User', UserSchema)

export default User
