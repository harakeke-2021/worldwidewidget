const datastores = require('./datastores')
const { pages } = datastores

async function getPages () {
  return new Promise((resolve, reject) => {
    pages.find({}, (err, docs) => {
      if (err) reject(err)
      resolve(docs)
    })
  })
}

async function getPageByName (name) {
  return new Promise((resolve, reject) => {
    pages.findOne({ name }, (err, docs) => {
      if (err) reject(err)
      resolve(docs)
    })
  })
}

async function createPage (name) {
  return new Promise((resolve, reject) => {
    pages.insert({
      name,
      createdAt: new Date(),
      widgets: []
    }, (err, newDoc) => {
      if (err) reject(err)
      resolve(newDoc)
    })
  })
}

module.exports = {
  datastores,
  getPages,
  getPageByName,
  createPage
}
