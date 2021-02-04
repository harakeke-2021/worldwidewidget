const { pages } = require('./datastores')

async function getPages () {
  pages.find({}, (err, docs) => {
    if (err) throw err
    return docs
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
  getPages,
  getPageByName,
  createPage
}
