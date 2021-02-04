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
}

function runSeeds (datastores) {
  const { pages } = datastores

  setTimeout(() => {
    seedPages(pages)
  }, 1000)
}

module.exports = runSeeds
