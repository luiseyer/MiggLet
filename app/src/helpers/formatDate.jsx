const formatDate = (dateString, format) => {
  const date = new Date(dateString)

  const IntlDateFormat = (date, options) => new Intl.DateTimeFormat('es-VE', options).format(date)

  const FORMAT_HANDLERS = {
    longShort: date => IntlDateFormat(date, { dateStyle: 'long', timeStyle: 'short' }),
    short: date => IntlDateFormat(date, { dateStyle: 'medium', timeStyle: 'short' }),
    default: date => IntlDateFormat(date, { dateStyle: 'long' })
  }

  const handler = FORMAT_HANDLERS[format] || FORMAT_HANDLERS.default

  return handler(date)
}

export default formatDate
