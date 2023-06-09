import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Accordion, AccordionDetails, AccordionSummary, Box, Fab, List, ListItem, ListItemIcon, ListItemText, Pagination, Typography } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, CalendarMonth as CalendarMonthIcon, AccountBox as AccountBoxIcon, LocationOn as LocationOnIcon, ExpandMore as ExpandMoreIcon, Add as AddIcon, Person as PersonIcon, EventNote as EventNoteIcon } from '@mui/icons-material'
import { PageContainer, NavigationMenu, Section } from '@components'

import data from '@helpers/data'

const colors = ['primary', 'secondary', 'tertiary']
let color = -1

const SinglePatient = () => {
  const { id } = useParams()

  const {
    dni,
    firstnames,
    lastnames
  } = data.users.find(user => user.id === id)

  const personalData = [
    { name: 'Número de historia: ', value: '000000', icon: color => <LocalHospitalIcon color={color} /> },
    { name: 'Cedula o pasaporte: ', value: dni, icon: color => <AccountBoxIcon color={color} /> },
    { name: 'Fecha de nacimiento: ', value: '----------', icon: color => <CalendarMonthIcon color={color} /> },
    { name: 'Lugar de residencia: ', value: '----------', icon: color => <LocationOnIcon color={color} /> }
  ]

  const [expanded, setExpanded] = useState(true)

  const handleExpandedChange = (_, isExpanded) => {
    setExpanded(isExpanded)
  }

  return (
    <PageContainer>
      <NavigationMenu variant='toolbar' title='datos de paciente' />

      <Section color='neutral.main' spacing='2rem' sx={{ display: 'grid', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Accordion expanded={expanded} onChange={handleExpandedChange} disableGutters sx={{ py: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <PersonIcon color='primary' sx={{ mr: 1 }} /> <Typography variant='h5'>Datos Personales</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List disablePadding>
                <ListItem>
                  <ListItemText primary='Nombres: ' secondary={firstnames} />
                  <ListItemText primary='Apellidos: ' secondary={lastnames} />
                </ListItem>

                {personalData.map(({ name, value, icon }, i) => {
                  color = color < 2 ? ++color : 0

                  return (
                    <ListItem key={i} sx={{ gap: 2 }}>
                      <ListItemIcon sx={{ minWidth: 'auto' }}>
                        {icon(colors.at(color))}
                      </ListItemIcon>
                      <ListItemText primary={name} secondary={value} />
                    </ListItem>
                  )
                })}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion disableGutters sx={{ py: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <EventNoteIcon color='secondary' sx={{ mr: 1 }} /> <Typography variant='h5'>Antecedentes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion disableGutters sx={{ py: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <LocalHospitalIcon color='tertiary' sx={{ mr: 1 }} /> <Typography variant='h5'>Consultas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Pagination count={10} siblingCount={0} size='small' sx={{ alignSelf: 'center' }} />
                <List disablePadding>
                  <ListItem disableGutters dense>
                    <ListItemText primary='Médico: ' secondary='Nombre del Médico' />
                  </ListItem>

                  <ListItem disableGutters dense divider>
                    <ListItemText primary='Fecha: ' secondary='----------' />
                  </ListItem>
                </List>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>

                <Fab
                  color='primary'
                  sx={{
                    alignSelf: 'flex-end',
                    background: (theme) => theme.gradient.main
                  }}
                >
                  <AddIcon />
                </Fab>
              </Box>

            </AccordionDetails>
          </Accordion>
        </Box>
      </Section>
    </PageContainer>
  )
}

export default SinglePatient
