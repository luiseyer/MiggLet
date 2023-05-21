const single = (resource, authUser) => ({
  id: resource._id,
  dni: resource.dni,
  code: resource.code,
  email: resource.email,
  isAdmin: resource.isAdmin,
  firstnames: resource.firstnames,
  lastnames: resource.lastnames,
  specialty: resource.specialty,
  profilePictureURL: resource.profilePictureURL
})

const multiple = (resources, authUser) =>
  resources.map(resource => single(resource, authUser))

export { single, multiple }
