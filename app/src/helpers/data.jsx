<<<<<<< HEAD
const getMedic = (medicId) => {
  const { dni, firstnames, lastnames } = users.find(({ id }) => id === medicId)
  return `${firstnames} ${lastnames} - ${dni}`
}

const users = [
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae6',
    dni: '17343109',
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
    dni: '21751500',
    email: 'MisaelDavidSalazarMadriz@hotmail.com',
    code: '26528479',
    password: '12345678',
=======
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
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '12099858',
=======
    dni: 'V-12.099.858',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '13488315',
=======
    dni: 'V-13.488.315',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '13425862',
=======
    dni: 'V-13.425.862',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '17834901',
=======
    dni: 'V-17.834.901',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '19154542',
=======
    dni: 'V-19.154.542',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '18425641',
=======
    dni: 'V-18.425.641',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '9156017',
=======
    dni: 'V-9.156.017',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '13599444',
=======
    dni: 'V-13.599.444',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '9511607',
=======
    dni: 'V-9.511.607',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '24408937',
=======
    dni: 'V-24.408.937',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '11151424',
=======
    dni: 'V-11.151.424',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '19724055',
=======
    dni: 'V-19.724.055',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '19381990',
=======
    dni: 'V-19.381.990',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '9293796',
=======
    dni: 'V-9.293.796',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
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
<<<<<<< HEAD
    dni: '15104832',
    email: 'jagm@gmail.com',
=======
    dni: 'V-15.104.832',
    email: 'JulioArmandoGomezMartinez@yahoo.com',
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
    code: '40317251',
    password: '12345678',
    firstnames: 'Julio Armando',
    lastnames: 'Gómez Martínez',
    phone: '+58 424-881-6094',
    profilePictureURL: '/images/users/17.jpg',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo',
<<<<<<< HEAD
    isAdmin: true
  }
]

const medicalBacgrounds = [
  {
    name: 'familiares',
    description: '- Hipertensión arterial en madre y padre\n- Enfermedad renal crónica en tío materno\n- Diabetes tipo 2 en abuelo paterno'
  },
  {
    name: 'personales',
    description: '- Alergia al polen y al polvo\n- Consumo de tabaco (10 cigarrillos al día)\n- Cirugía de apendicitis a los 25 años'
  }
]

const consultations = [
  {
    date: '2022-10-20 11:15:00',
    medic: getMedic('28b5d69a4c-99e5d00daa-09353ddae6'),
    description: '- **Motivo de consulta**: Tos persistente y dificultad para respirar\n - **Examen físico**: Roncus en los pulmones, disminución de los ruidos respiratorios\n - **Diagnóstico**: Bronquitis crónica\n - **Tratamiento**: Medicamentos broncodilatadores y corticosteroides inhalados, fisioterapia respiratoria\n - **Evolución**: Síntomas mejoran con el tratamiento, se recomienda evitar exposición al humo y seguimiento regular.'
  },
  {
    date: '2022-11-15 14:30:00',
    medic: getMedic('fa0cf2f8c0-12c2e2a773-334bdb7535'),
    description: '- **Motivo de consulta**: Dolor abdominal y diarrea persistente\n - **Examen físico**: Sensibilidad en el abdomen, presencia de distensión abdominal\n - **Diagnóstico**: Gastroenteritis aguda\n - **Tratamiento**: Reposo intestinal, hidratación oral con suero oral, dieta blanda, medicamentos antidiarreicos y probióticos\n - **Evolución**: Los síntomas mejoran gradualmente con el tratamiento, se recomienda mantener una buena higiene alimentaria y seguir las indicaciones médicas.'
  },
  {
    date: '2022-12-02 10:00:00',
    medic: getMedic('3c8de3fa25-88c776b796-f06adc5b56'),
    description: '- **Motivo de consulta**: Dolor en el pecho y dificultad para respirar\n - **Examen físico**: Dolor a la palpación en el área del pecho, respiración rápida y superficial\n - **Diagnóstico**: Posible neumonía\n - **Tratamiento**: Se ordena una radiografía de tórax para confirmar el diagnóstico. Mientras tanto, se indica reposo, analgésicos para aliviar el dolor y se recomienda aumentar la ingesta de líquidos.\n - **Evolución**: Se espera obtener los resultados de la radiografía en los próximos días para confirmar el diagnóstico. Se recomienda seguir las indicaciones médicas y acudir a una consulta de seguimiento.'
  }
]

