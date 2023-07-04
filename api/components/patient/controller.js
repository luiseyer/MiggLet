import Patient from './model.js'
import * as DTO from './dto.js'

const getPatients = async (req, res, next) => {
  try {
    const page = req.query.page || 0
    const limit = req.query.limit || 10
    const counter = req.query.counter || false
    const search = req.query.search && req.query.search.trim().length !== 0
      ? req.query.search
      : '.'

    const searchRegExp = new RegExp(`(${search})+`, 'gui')

    const filters = {
      $or: [
        { firstnames: searchRegExp },
        { lastnames: searchRegExp },
        { dni: searchRegExp }
      ]

    }

    const patients = !counter
      ? await Patient.find(filters).skip(page * limit).limit(limit).populate('consultations.medic')
      : []
    const count = await Patient.find(filters).count()

    return res.json({ patients: DTO.multiple(patients), count })
  } catch (error) { next(error) }
}

const getPatient = async (req, res, next) => {
  try {
    const { id } = req.params

    const patient = await Patient.findById(id).populate('consultations.medic')
    return patient
      ? res.json(DTO.single(patient))
      : res.sendStatus(404)
  } catch (error) { next(error) }
}

const createPatient = async (req, res, next) => {
  try {
    const {
      dni,
      medicalRecordNumber,
      birthdate,
      firstnames,
      lastnames,
      location,
      consultations,
      medicalBackgrounds
    } = req.body

    await Patient.validate({
      dni,
      medicalRecordNumber,
      birthdate,
      firstnames,
      lastnames,
      location,
      consultations,
      medicalBackgrounds
    })

    const newPatient = new Patient({
      dni,
      medicalRecordNumber,
      birthdate,
      firstnames,
      lastnames,
      location,
      consultations,
      medicalBackgrounds
    })

    const savedPatient = await newPatient.save()

    return res.status(201).json(DTO.single(savedPatient))
  } catch (error) { next(error) }
}

const updatePatient = async (req, res, next) => {
  try {
    const { id } = req.params

    const { dni } = req.body

    await Patient.findByIdAndUpdate(id, {
      $set: { dni }
    })

    const updatedPatient = await Patient.findById(id)

    return res.status(200).json(DTO.single(updatedPatient))
  } catch (error) { next(error) }
}

export { getPatients, getPatient, createPatient, updatePatient }
