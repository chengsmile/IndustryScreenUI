
const baseUrl = require('../build/devServer.config').baseUrl

module.exports = {
  baseurl: process.env.NODE_ENV === 'production' ? '' : baseUrl
}
