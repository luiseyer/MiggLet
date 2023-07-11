import supertest from 'supertest'
import bcrypt from 'bcrypt'
import app from '../app.js'

const api = supertest(app.attach)
const autorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTdmODU2NWFiMTI1NzQwZmM4ZDk0OSIsImRuaSI6IjI5OTc5MjQzIiwiaWF0IjoxNjgzNDk0NzI5fQ.J5K_4wOJzaw3bDryLRg2lQ71oSb0lf2-57V1Cooqssc'
const passwordHash = bcrypt.hashSync('migglet404', 10)
const phone = '+58 412-076-8254'

const users = [
  {
    _id: '009dadd786511bb165075e7a',
    dni: '13488315',
    code: '93156404',
    email: 'admin@email.com',
    password: passwordHash,
    firstnames: 'José Luis',
    lastnames: 'Morales Vasquez',
    phone,
    profilePictureURL: '/images/users/4.jpg',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo',
    isAdmin: true,
    isActive: true
  },
  {
    _id: '019dadd786511bb165075e7a',
    dni: '15104832',
    code: '40317251',
    email: 'user@email.com',
    password: passwordHash,
    firstnames: 'Julio Armando',
    lastnames: 'Gómez Martínez',
    phone,
    profilePictureURL: '/images/users/17.jpg',
    specialty: 'Neurólogo',
    isAdmin: false,
    isActive: true,
    department: 'Unidad de Neurología y Neurocirugía'
  },
  {
    _id: '029dadd786511bb165075e7a',
    dni: '17343109',
    code: '94700573',
    email: 'leyda.m.velazco@yahoo.com',
    password: passwordHash,
    firstnames: 'Leyda Margarita',
    lastnames: 'Velazco',
    phone,
    profilePictureURL: '/images/users/1.jpg',
    department: 'Unidad de Psiquiatría',
    specialty: 'Psiquiatra',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '039dadd786511bb165075e7a',
    dni: '21751500',
    code: '26528479',
    email: 'misaelDavid.s.madriz@hotmail.com',
    password: passwordHash,
    firstnames: 'Misael David',
    lastnames: 'Salazar Madríz',
    phone,
    profilePictureURL: '/images/users/2.jpg',
    department: 'Unidad de Hematología e Inmunología',
    specialty: 'Inmunólogo',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '049dadd786511bb165075e7a',
    dni: '12099858',
    code: '84901124',
    email: 'yajaira.j.zarraga@gmail.com',
    password: passwordHash,
    firstnames: 'Yajaira Josefina',
    lastnames: 'Zarraga',
    phone,
    profilePictureURL: '/images/users/3.jpg',
    department: 'Unidad de Psiquiatría',
    specialty: 'Psiquiatra',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '059dadd786511bb165075e7a',
    dni: '13425862',
    code: '59123025',
    email: 'tulio.r.lugo@hotmail.com',
    password: passwordHash,
    firstnames: 'Tulio Rafael',
    lastnames: 'Lugo',
    phone,
    profilePictureURL: '/images/users/5.jpg',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '069dadd786511bb165075e7a',
    dni: '17834901',
    code: '12523148',
    email: 'roberto.a.gonzalez@hotmail.com',
    password: passwordHash,
    firstnames: 'Roberto Antonio',
    lastnames: 'González',
    phone,
    profilePictureURL: '/images/users/6.jpg',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '079dadd786511bb165075e7a',
    dni: '19154542',
    code: '29715094',
    email: 'richard.a.seferen@yahoo.com',
    password: passwordHash,
    firstnames: 'Richard Alexander',
    lastnames: 'Seferen',
    phone,
    profilePictureURL: '/images/users/7.jpg',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '089dadd786511bb165075e7a',
    dni: '18425641',
    code: '01168979',
    email: 'rosmary.c.p.arteaga@gmail.com',
    password: passwordHash,
    firstnames: 'Rosmary Coromoto',
    lastnames: 'Palencia Arteaga',
    phone,
    profilePictureURL: '/images/users/8.jpg',
    department: 'Unidad de Hematología e Inmunología',
    specialty: 'Inmunólogo',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '099dadd786511bb165075e7a',
    dni: '9156017',
    code: '99482491',
    email: 'miguel.a.sangronis@gmail.com',
    password: passwordHash,
    firstnames: 'Miguel Angel',
    lastnames: 'Sangronis',
    phone,
    profilePictureURL: '/images/users/9.jpg',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '109dadd786511bb165075e7a',
    dni: '13599444',
    code: '23263824',
    email: 'gladys.v.ventura@gmail.com',
    password: passwordHash,
    firstnames: 'Gladys',
    lastnames: 'Vargas Ventura',
    phone,
    profilePictureURL: '/images/users/10.jpg',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '119dadd786511bb165075e7a',
    dni: '9511607',
    code: '23481248',
    email: 'henry.j.c.sanchez@gmail.com',
    password: passwordHash,
    firstnames: 'Henry José',
    lastnames: 'Chirinos Sánchez',
    phone,
    profilePictureURL: '/images/users/11.jpg',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '129dadd786511bb165075e7a',
    dni: '24408937',
    code: '82897777',
    email: 'morelba.gomez@gmail.com',
    password: passwordHash,
    firstnames: 'Morelba',
    lastnames: 'Gómez',
    phone,
    profilePictureURL: '/images/users/12.jpg',
    department: 'Unidad de Hematología e Inmunología',
    specialty: 'Inmunólogo',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '139dadd786511bb165075e7a',
    dni: '11151424',
    code: '09252957',
    email: 'beatriz.g.herrera@hotmail.com',
    password: passwordHash,
    firstnames: 'Beatriz',
    lastnames: 'García Herrera',
    phone,
    profilePictureURL: '/images/users/13.jpg',
    department: 'Unidad de Neurología y Neurocirugía',
    specialty: 'Neurólogo',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '149dadd786511bb165075e7a',
    dni: '19724055',
    code: '37862308',
    email: 'eira.l.v.curiel@yahoo.com',
    password: passwordHash,
    firstnames: 'Eira Lisbeth',
    lastnames: 'Ventura Curiel',
    phone,
    profilePictureURL: '/images/users/14.jpg',
    department: 'Unidad de Psiquiatría',
    specialty: 'Psiquiatra',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '159dadd786511bb165075e7a',
    dni: '19381990',
    code: '72780116',
    email: 'pedro.p.polanco@gmail.com',
    password: passwordHash,
    firstnames: 'Pedro Pablo',
    lastnames: 'Polanco',
    phone,
    profilePictureURL: '/images/users/15.jpg',
    department: 'Unidad Respiratoria',
    specialty: 'Neumonólogo',
    isAdmin: false,
    isActive: true
  },
  {
    _id: '169dadd786511bb165075e7a',
    dni: '9293796',
    code: '93038331',
    email: 'luis.a.d.garcia@yahoo.com',
    password: passwordHash,
    firstnames: 'Luis Alberto',
    lastnames: 'Durante García',
    phone,
    profilePictureURL: '/images/users/16.jpg',
    department: 'Unidad de Hematología e Inmunología',
    specialty: 'Inmunólogo',
    isAdmin: false,
    isActive: true
  }
]

