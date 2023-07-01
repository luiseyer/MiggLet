import { Schema } from 'mongoose'
import { conn } from '../../services/mongo.js'

const UserSchema = new Schema({
  dni: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 8 },
  firstnames: { type: String },
  lastnames: { type: String },
  phone: { type: String },
  profilePictureURL: { type: String },
  department: { type: String },
  specialty: { type: String },
  isAdmin: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true }
})

const User = conn.model('User', UserSchema)

export default User
