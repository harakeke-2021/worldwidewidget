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
})