const medicalBackgrounds = [
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
    date: new Date('2022-10-20 11:15:00'),
    medic: users[1]._id,
    description: '- **Motivo de consulta**: Tos persistente y dificultad para respirar\n - **Examen físico**: Roncus en los pulmones, disminución de los ruidos respiratorios\n - **Diagnóstico**: Bronquitis crónica\n - **Tratamiento**: Medicamentos broncodilatadores y corticosteroides inhalados, fisioterapia respiratoria\n - **Evolución**: Síntomas mejoran con el tratamiento, se recomienda evitar exposición al humo y seguimiento regular.'
  },
  {
    date: new Date('2022-11-15 14:30:00'),
    medic: users[2]._id,
    description: '- **Motivo de consulta**: Dolor abdominal y diarrea persistente\n - **Examen físico**: Sensibilidad en el abdomen, presencia de distensión abdominal\n - **Diagnóstico**: Gastroenteritis aguda\n - **Tratamiento**: Reposo intestinal, hidratación oral con suero oral, dieta blanda, medicamentos antidiarreicos y probióticos\n - **Evolución**: Los síntomas mejoran gradualmente con el tratamiento, se recomienda mantener una buena higiene alimentaria y seguir las indicaciones médicas.'
  },
  {
    date: new Date('2022-12-02 10:00:00'),
    medic: users[3]._id,
    description: '- **Motivo de consulta**: Dolor en el pecho y dificultad para respirar\n - **Examen físico**: Dolor a la palpación en el área del pecho, respiración rápida y superficial\n - **Diagnóstico**: Posible neumonía\n - **Tratamiento**: Se ordena una radiografía de tórax para confirmar el diagnóstico. Mientras tanto, se indica reposo, analgésicos para aliviar el dolor y se recomienda aumentar la ingesta de líquidos.\n - **Evolución**: Se espera obtener los resultados de la radiografía en los próximos días para confirmar el diagnóstico. Se recomienda seguir las indicaciones médicas y acudir a una consulta de seguimiento.'
  }
]

