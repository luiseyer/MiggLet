const getMedic = (medicId) => {
  // const { dni, firstnames, lastnames } = users.find(({ id }) => id === medicId)
  // return `${firstnames} ${lastnames} - ${dni}`
}

const users = [
  {
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
    dni: '21751500',
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
    dni: '12099858',
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
    dni: '13488315',
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
    dni: '13425862',
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
    dni: '17834901',
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
    dni: '19154542',
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
    dni: '18425641',
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
    dni: '9156017',
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
    dni: '13599444',
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
    dni: '9511607',
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
    dni: '24408937',
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
    dni: '11151424',
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
    dni: '19724055',
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
    dni: '19381990',
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
    dni: '9293796',
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
    dni: '15104832',
    email: 'jagm@gmail.com',
    code: '40317251',
    password: '12345678',
    firstnames: 'Julio Armando',
    lastnames: 'Gómez Martínez',
    phone: '+58 424-881-6094',
    profilePictureURL: '/images/users/17.jpg',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo',
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
  }
]

const data = {
  users,
  patients
}

export default data
