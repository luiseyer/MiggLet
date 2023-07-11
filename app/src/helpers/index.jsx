import html2md from 'html-to-md'
import { marked } from 'marked'

export const formatDate = (dateString, format) => {
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

export const markdownToHtml = (data) => {
  if (data) {
    return marked.parse(data, { mangle: false, headerIds: false }).replaceAll('<h6>', '<h6 style="margin: 0; font-family: \'Roboto\',\'Helvetica\',\'Arial\',sans-serif; line-height: 1.75; letter-spacing: 0.00938em; font-size: 1.15rem; font-weight: 500;">')
  }
  return ''
}

export const htmlToMarkdown = (html) => {
  if (html) {
    return html2md(html)
  }
  return ''
}
