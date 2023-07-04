const single = (resource, authUser) => ({
  id: resource._id,
  dni: resource.dni,
  medicalRecordNumber: resource.medicalRecordNumber,
  birthdate: resource.birthdate,
  firstnames: resource.firstnames,
  lastnames: resource.lastnames,
  location: resource.location,
  consultations: consultations(resource.consultations),
  medicalBackgrounds: resource.medicalBackgrounds
})

const consultations = (consultations) =>
  consultations.map(({ medic, date, description }) => ({
    date,
    description,
    medic: `${medic.firstnames} ${medic.lastnames}`
  }))

const multiple = (resources, authUser) =>
  resources.map(resource => single(resource, authUser))

export { single, multiple }
