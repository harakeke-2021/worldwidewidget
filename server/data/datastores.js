const Datastore = require('nedb')
const path = require('path')

const isTest = process.env.NODE_ENV === 'test'

const pages = getDatastore(path.join(__dirname, './persist/pages.nedb'))

function getDatastore (filename) {
  return isTest ? new Datastore() : new Datastore({ filename, autoload: true })
}

module.exports = {
  pages
}
