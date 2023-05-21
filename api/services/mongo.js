import dotenv from 'dotenv'
import { createConnection } from 'mongoose'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const URI = process.env.MONGO_URI
const options = { autoIndex: true }

const conn = createConnection(URI, options)

/**
 * Verifica los campos marcados como únicos en un Modelo
 * @param keys {String[]} - Array con los campos marcados como únicos
 * @param entity {String} - Nombre del Modelo
 * @param doc - Documento actual
 * @param next - Función `next`
 */
const verifyUniqueKeys = async (keys, entity, doc, next) => {
  const errors = {}
  let hasError = false
  let messages = ''

  for (const key of keys) {
    const isMatch = await conn.model(entity).findOne({ [key]: doc[key] })
    if (isMatch) {
      hasError = true
      errors[key] = {
        name: 'UniqueKeyViolation',
        message: `Path \`${key}\` (\`${doc[key]}\`) is not unique.`,
        kind: 'unique',
        path: key
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
