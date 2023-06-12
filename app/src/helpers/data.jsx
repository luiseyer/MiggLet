const users = [
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae6',
    dni: 'V-17.343.109',
    email: 'LeydaMargaritaVelazco@yahoo.com',
    code: '94700573',
    password: '12345678',
    firstnames: 'Leyda Margarita',
    lastnames: 'Velazco',
    phone: '+58 426-940-4305',
    profilePictureURL: '/images/users/1.jpg',
    department: 'Unidad de Psiquiatría',
    specialty: 'Psiquiatra',
    isAdmin: false
  },
  {
    id: 'fa0cf2f8c0-12c2e2a773-334bdb7535',
    dni: 'V-21.751.500',
    email: 'MisaelDavidSalazarMadriz@hotmail.com',
    code: '26528479',
    password: '12345678',
    firstnames: 'Misael David',
    lastnames: 'Salazar Madríz',
    phone: '+58 416-091-3704',
    profilePictureURL: '/images/users/2.jpg',
    department: 'Unidad de Hematología e Inmunología',
    specialty: 'Inmunólogo',
    isAdmin: false
  },
  {
    id: '3c8de3fa25-88c776b796-f06adc5b56',
    dni: 'V-12.099.858',
    email: 'YajairaJosefinaZarraga@gmail.com',
    code: '84901124',
    password: '12345678',
    firstnames: 'Yajaira Josefina',
    lastnames: 'Zarraga',
    phone: '+58 412-256-7581',
    profilePictureURL: '/images/users/3.jpg',
    department: 'Unidad de Psiquiatría',
    specialty: 'Psiquiatra',
    isAdmin: false
  },
  {
    id: '952ed6bec9-352887ae43-bc257bfc0f',
    dni: 'V-13.488.315',
    email: 'JoseLuisMoralesVasquez@gmail.com',
    code: '93156404',
    password: '12345678',
    firstnames: 'José Luis',
    lastnames: 'Morales Vasquez',
    phone: '+58 426-905-9863',
    profilePictureURL: '/images/users/4.jpg',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo',
    isAdmin: false
  },
  {
    id: '3b843a2ef5-558c222edd-6d776362ca',
    dni: 'V-13.425.862',
    email: 'TulioRafaelLugo@hotmail.com',
    code: '59123025',
    password: '12345678',
    firstnames: 'Tulio Rafael',
    lastnames: 'Lugo',
    phone: '+58 424-876-5419',
    profilePictureURL: '/images/users/5.jpg',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo',
    isAdmin: false
  },
  {
    id: '2f5f8d0a13-7037e6a91c-d36fe2ade9',
    dni: 'V-17.834.901',
    email: 'RobertoAntonioGonzalez@hotmail.com',
    code: '12523148',
    password: '12345678',
    firstnames: 'Roberto Antonio',
    lastnames: 'González',
    phone: '+58 424-696-3471',
    profilePictureURL: '/images/users/6.jpg',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo',
    isAdmin: false
  },
  {
    id: '4cc0a6331b-a36a7ac69b-0551a7a491',
    dni: 'V-19.154.542',
    email: 'RichardAlexanderSeferen@yahoo.com',
    code: '29715094',
    password: '12345678',
    firstnames: 'Richard Alexander',
    lastnames: 'Seferen',
    phone: '+58 412-467-5207',
    profilePictureURL: '/images/users/7.jpg',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo',
    isAdmin: false
  },
  {
    id: 'bff386ef99-8595def230-9b194505cb',
    dni: 'V-18.425.641',
    email: 'RosmaryCoromotoPalenciaArteaga@gmail.com',
    code: '01168979',
    password: '12345678',
    firstnames: 'Rosmary Coromoto',
    lastnames: 'Palencia Arteaga',
    phone: '+58 412-606-6034',
    profilePictureURL: '/images/users/8.jpg',
    department: 'Unidad de Hematología e Inmunología',
    specialty: 'Inmunólogo',
    isAdmin: false
  },
  {
    id: '6d9597139a-41b94d562b-18ae7b5f2b',
    dni: 'V-9.156.017',
    email: 'MiguelAngelSangronis@gmail.com',
    code: '99482491',
    password: '12345678',
    firstnames: 'Miguel Angel',
    lastnames: 'Sangronis',
    phone: '+58 426-815-3025',
    profilePictureURL: '/images/users/9.jpg',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo',
    isAdmin: false
  },
  {
    id: 'd608d3b718-d2d87eaa90-20bdbea8a3',
    dni: 'V-13.599.444',
    email: 'GladysVargasVentura@gmail.com',
    code: '23263824',
    password: '12345678',
    firstnames: 'Gladys',
    lastnames: 'Vargas Ventura',
    phone: '+58 412-137-0598',
    profilePictureURL: '/images/users/10.jpg',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo',
    isAdmin: false
  },
  {
    id: '5d7717b931-77ad6dadcf-4847ed0c81',
    dni: 'V-9.511.607',
    email: 'HenryJosChirinosSanchez@gmail.com',
    code: '23481248',
    password: '12345678',
    firstnames: 'Henry José',
    lastnames: 'Chirinos Sánchez',
    phone: '+58 426-522-4680',
    profilePictureURL: '/images/users/11.jpg',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo',
    isAdmin: false
  },
  {
    id: '8ea23a9603-db2e9a5a4d-07c8dc81af',
    dni: 'V-24.408.937',
    email: 'MorelbaGomez@gmail.com',
    code: '82897777',
    password: '12345678',
    firstnames: 'Morelba',
    lastnames: 'Gómez',
    phone: '+58 426-511-3183',
    profilePictureURL: '/images/users/12.jpg',
    department: 'Unidad de Hematología e Inmunología',
    specialty: 'Inmunólogo',
    isAdmin: false
  },
  {
    id: '5dc1c0aac0-4c3f1652ab-8d3ef391c7',
    dni: 'V-11.151.424',
    email: 'BeatrizGarciaHerrera@hotmail.com',
    code: '09252957',
    password: '12345678',
    firstnames: 'Beatriz',
    lastnames: 'García Herrera',
    phone: '+58 414-125-3022',
    profilePictureURL: '/images/users/13.jpg',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo',
    isAdmin: false
  },
  {
    id: '1ab0bfad2c-20556f8e91-f3c36f0b4c',
    dni: 'V-19.724.055',
    email: 'EiraLisbethVenturaCuriel@yahoo.com',
    code: '37862308',
    password: '12345678',
    firstnames: 'Eira Lisbeth',
    lastnames: 'Ventura Curiel',
    phone: '+58 424-735-2342',
    profilePictureURL: '/images/users/14.jpg',
    department: 'Unidad de Psiquiatría',
    specialty: 'Psiquiatra',
    isAdmin: false
  },
  {
    id: 'd6f2e250b3-c7242e4df9-e8f3d69afe',
    dni: 'V-19.381.990',
    email: 'PedroPabloPolanco@gmail.com',
    code: '72780116',
    password: '12345678',
    firstnames: 'Pedro Pablo',
    lastnames: 'Polanco',
    phone: '+58 412-252-1384',
    profilePictureURL: '/images/users/15.jpg',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo',
    isAdmin: false
  },
  {
    id: 'bb2c960072-be05b8b5cc-9dfd029e0c',
    dni: 'V-9.293.796',
    email: 'LuisAlbertoDuranteGarcia@yahoo.com',
    code: '93038331',
    password: '12345678',
    firstnames: 'Luis Alberto',
    lastnames: 'Durante García',
    phone: '+58 416-421-2662',
    profilePictureURL: '/images/users/16.jpg',
    department: 'Unidad de Hematología e Inmunología',
    specialty: 'Inmunólogo',
    isAdmin: false
  },
  {
    id: '8225ce29b9-782e8132e1-cbf8cfbb20',
    dni: 'V-15.104.832',
    email: 'JulioArmandoGomezMartinez@yahoo.com',
    code: '40317251',
    password: '12345678',
    firstnames: 'Julio Armando',
    lastnames: 'Gómez Martínez',
    phone: '+58 424-881-6094',
    profilePictureURL: '/images/users/17.jpg',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo',
    isAdmin: false
  }
]

