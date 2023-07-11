const single = (resource, authUser) => ({
  id: resource._id,
  dni: resource.dni,
  medicalRecordNumber: resource.medicalRecordNumber.toString().padStart(4, '0'),
  birthdate: resource.birthdate,
  firstnames: resource.firstnames,
  lastnames: resource.lastnames,
  location: resource.location,
  consultations: consultations(resource.consultations),
  medicalBackgrounds: resource.medicalBackgrounds
})

const consultations = (consultations) =>
  consultations.map(({ medic, date, description, _id }) => ({
    id: _id,
    date,
    description,
    medic: `${medic.firstnames} ${medic.lastnames}`
  })).sort((a, b) => new Date(b.date) - new Date(a.date))

const multiple = (resources, authUser) =>
  resources.map(resource => single(resource, authUser))

export { single, multiple }
