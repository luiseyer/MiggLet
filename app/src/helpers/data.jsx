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
    description: '- **Motivo de consulta**: Tos persistente y dificultad para respirar\n - **Examen físico**: Roncus en los pulmones, disminución de los ruidos respiratorios\n - **Diagnóstico**: Bronquitis crónica\n - **Tratamiento**: Medicamentos broncodilatadores y corticosteroides inhalados, fisioterapia respiratoria\n - **Evolución**: Síntomas mejoran con el tratamiento, se recomienda evitar exposición al humo y seguimiento regular.'
  },
  {
    date: '2022-11-15 14:30:00',
    description: '- **Motivo de consulta**: Dolor abdominal y diarrea persistente\n - **Examen físico**: Sensibilidad en el abdomen, presencia de distensión abdominal\n - **Diagnóstico**: Gastroenteritis aguda\n - **Tratamiento**: Reposo intestinal, hidratación oral con suero oral, dieta blanda, medicamentos antidiarreicos y probióticos\n - **Evolución**: Los síntomas mejoran gradualmente con el tratamiento, se recomienda mantener una buena higiene alimentaria y seguir las indicaciones médicas.'
  },
  {
    date: '2022-12-02 10:00:00',
    description: '- **Motivo de consulta**: Dolor en el pecho y dificultad para respirar\n - **Examen físico**: Dolor a la palpación en el área del pecho, respiración rápida y superficial\n - **Diagnóstico**: Posible neumonía\n - **Tratamiento**: Se ordena una radiografía de tórax para confirmar el diagnóstico. Mientras tanto, se indica reposo, analgésicos para aliviar el dolor y se recomienda aumentar la ingesta de líquidos.\n - **Evolución**: Se espera obtener los resultados de la radiografía en los próximos días para confirmar el diagnóstico. Se recomienda seguir las indicaciones médicas y acudir a una consulta de seguimiento.'
  }
]

const patients = [
  {
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
  patients
}

export default data
