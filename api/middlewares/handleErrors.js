const ERROR_HANDLERS = {
  CastError: (res, { name, message }) =>
    res.status(400).json({ error: { name, message } }),

  ValidationError: (res, { name, errors }) =>
    res.status(400).json({ error: { name, errors } }),

  MongoServerError: (res, { name, message }) =>
    res.status(500).json({ error: { name, message } }),

  JsonWebTokenError: (res, { name, message }) =>
    res.status(401).json({ error: { name, message } }),

  TokenExpiredError: (res, { name, message }) =>
    res.status(401).json({ error: { name, message } }),

  DefaultError: (res) => res.sendStatus(500)
}

function handleErrors (error, req, res, next) {
  console.error(error)

  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.DefaultError
  handler(res, error)
}

export default handleErrors
