import { useParams } from 'react-router-dom'
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, CalendarMonth as CalendarMonthIcon, AccountBox as AccountBoxIcon, LocationOn as LocationOnIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material'
import { PageContainer, NavigationMenu, Section } from '@components'

import data from '@helpers/data'

const SinglePatient = () => {
  const { id } = useParams()

  const {
    dni,
    firstnames,
    lastnames
  } = data.users.find(user => user.id === id)

  return (
    <PageContainer>
      <NavigationMenu
        variant='toolbar'
        title='datos de paciente'
      />

      <Section color='light.main' spacing='2rem' sx={{ display: 'grid', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {/* <Typography variant='h3' textAlign='center'>Ficha del Paciente</Typography> */}

          <List component={Paper}>
            <ListItem
              component={Typography}
              variant='h5'
              id='nested-list-subheader'
              sx={{ bgcolor: 'transparent' }}
            >
              Datos Personales
            </ListItem>

            <ListItem>
              <ListItemText primary={<><b>Nombres: </b> {firstnames}</>} />
            </ListItem>

            <ListItem>
              <ListItemText primary={<><b>Apellidos: </b> {lastnames}</>} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LocalHospitalIcon />
              </ListItemIcon>
              <ListItemText primary={<><b>Número de historia: </b> 000000</>} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary={<><b>Cédula: </b> {dni}</>} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary={<><b>Fecha de Nacimiento: </b> ----------</>} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={<><b>Dirección: </b> ----------</>} />
            </ListItem>
          </List>

          <Divider sx={{ visibility: 'hidden' }} />

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
