import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, ListItemIcon, ListItemText, Pagination, Typography } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, CalendarMonth as CalendarMonthIcon, AccountBox as AccountBoxIcon, LocationOn as LocationOnIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Accordion expanded={expanded} onChange={handleExpandedChange}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant='h5'>Datos Personales</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
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

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='patient-panel1a-content'
              id='patient-panel1a-header'
            >
              <Typography variant='h5'>Antecedentes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='patient-panel2a-content'
              id='patient-panel2a-header'
            >
              <Typography variant='h5'>Consultas</Typography>
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
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Section>
    </PageContainer>
  )
}

export default SinglePatient
