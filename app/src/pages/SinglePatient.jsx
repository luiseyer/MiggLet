import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { marked } from 'marked'
import { Accordion, AccordionDetails, AccordionSummary, FormControl, InputLabel, List, ListItem, ListItemIcon, ListItemText, MenuItem, Select, Stack, Typography } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, CalendarMonth as CalendarMonthIcon, AccountBox as AccountBoxIcon, LocationOn as LocationOnIcon, ExpandMore as ExpandMoreIcon, Person as PersonIcon, EventNote as EventNoteIcon } from '@mui/icons-material'
import { PageContainer, NavigationMenu, Section } from '@components'
import { formatDate } from '@helpers'

import data from '@helpers/data'

const SinglePatient = () => {
  const { id } = useParams()

  const {
    dni,
    medicalRecordNumber,
    firstnames,
    lastnames,
    birthdate,
    location,
    medicalBacgrounds,
    consultations
  } = data.patients.find(user => user.id === id)

  const personalData = [
    {
      name: 'Número de historia:',
      value: medicalRecordNumber,
      icon: <LocalHospitalIcon color='primary' />
    },
    {
      name: 'Cedula de identidad:',
      value: dni,
      icon: <AccountBoxIcon color='primary' />
    },
    {
      name: 'Fecha de nacimiento:',
      value: formatDate(birthdate),
      icon: <CalendarMonthIcon color='primary' />
    },
    {
      name: 'Lugar de residencia:',
      value: location,
      icon: <LocationOnIcon color='primary' />
    }
  ]

  const [expanded, setExpanded] = useState(true)

  const handleExpandedChange = (_, isExpanded) => {
    setExpanded(isExpanded)
  }

  const [date, setDate] = useState(consultations[0].date)

  const handleSelectChange = ({ target }) => {
    setDate(target.value)
  }

  const [currentConsultation, setCurrentConsultation] = useState(null)

  useEffect(() => {
    setCurrentConsultation(consultations.find(c => c.date === date))
  }, [consultations, date])

  return (
    <PageContainer>
      <NavigationMenu variant='toolbar' title='datos de paciente' />

      <Section color='neutral.main' spacing='2rem' sx={{ display: 'grid', justifyContent: 'center' }}>
        <Stack spacing='2rem'>
          <Accordion expanded={expanded} onChange={handleExpandedChange} disableGutters sx={{ width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'light.main' }} />} sx={{ bgcolor: 'primary.main', color: 'light.main' }}>
              <Stack direction='row' alignItems='center' spacing={1.5}>
                <PersonIcon /> <Typography variant='h5'>Datos Personales</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <List disablePadding>
                <ListItem>
                  <ListItemText primary='Nombre del paciente ' secondary={`${firstnames} ${lastnames}`} />
                </ListItem>

                {personalData?.map(({ name, value, icon }, i) => (
                  <ListItem key={i} sx={{ gap: 2 }}>
                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={name} secondary={value} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion disableGutters sx={{ width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'light.main' }} />} sx={{ bgcolor: 'secondary.main', color: 'light.main' }}>
              <Stack direction='row' alignItems='center' spacing={1.5}>
                <EventNoteIcon /> <Typography variant='h5'>Antecedentes</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <List disablePadding>
                {medicalBacgrounds?.map(({ name, description }, i) => (
                  <ListItem key={i}>
                    <ListItemText
                      primary={<Typography mb={1} variant='subtitle1' textTransform='capitalize' fontWeight={500}>{name}</Typography>}
                      secondary={
                        <Typography
                          sx={{ '& ul': { pl: 3, listStyleType: 'square' }, '& ::marker': { color: 'secondary.main' } }}
                          dangerouslySetInnerHTML={{ __html: marked.parse(description, { mangle: false, headerIds: false }) }}
                        />
                        }
                      sx={{ '& .MuiListItemText-secondary': { color: 'dark.main' } }}
                    />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion disableGutters sx={{ width: '100%' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'light.main' }} />} sx={{ bgcolor: 'tertiary.main', color: 'light.main' }}>
              <Stack direction='row' alignItems='center' spacing={1.5}>
                <LocalHospitalIcon /> <Typography variant='h5'>Consultas</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing='0.5rem'>
                <FormControl variant='outlined' sx={{ mx: 3, mt: 3 }}>
                  <InputLabel id='consultations-dates-label'>Fecha de consulta</InputLabel>
                  <Select
                    id='consultations-dates'
                    value={date}
                    onChange={handleSelectChange}
                    label='Fecha de consulta'
                  >
                    {consultations?.map(({ date }, i) => (
                      <MenuItem key={i} value={date}>{formatDate(date, 'short')}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {currentConsultation &&
                  <>
                    <List>
                      <ListItem sx={{ gap: 2 }}>
                        <ListItemIcon sx={{ minWidth: 'auto' }}>
                          <PersonIcon color='tertiary' />
                        </ListItemIcon>
                        <ListItemText primary='Médico:' secondary={currentConsultation.medic} />
                      </ListItem>

                      {/* <ListItem sx={{ gap: 2 }}>
                        <ListItemIcon sx={{ minWidth: 'auto' }}>
                          <CalendarMonthIcon color='tertiary' />
                        </ListItemIcon>
                        <ListItemText primary='Fecha:' secondary={formatDate(currentConsultation.date, 'longShort')} />
                      </ListItem> */}
                    </List>

                    <Typography
                      sx={{
                        '& ul': { pl: 2.5, m: 0, listStyleType: 'square' },
                        '& ul li': { mb: 3 },
                        '& ::marker': { color: 'tertiary.main' }
                      }}
                      px={3}
                      dangerouslySetInnerHTML={{ __html: marked.parse(currentConsultation.description, { mangle: false, headerIds: false }) }}
                    />
                  </>}

              </Stack>

            </AccordionDetails>
          </Accordion>
        </Stack>
      </Section>
    </PageContainer>
  )
}

export default SinglePatient
