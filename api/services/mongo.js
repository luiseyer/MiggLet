import { createConnection } from 'mongoose'

const conn = (() => {
  const URI = process.env.MONGO_URI
  const options = { autoIndex: true }
  const connection = createConnection(URI, options)
  return connection
})()

/**
 * Verifica los campos marcados como únicos en un Modelo
 * @param keys {String[]} - Array con los campos marcados como únicos
 * @param entity {String} - Nombre del Modelo
 * @param doc - Documento actual
 * @param next - Función `next`
 */
const verifyUniqueKeys = async (keys, entity, doc, next) => {
  let hasError = false
  let errors = {}
  let messages = ''
  const entities = await conn.model(entity).find({}).lean()

  for (const key of keys) {
    const uniqueKeys = entities.map(ent => ent[key])
    if (uniqueKeys.includes(doc[key])) {
      hasError = true
      errors = {
        [key]: {
          name: 'UniqueKeyViolation',
          message: `Path \`${key}\` (\`${doc[key]}\`) is not unique.`,
          kind: 'unique',
          path: key
        }
      }
      messages += ` ${key}: ${errors[key].message}`
    }
  }
  if (hasError) {
    const error = new Error()
    error.name = 'UniqueKeyViolation'
    error.errors = errors
    error.message = `Unique Key Violation: ${messages}`
    next(error)
  }
}

export { conn, verifyUniqueKeys }