const patients = [
  {
    dni: '20659874',
    firstnames: 'Carlos Eduardo',
    lastnames: 'González Flores',
    birthdate: new Date('1990-11-25 12:15:00'),
    location: 'Falcón, Punto Fijo, Calle Los Jardines, Casa #5',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '18653217',
    firstnames: 'María Alejandra',
    lastnames: 'Rodríguez Torres',
    birthdate: new Date('1985-06-10 09:45:00'),
    location: 'Falcón, Coro, Avenida Libertador, Casa #12',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '21478953',
    firstnames: 'Juan Carlos',
    lastnames: 'Pérez Ramírez',
    birthdate: new Date('1992-03-18 15:30:00'),
    location: 'Falcón, Punto Fijo, Calle Los Pinos, Casa #8',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '19785632',
    firstnames: 'Andrea Carolina',
    lastnames: 'Sánchez López',
    birthdate: new Date('1988-09-05 10:20:00'),
    location: 'Falcón, Coro, Avenida Miranda, Casa #20',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '22874159',
    firstnames: 'José Luis',
    lastnames: 'Martínez García',
    birthdate: new Date('1997-02-28 14:00:00'),
    location: 'Falcón, Dabajuro, Calle El Progreso, Casa #15',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '22369875',
    firstnames: 'Ana María',
    lastnames: 'Torres Medina',
    birthdate: new Date('1991-11-10 11:45:00'),
    location: 'Falcón, Coro, Calle Bolívar, Casa #16',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '20357986',
    firstnames: 'Luis Miguel',
    lastnames: 'Rivas Rodríguez',
    birthdate: new Date('1987-07-15 16:10:00'),
    location: 'Falcón, Punto Fijo, Calle Los Girasoles, Casa #9',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '19784521',
    firstnames: 'Mariana González',
    lastnames: 'Torres',
    birthdate: new Date('1994-04-02 13:25:00'),
    location: 'Falcón, Coro, Avenida Sucre, Casa #7',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '20875963',
    firstnames: 'Alejandro Pérez',
    lastnames: 'Jiménez',
    birthdate: new Date('1989-12-20 09:55:00'),
    location: 'Falcón, Chichiriviche, Calle Los Cocos, Casa #10',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '21659874',
    firstnames: 'Carolina Rodríguez',
    lastnames: 'López',
    birthdate: new Date('1996-08-08 14:35:00'),
    location: 'Falcón, Punto Fijo, Avenida Los Olivos, Casa #6',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '19987425',
    firstnames: 'José Antonio',
    lastnames: 'Sánchez Ramírez',
    birthdate: new Date('1993-05-12 11:40:00'),
    location: 'Falcón, Coro, Calle Los Almendros, Casa #18',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '22258963',
    firstnames: 'Gabriela Martínez',
    lastnames: 'Torres',
    birthdate: new Date('1990-09-28 10:15:00'),
    location: 'Falcón, Punto Fijo, Avenida Los Pinos, Casa #14',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '20758963',
    firstnames: 'Luis Eduardo',
    lastnames: 'Rodríguez Torres',
    birthdate: new Date('1986-03-24 08:50:00'),
    location: 'Falcón, Coro, Calle El Carmen, Casa #11',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '22659874',
    firstnames: 'Andrés José',
    lastnames: 'Ramírez Sánchez',
    birthdate: new Date('1991-07-03 09:30:00'),
    location: 'Falcón, Coro, Calle Andrés Eloy Blanco, Casa #8',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '19874352',
    firstnames: 'Camila López',
    lastnames: 'Martínez',
    birthdate: new Date('1987-10-22 15:40:00'),
    location: 'Falcón, Punto Fijo, Avenida Los Mangos, Casa #11',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '20786952',
    firstnames: 'Juan Manuel',
    lastnames: 'Rivas Torres',
    birthdate: new Date('1996-06-13 14:55:00'),
    location: 'Falcón, Coro, Calle Los Abetos, Casa #19',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '22345678',
    firstnames: 'María Fernanda',
    lastnames: 'Rodríguez García',
    birthdate: new Date('1989-12-05 10:45:00'),
    location: 'Falcón, Pueblo Nuevo, Calle Los Pajaritos, Casa #3',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '21235698',
    firstnames: 'Pedro José',
    lastnames: 'Pérez López',
    birthdate: new Date('1994-11-01 08:20:00'),
    location: 'Falcón, Coro, Avenida Bolívar, Casa #25',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '21453698',
    firstnames: 'Laura Isabel',
    lastnames: 'Sánchez Martínez',
    birthdate: new Date('1992-07-29 13:00:00'),
    location: 'Falcón, Punto Fijo, Calle Los Jazmines, Casa #8',
    medicalBackgrounds,
    consultations
  },
  {
    dni: '21654873',
    firstnames: 'Valentina',
    lastnames: 'García López',
    birthdate: new Date('1995-02-17 13:20:00'),
    location: 'Falcón, Punto Fijo, Avenida Los Jardines, Casa #17',
    medicalBackgrounds,
    consultations
  }
]

export { api, users, patients, autorization }
