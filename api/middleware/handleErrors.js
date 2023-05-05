const ERROR_HANDLERS = {
  CastError: (res, { name, message }) =>
    res.status(400).json({ error: { name, message } }),

  ValidationError: (res, { name, errors }) =>
    res.status(400).json({ error: { name, errors } }),

  UniqueKeyViolation: (res, { name, errors }) =>
    res.status(400).json({ error: { name, errors } }),

  DefaultError: res =>
    res.sendStatus(500)
}

function handleErrors (error, req, res, next) {
  const { outError } = JSON.parse(JSON.stringify({ outError: { name: error.name, message: error.message } }))
  console.log(outError)

  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.DefaultError
  handler(res, error)
}

export default handleErrors
