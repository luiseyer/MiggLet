import { connect } from 'mongoose'

const mongodbConnect = async () => {
  const URI = process.env.MONGO_URI
  const options = { autoIndex: true }
  await connect(URI, options)
    .then(() => console.log('database connect'))
    .catch(error => console.error(error))
}

export default mongodbConnect