const patients = [
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae6',
    dni: 'V-17.343.109',
    firstnames: 'Leyda Margarita',
    lastnames: 'Velazco'
  },
  {
    id: 'fa0cf2f8c0-12c2e2a773-334bdb7535',
    dni: 'V-21.751.500',
    firstnames: 'Misael David',
    lastnames: 'Salazar Madríz'
  },
  {
    id: '3c8de3fa25-88c776b796-f06adc5b56',
    dni: 'V-12.099.858',
    firstnames: 'Yajaira Josefina',
    lastnames: 'Zarraga'
  },
  {
    id: '952ed6bec9-352887ae43-bc257bfc0f',
    dni: 'V-13.488.315',
    firstnames: 'José Luis',
    lastnames: 'Morales Vasquez'
  },
  {
    id: '3b843a2ef5-558c222edd-6d776362ca',
    dni: 'V-13.425.862',
    firstnames: 'Tulio Rafael',
    lastnames: 'Lugo'
  },
  {
    id: '2f5f8d0a13-7037e6a91c-d36fe2ade9',
    dni: 'V-17.834.901',
    firstnames: 'Roberto Antonio',
    lastnames: 'González'
  },
  {
    id: '4cc0a6331b-a36a7ac69b-0551a7a491',
    dni: 'V-19.154.542',
    firstnames: 'Richard Alexander',
    lastnames: 'Seferen'
  },
  {
    id: 'bff386ef99-8595def230-9b194505cb',
    dni: 'V-18.425.641',
    firstnames: 'Rosmary Coromoto',
    lastnames: 'Palencia Arteaga'
  },
  {
    id: '6d9597139a-41b94d562b-18ae7b5f2b',
    dni: 'V-9.156.017',
    firstnames: 'Miguel Angel',
    lastnames: 'Sangronis'
  },
  {
    id: 'd608d3b718-d2d87eaa90-20bdbea8a3',
    dni: 'V-13.599.444',
    firstnames: 'Gladys',
    lastnames: 'Vargas Ventura'
  },
  {
    id: '5d7717b931-77ad6dadcf-4847ed0c81',
    dni: 'V-9.511.607',
    firstnames: 'Henry José',
    lastnames: 'Chirinos Sánchez'
  },
  {
    id: '8ea23a9603-db2e9a5a4d-07c8dc81af',
    dni: 'V-24.408.937',
    firstnames: 'Morelba',
    lastnames: 'Gómez'
  },
  {
    id: '5dc1c0aac0-4c3f1652ab-8d3ef391c7',
    dni: 'V-11.151.424',
    firstnames: 'Beatriz'
  },
  {
    id: '1ab0bfad2c-20556f8e91-f3c36f0b4c',
    dni: 'V-19.724.055',
    firstnames: 'Eira Lisbeth',
    lastnames: 'Ventura Curiel'
  },
  {
    id: 'd6f2e250b3-c7242e4df9-e8f3d69afe',
    dni: 'V-19.381.990',
    firstnames: 'Pedro Pablo',
    lastnames: 'Polanco'
  },
  {
    id: 'bb2c960072-be05b8b5cc-9dfd029e0c',
    dni: 'V-9.293.796',
    firstnames: 'Luis Alberto',
    lastnames: 'Durante García'
  },
  {
    id: '8225ce29b9-782e8132e1-cbf8cfbb20',
    dni: 'V-15.104.832',
    firstnames: 'Julio Armando',
    lastnames: 'Gómez Martínez'
  }
]

const data = {
  users,
  patients
}

export default data
