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
  medicalRecordNumber: { type: Number },
  birthdate: { type: Date },
  firstnames: { type: String },
  lastnames: { type: String },
  location: { type: String },
  consultations: { type: [consultationSchema] },
  medicalBackgrounds: { type: [MedicalBackgroundSchema] }
},
{ timestamps: true })

PatientSchema.pre('save', function (next) {
  if (this.isNew) {
    this.constructor.find({}).then((result) => {
      this.medicalRecordNumber = result.length + 1
      next()
    })
  }
})

const Patient = conn.model('Patient', PatientSchema)

export default Patient
