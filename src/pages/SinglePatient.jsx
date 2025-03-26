import { NavigationMenu, PageContainer, Section, UpdatePatient } from '@components'
import { formatDate, markdownToHtml } from '@helpers'
import { useGetPatient } from '@hooks/usePatients'
import {
  AccountBox as AccountBoxIcon,
  CalendarMonth as CalendarMonthIcon,
  EventNote as EventNoteIcon,
  ExpandMore as ExpandMoreIcon,
  LocalHospital as LocalHospitalIcon,
  LocationOn as LocationOnIcon,
  Person as PersonIcon
} from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Skeleton,
  Stack,
  Typography
} from '@mui/material'
import { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TextSkeleton = memo((props) => (
  <Typography {...props}>
    <Skeleton width={'100%'} />
    <Skeleton width={'85%'} />
    <Skeleton width={'80%'} />
    <Skeleton width={'90%'} />
    <Skeleton width={'100%'} />
    <Skeleton width={'85%'} />
    <Skeleton width={'100%'} />
    <Skeleton width={'80%'} />
    <Skeleton width={'90%'} />
    <Skeleton width={'100%'} />
  </Typography>
))

const ListItemSkeleton = memo(({ w1 = 200, w2 = 100, sx }) => (
  <ListItem sx={{ gap: 2, ...sx }}>
    <ListItemIcon sx={{ minWidth: 'auto' }}>
      <Skeleton variant="rectangular" width={32} height={32} />
    </ListItemIcon>
    <ListItemText primary={<Skeleton width={w1} />} secondary={<Skeleton width={w2} />} />
  </ListItem>
))

const SinglePatient = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetPatient(id)

  const generatePersonalData = (data) => [
    {
      name: 'Número de historia:',
      value: data?.medicalRecordNumber,
      icon: <LocalHospitalIcon color="primary" />
    },
    { name: 'Cedula de identidad:', value: data?.dni, icon: <AccountBoxIcon color="primary" /> },
    {
      name: 'Fecha de nacimiento:',
      value: data && formatDate(data.birthdate),
      icon: <CalendarMonthIcon color="primary" />
    },
    {
      name: 'Lugar de residencia:',
      value: data?.location,
      icon: <LocationOnIcon color="primary" />
    }
  ]

  const [personalData, setPersonalData] = useState(generatePersonalData())
  const [date, setDate] = useState(null)

  useEffect(() => {
    if (data) {
      setPersonalData(generatePersonalData(data))
      setDate(data.consultations[0]?.date)
    }
  }, [data])

  const [currentConsultation, setCurrentConsultation] = useState(null)

  useEffect(() => {
    if (data) {
      setCurrentConsultation(data.consultations.find((c) => c.date === date))
    }
  }, [date, data])

  const [expanded, setExpanded] = useState(true)

  const handleExpandedChange = (_, isExpanded) => {
    setExpanded(isExpanded)
  }

  const handleSelectChange = ({ target }) => {
    setDate(target.value)
  }

  return (
    <PageContainer>
      <NavigationMenu variant="toolbar" title="datos de paciente" patientButton />

      <Section
        color="neutral.main"
        spacing="2rem"
        sx={{ display: 'grid', gridTemplateColumns: '100%', justifyContent: 'center' }}
      >
        <Stack spacing="2rem">
          <Accordion expanded={expanded} onChange={handleExpandedChange} disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'light.main' }} />}
              sx={{ bgcolor: 'primary.main', color: 'light.main' }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <PersonIcon /> <Typography variant="h5">Datos Personales</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <List disablePadding>
                {data && (
                  <ListItem>
                    <ListItemText
                      primary="Nombre del paciente "
                      secondary={`${data?.firstnames} ${data?.lastnames}`}
                    />
                  </ListItem>
                )}

                {!data && (
                  <ListItem>
                    <ListItemText
                      primary={<Skeleton width={200} />}
                      secondary={<Skeleton width={300} />}
                    />
                  </ListItem>
                )}

                {personalData?.map(({ name, value, icon }) => (
                  <Box key={name}>
                    {value && (
                      <ListItem sx={{ gap: 2 }}>
                        <ListItemIcon sx={{ minWidth: 'auto' }}>{icon}</ListItemIcon>
                        <ListItemText primary={name} secondary={value} />
                      </ListItem>
                    )}

                    {!value && <ListItemSkeleton />}
                  </Box>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'light.main' }} />}
              sx={{ bgcolor: 'secondary.main', color: 'light.main' }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <EventNoteIcon /> <Typography variant="h5">Antecedentes</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <List component="div" disablePadding>
                {data?.medicalBackgrounds?.map(({ id, name, description }) => (
                  <ListItem key={id}>
                    <ListItemText
                      primary={
                        <Typography
                          mb={1}
                          variant="subtitle1"
                          textTransform="capitalize"
                          fontSize="1.15rem"
                          fontWeight={500}
                        >
                          {name}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          sx={{
                            '& :is(ul, ol)': { pl: 4, m: 0 },
                            '& ul': { listStyleType: 'square' },
                            '& ::marker': { color: 'secondary.main' }
                          }}
                          // biome-ignore lint/security/noDangerouslySetInnerHtml: necessary for rendering markdown
                          dangerouslySetInnerHTML={{ __html: markdownToHtml(description) }}
                        />
                      }
                      sx={{ '& .MuiListItemText-secondary': { color: 'dark.main' } }}
                    />
                  </ListItem>
                ))}
                {isLoading && (
                  <ListItem>
                    <ListItemText primary={<TextSkeleton />} />
                  </ListItem>
                )}

                {!isLoading && data?.medicalBackgrounds?.length === 0 && (
                  <Typography variant="h5" textAlign="center" py={6}>
                    No hay antecentes
                  </Typography>
                )}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion disableGutters>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'light.main' }} />}
              sx={{ bgcolor: 'tertiary.main', color: 'light.main' }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <LocalHospitalIcon /> <Typography variant="h5">Consultas</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing="0.5rem">
                {date && (
                  <FormControl variant="outlined" sx={{ mx: 2, mt: 3 }}>
                    <InputLabel id="consultations-dates-label">Fecha de consulta</InputLabel>
                    <Select
                      id="consultations-dates"
                      value={date}
                      onChange={handleSelectChange}
                      label="Fecha de consulta"
                    >
                      {data?.consultations?.map(({ date }) => (
                        <MenuItem key={date} value={date}>
                          {formatDate(date, 'short')}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}

                {isLoading && (
                  <Skeleton
                    component={Box}
                    variant="rectangular"
                    height={60}
                    sx={{ mx: 2, mt: 3 }}
                  />
                )}

                <List>
                  {currentConsultation && (
                    <ListItem sx={{ gap: 2, px: 2 }}>
                      <ListItemIcon sx={{ minWidth: 'auto' }}>
                        <PersonIcon color="tertiary" />
                      </ListItemIcon>
                      <ListItemText primary="Médico:" secondary={currentConsultation.medic} />
                    </ListItem>
                  )}

                  {isLoading && <ListItemSkeleton sx={{ px: 2 }} w1={100} w2={200} />}

                  {!isLoading && !currentConsultation && (
                    <Typography variant="h5" textAlign="center" py={6}>
                      No hay consultas
                    </Typography>
                  )}
                </List>

                {currentConsultation && (
                  <Typography
                    component="div"
                    sx={{
                      '& :is(ul, ol)': { pl: 4, m: 0 },
                      '& ul': { listStyleType: 'square' },
                      '& :is(ul, ol) li': { mb: 2 },
                      '& ::marker': { color: 'tertiary.dark' },
                      px: 2
                    }}
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: necessary for rendering markdown
                    dangerouslySetInnerHTML={{
                      __html: markdownToHtml(currentConsultation.description)
                    }}
                  />
                )}

                {isLoading && <TextSkeleton px={3} />}
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Stack>
        <UpdatePatient />
      </Section>
    </PageContainer>
  )
}

export default memo(SinglePatient)
