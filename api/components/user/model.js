import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  dni: { type: String, unique: true },
  password: String,
  isAdmin: Boolean
})

const User = model('User', UserSchema)

export default User
