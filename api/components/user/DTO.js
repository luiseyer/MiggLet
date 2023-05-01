const DTO = {
  single: (resource, authUser) => ({
    id: resource._id,
    dni: resource.dni
  }),

  multiple: (resources, authUser) => resources
    .map(resource => DTO
      .single(resource, authUser))

}

export default DTO
