import { useParams } from 'react-router-dom'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, List, Stack, Typography } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, CalendarMonth as CalendarMonthIcon, AccountBox as AccountBoxIcon, LocationOn as LocationOnIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
import { PageContainer, NavigationMenu, Section, ListActionButton } from '@components'

import data from '@helpers/data'

const SinglePatient = () => {
  const { id } = useParams()
  const user = data.users.find(user => user.id === id)

  return (
    <PageContainer>
      <NavigationMenu variant='toolbar' />
      <Section color='light.main' sx={{ display: 'grid', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <Typography variant='h2'>Ficha del Paciente</Typography>

          <Divider sx={{ visibility: 'hidden' }} />

          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <Typography variant='body1' fontSize='1.0875rem'>Nombres: {user.firstnames}</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <Typography variant='body1' fontSize='1.0875rem'>Apellidos: {user.lastnames}</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <AccountBoxIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Cédula de identidad: V-{user.dni}</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <CalendarMonthIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Fecha de nacimiento: 00, MES de 0000</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <LocationOnIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Dirección: ------</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing='0.5rem'>
            <LocalHospitalIcon />
            <Typography variant='body1' fontSize='1.0875rem'>Número de Historia: ------</Typography>
          </Stack>

          <Divider sx={{ visibility: 'hidden' }} />

          <List sx={{ width: '100%', display: 'grid', gap: '1rem' }}>
            <ListActionButton
              icon={<LocalHospitalIcon color='primary' sx={{ width: '2.5rem', height: '2.5rem' }} />}
              primary={user.phone}
              secondary='Llamar'
              sx={{ background: (theme) => theme.gradient.surface }}
            />
          </List>

          <Divider sx={{ visibility: 'hidden' }} />

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='patient-panel1a-content'
              id='patient-panel1a-header'
            >
              <Typography>Antecedentes</Typography>
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
              <Typography>Consultas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Section>
    </PageContainer>
  )
}

export default SinglePatient
