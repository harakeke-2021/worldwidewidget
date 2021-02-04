const datastores = require('./datastores')
const { pages } = datastores

async function getPages () {
  return new Promise((resolve, reject) => {
    pages.find({}, (err, docs) => {
      if (err) reject(err)
      console.log(docs)
      resolve(docs)
    })
  })
}

async function getPageByName (name) {
  pages.findOne({ name }, (err, doc) => {
    if (err) throw err
    return doc
  })
}

async function createPage (name) {
  pages.insert({
    name,
    createdAt: new Date(),
    widgets: []
  }, (err, newDoc) => {
    if (err) throw err
    return newDoc
  })
}

module.exports = {
  datastores,
  getPages,
  getPageByName,
  createPage
}