const patients = [
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae0',
    dni: '20659874',
    medicalRecordNumber: '0001',
    firstnames: 'Carlos Eduardo',
    lastnames: 'González Flores',
    birthdate: '1990-11-25 12:15:00',
    location: 'Falcón, Punto Fijo, Calle Los Jardines, Casa #5',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae1',
    dni: '18653217',
    medicalRecordNumber: '0002',
    firstnames: 'María Alejandra',
    lastnames: 'Rodríguez Torres',
    birthdate: '1985-06-10 09:45:00',
    location: 'Falcón, Coro, Avenida Libertador, Casa #12',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae2',
    dni: '21478953',
    medicalRecordNumber: '0003',
    firstnames: 'Juan Carlos',
    lastnames: 'Pérez Ramírez',
    birthdate: '1992-03-18 15:30:00',
    location: 'Falcón, Punto Fijo, Calle Los Pinos, Casa #8',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae3',
    dni: '19785632',
    medicalRecordNumber: '0004',
    firstnames: 'Andrea Carolina',
    lastnames: 'Sánchez López',
    birthdate: '1988-09-05 10:20:00',
    location: 'Falcón, Coro, Avenida Miranda, Casa #20',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae4',
    dni: '22874159',
    medicalRecordNumber: '0005',
    firstnames: 'José Luis',
    lastnames: 'Martínez García',
    birthdate: '1997-02-28 14:00:00',
    location: 'Falcón, Dabajuro, Calle El Progreso, Casa #15',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae5',
    dni: '22369875',
    medicalRecordNumber: '0006',
    firstnames: 'Ana María',
    lastnames: 'Torres Medina',
    birthdate: '1991-11-10 11:45:00',
    location: 'Falcón, Coro, Calle Bolívar, Casa #16',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae6',
    dni: '20357986',
    medicalRecordNumber: '0007',
    firstnames: 'Luis Miguel',
    lastnames: 'Rivas Rodríguez',
    birthdate: '1987-07-15 16:10:00',
    location: 'Falcón, Punto Fijo, Calle Los Girasoles, Casa #9',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae7',
    dni: '19784521',
    medicalRecordNumber: '0008',
    firstnames: 'Mariana González',
    lastnames: 'Torres',
    birthdate: '1994-04-02 13:25:00',
    location: 'Falcón, Coro, Avenida Sucre, Casa #7',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae8',
    dni: '20875963',
    medicalRecordNumber: '0009',
    firstnames: 'Alejandro Pérez',
    lastnames: 'Jiménez',
    birthdate: '1989-12-20 09:55:00',
    location: 'Falcón, Chichiriviche, Calle Los Cocos, Casa #10',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddae9',
    dni: '21659874',
    medicalRecordNumber: '0010',
    firstnames: 'Carolina Rodríguez',
    lastnames: 'López',
    birthdate: '1996-08-08 14:35:00',
    location: 'Falcón, Punto Fijo, Avenida Los Olivos, Casa #6',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddaf0',
    dni: '19987425',
    medicalRecordNumber: '0011',
    firstnames: 'José Antonio',
    lastnames: 'Sánchez Ramírez',
    birthdate: '1993-05-12 11:40:00',
    location: 'Falcón, Coro, Calle Los Almendros, Casa #18',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddaf1',
    dni: '22258963',
    medicalRecordNumber: '0012',
    firstnames: 'Gabriela Martínez',
    lastnames: 'Torres',
    birthdate: '1990-09-28 10:15:00',
    location: 'Falcón, Punto Fijo, Avenida Los Pinos, Casa #14',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddaf2',
    dni: '20758963',
    medicalRecordNumber: '0013',
    firstnames: 'Luis Eduardo',
    lastnames: 'Rodríguez Torres',
    birthdate: '1986-03-24 08:50:00',
    location: 'Falcón, Coro, Calle El Carmen, Casa #11',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddaf3',
    dni: '22659874',
    medicalRecordNumber: '0014',
    firstnames: 'Andrés José',
    lastnames: 'Ramírez Sánchez',
    birthdate: '1991-07-03 09:30:00',
    location: 'Falcón, Coro, Calle Andrés Eloy Blanco, Casa #8',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddaf4',
    dni: '19874352',
    medicalRecordNumber: '0015',
    firstnames: 'Camila López',
    lastnames: 'Martínez',
    birthdate: '1987-10-22 15:40:00',
    location: 'Falcón, Punto Fijo, Avenida Los Mangos, Casa #11',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddaf5',
    dni: '20786952',
    medicalRecordNumber: '0016',
    firstnames: 'Juan Manuel',
    lastnames: 'Rivas Torres',
    birthdate: '1996-06-13 14:55:00',
    location: 'Falcón, Coro, Calle Los Abetos, Casa #19',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddaf6',
    dni: '22345678',
    medicalRecordNumber: '0017',
    firstnames: 'María Fernanda',
    lastnames: 'Rodríguez García',
    birthdate: '1989-12-05 10:45:00',
    location: 'Falcón, Pueblo Nuevo, Calle Los Pajaritos, Casa #3',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddaf7',
    dni: '21235698',
    medicalRecordNumber: '0018',
    firstnames: 'Pedro José',
    lastnames: 'Pérez López',
    birthdate: '1994-11-01 08:20:00',
    location: 'Falcón, Coro, Avenida Bolívar, Casa #25',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddaf8',
    dni: '21453698',
    medicalRecordNumber: '0019',
    firstnames: 'Laura Isabel',
    lastnames: 'Sánchez Martínez',
    birthdate: '1992-07-29 13:00:00',
    location: 'Falcón, Punto Fijo, Calle Los Jazmines, Casa #8',
    medicalBacgrounds,
    consultations
  },
  {
    id: '28b5d69a4c-99e5d00daa-09353ddaf9',
    dni: '21659874',
    medicalRecordNumber: '0020',
    firstnames: 'Valentina',
    lastnames: 'García López',
    birthdate: '1995-02-17 13:20:00',
    location: 'Falcón, Punto Fijo, Avenida Los Jardines, Casa #17',
    medicalBacgrounds,
    consultations
=======
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
>>>>>>> b2f80c349da604097adb25e342a648051a3cff89
  }
]

const data = {
  users,
  patients
}

export default data
