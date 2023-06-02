const dataUsers = [
  {
    id: '62966239',
    dni: '15109403',
    email: 'Madelynn58@gmail.com',
    code: '78956055',
    password: '12345678',
    firstnames: 'Madelynn Orval',
    lastnames: 'Graham Yundt',
    phone: '(930) 399-0435',
    department: 'Unidad de Hematología/Oncología e Inmunología',
    specialty: 'Inmunólogo'
  },
  {
    id: '41794649',
    dni: '74953971',
    email: 'Justus.Kuhic52@yahoo.com',
    code: '05557217',
    password: '12345678',
    firstnames: 'Justus Luisa',
    lastnames: 'Steuber Smitham',
    phone: '(492) 596-2783',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo'
  },
  {
    id: '91282383',
    dni: '98997139',
    email: 'Addie_Luettgen@hotmail.com',
    code: '57660084',
    password: '12345678',
    firstnames: 'Addie Daryl',
    lastnames: 'Swift Weber',
    phone: '(819) 097-4931',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo'
  },
  {
    id: '31108672',
    dni: '38177100',
    email: 'Gay.Kassulke@gmail.com',
    code: '09508775',
    password: '12345678',
    firstnames: 'Gay Addie',
    lastnames: 'Kling Wilderman',
    phone: '(868) 065-8791',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo'
  },
  {
    id: '16113228',
    dni: '45264683',
    email: 'Demario_Reichel@yahoo.com',
    code: '34275083',
    password: '12345678',
    firstnames: 'Demario Skyla',
    lastnames: 'Littel Schuster',
    phone: '(204) 037-8551',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo'
  },
  {
    id: '04209971',
    dni: '61144993',
    email: 'Jaylon9@yahoo.com',
    code: '75257706',
    password: '12345678',
    firstnames: 'Jaylon Alex',
    lastnames: 'Hauck Tremblay',
    phone: '(231) 972-3553',
    department: 'Unidad de Hematología/Oncología e Inmunología',
    specialty: 'Inmunólogo'
  },
  {
    id: '33147984',
    dni: '90304464',
    email: 'Joannie.Kuvalis@yahoo.com',
    code: '37581143',
    password: '12345678',
    firstnames: 'Joannie Tiana',
    lastnames: 'Rodriguez Kozey',
    phone: '(238) 309-9221',
    department: 'Unidad de Hematología/Oncología e Inmunología',
    specialty: 'Inmunólogo'
  },
  {
    id: '07812120',
    dni: '90648587',
    email: 'Morton.Howe@gmail.com',
    code: '87514939',
    password: '12345678',
    firstnames: 'Morton Andy',
    lastnames: 'Kunde Blick',
    phone: '(590) 879-1066',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo'
  },
  {
    id: '60833544',
    dni: '98418582',
    email: 'Ewald10@gmail.com',
    code: '17306552',
    password: '12345678',
    firstnames: 'Ewald Roxane',
    lastnames: 'Johnston Fahey',
    phone: '(979) 924-4909',
    department: 'Unidad de Hematología/Oncología e Inmunología',
    specialty: 'Inmunólogo'
  },
  {
    id: '05760607',
    dni: '89646860',
    email: 'Devan_Howell@yahoo.com',
    code: '70302547',
    password: '12345678',
    firstnames: 'Devan Abigayle',
    lastnames: 'Goldner Heaney',
    phone: '(987) 565-1059',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo'
  },
  {
    id: '14856734',
    dni: '89675847',
    email: 'Gudrun85@yahoo.com',
    code: '09355473',
    password: '12345678',
    firstnames: 'Gudrun Joannie',
    lastnames: 'Ortiz Watsica',
    phone: '(607) 251-9620',
    department: 'Unidad de Hematología/Oncología e Inmunología',
    specialty: 'Inmunólogo'
  },
  {
    id: '85548838',
    dni: '73906442',
    email: 'Graciela.Mann23@gmail.com',
    code: '53331606',
    password: '12345678',
    firstnames: 'Graciela Constance',
    lastnames: 'Morar Veum',
    phone: '(502) 935-4070',
    department: 'Unidad de Psiquiatría',
    specialty: 'Psiquiatra'
  },
  {
    id: '29659878',
    dni: '79209007',
    email: 'Bernice.Rau22@hotmail.com',
    code: '71612009',
    password: '12345678',
    firstnames: 'Bernice Orland',
    lastnames: 'Beier Bahringer',
    phone: '(342) 411-8019',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo'
  },
  {
    id: '37211101',
    dni: '68188585',
    email: 'Darrin44@gmail.com',
    code: '23115209',
    password: '12345678',
    firstnames: 'Darrin Hallie',
    lastnames: 'Davis Hand',
    phone: '(336) 500-9966',
    department: 'Unidad de Psiquiatría',
    specialty: 'Psiquiatra'
  },
  {
    id: '96503078',
    dni: '29391862',
    email: 'Noelia37@gmail.com',
    code: '72316495',
    password: '12345678',
    firstnames: 'Noelia Presley',
    lastnames: 'Hilll Dicki',
    phone: '(602) 772-4290',
    department: 'Unidad de Hematología/Oncología e Inmunología',
    specialty: 'Inmunólogo'
  },
  {
    id: '53821312',
    dni: '14081421',
    email: 'Angelina.McDermott@yahoo.com',
    code: '88717117',
    password: '12345678',
    firstnames: 'Angelina Jeffrey',
    lastnames: 'Homenick Hoeger',
    phone: '(845) 157-8535',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo'
  },
  {
    id: '11423310',
    dni: '98056198',
    email: 'Julie.Renner61@yahoo.com',
    code: '70943939',
    password: '12345678',
    firstnames: 'Julie Mario',
    lastnames: 'Sanford Weimann',
    phone: '(128) 276-0727',
    department: 'Unidad de Psiquiatría',
    specialty: 'Psiquiatra'
  }
]

const data = {
  users: dataUsers.map((user, i) => {
    user.profilePictureURL = `/public/users/${i + 1}.jpg`
    return user
  })
}

export default data
