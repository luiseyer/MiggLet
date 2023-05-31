const single = (resource, authUser) => ({
  id: resource._id,
  dni: resource.dni,
  code: resource.code,
  email: resource.email,
  firstnames: resource.firstnames,
  lastnames: resource.lastnames,
  profilePictureURL: resource.profilePictureURL,
  department: resource.department,
  specialty: resource.specialty,
  isAdmin: resource.isAdmin,
  isNew: resource.isNew
})

const multiple = (resources, authUser) =>
  resources.map(resource => single(resource, authUser))

export { single, multiple }
