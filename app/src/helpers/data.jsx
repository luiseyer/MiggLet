const data = {
  users: [
    {
      dni: '28522135',
      firstnames: 'Joseilys Yaileth',
      lastnames: 'Yanez Garces'
    },
    {
      dni: '29979243',
      firstnames: 'Luis Fernando',
      lastnames: 'Reyes Piña'
    },
    {
      dni: '7472701',
      firstnames: 'Migdalia Guadalupe',
      lastnames: 'Reyes Piña'
    },
    {
      dni: '29979240',
      firstnames: 'Luis Manuel',
      lastnames: 'Reyes Piña'
    },
    // repeat
    ...(() => {
      const rest = []
      for (let i = 0; i < 12; i++) {
        rest.push({
          dni: '12345678',
          firstnames: 'Usuario',
          lastnames: 'Aleatorio'
        })
      }
      return rest
    })()
  ]
}

export default data
