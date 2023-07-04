import { Schema, Types } from 'mongoose'
import { conn } from '../../services/mongo.js'

const consultationSchema = new Schema({
  date: { type: Date },
  medic: { type: Types.ObjectId, ref: 'User' },
  description: { type: String }
})

const MedicalBackgroundSchema = new Schema({
  name: { type: String },
  description: { type: String }
})

const PatientSchema = new Schema({
  dni: { type: String, required: true, unique: true },
  medicalRecordNumber: { type: String, required: true, unique: true },
  birthdate: { type: Date },
  firstnames: { type: String },
  lastnames: { type: String },
  location: { type: String },
  consultations: { type: [consultationSchema] },
  medicalBackgrounds: { type: [MedicalBackgroundSchema] }
})

const Patient = conn.model('Patient', PatientSchema)

export default Patient
