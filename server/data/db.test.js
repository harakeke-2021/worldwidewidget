const db = require('./db')
const runSeeds = require('./seeds')

beforeEach(() => {
  runSeeds(db.datastores)
})

describe('database interaction', () => {
  it('can return all pages', () => {
    return db.getPages()
      .then(pages => {
        expect(pages).toHaveLength(2)
        return null
      })
  })

  it('can return a page by name', () => {
    return db.getPageByName('kenneth')
      .then(page => {
        expect(page.name).toBe('kenneth')
        return null
      })
  })

  it('can insert a new page', async () => {
    const inserted = await db.createPage('james')
    expect(inserted.name).toBe('james')

    db.datastores.pages.findOne({ name: 'james' }, (err, doc) => {
      expect(doc.name).toBe('james')
      if (err) throw err
    })
  })
})
