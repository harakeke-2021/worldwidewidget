function seedPages (pages) {
  pages.remove({}, { multi: true })
  pages.insert([
    {
      name: 'kenneth',
      createdAt: new Date(),
      widgets: [
        {
          name: 'weather',
          config: {
            city: 'auckland',
            unit: 'c'
          }
        }, {
          name: 'kanye'
        }
      ]
    }, {
      name: 'tausani',
      createdAt: new Date(),
      widgets: [
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' },
        { name: 'kanye' }
      ]
    }
  ])
  pages.persistence.compactDatafile()
}

function runSeeds (datastores) {
  const { pages } = datastores
  seedPages(pages)
}

if (require.main === module) {
  const datastores = require('./datastores')
  runSeeds(datastores)
  console.log('ran seeds')
}

module.exports = runSeeds
