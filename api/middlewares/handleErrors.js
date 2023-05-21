const ERROR_HANDLERS = {
  CastError: (res, { name, message }) =>
    res.status(400).json({ error: { name, message } }),

  ValidationError: (res, { name, errors }) =>
    res.status(400).json({ error: { name, errors } }),

  UniqueKeyViolation: (res, { name, errors }) =>
    res.status(400).json({ error: { name, errors } }),

  MongoServerError: (res, { name, code, message }) => {
    if (code !== 11000) return res.sendStatus(500)
    res.status(400).json({ error: { name, message } })
  },

  JsonWebTokenError: (res, { name, message }) =>
    res.status(401).json({ error: { name, message } }),

  DefaultError: res =>
    res.sendStatus(500)
}

function handleErrors (error, req, res, next) {
  const { outError } = JSON.parse(JSON.stringify({ outError: { name: error.name, message: error.message } }))
  if (outError.name) { console.error(outError) }

  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.DefaultError
  handler(res, error)
}

export default handleErrors
