import { useEffect, useState } from 'react'
import { Backdrop, Stack, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Fab, IconButton, TextField } from '@mui/material'
import { Add as AddIcon, Close as CloseIcon, Send as SendIcon } from '@mui/icons-material'
import { useCreatePatient } from '@hooks/usePatients'

const RegisterPatientForm = ({
  count,
  refetchFn = () => {}
}) => {
  const fields = ['firstnames', 'lastnames', 'birthdate', 'dni', 'location', 'medicalRecordNumber']

  const { mutate, isLoading, data: mutateData } = useCreatePatient()

  const [open, setOpen] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    if (mutateData) {
      setOpen(false)
      refetchFn()
    }
  }, [mutateData, refetchFn])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {}
    fields.forEach(field => {
      data[field] = formData.get(field)
    })
    mutate(data)
  }

  const handleInput = (event) => {
    const formData = new FormData(event.currentTarget)
    const values = fields.map(field => formData.get(field))

    if (values.every(value => value && value.trim('').length !== 0)) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <>
      {open && isLoading &&
        <Backdrop sx={{ color: '#fff', zIndex: 9999999, bgcolor: 'rgba(0,0,0, 0.5)' }} open={isLoading}>
          <CircularProgress color='inherit' />
        </Backdrop>}

      {open &&
        <Backdrop sx={{ color: '#fff', zIndex: 9999999, bgcolor: 'rgba(0,0,0, 0.5)' }} open={!count}>
          <CircularProgress color='inherit' />
        </Backdrop>}

      {count &&
        <Dialog
          component='form'
          open={open}
          onClose={handleClose}
          onInput={handleInput}
          onSubmit={handleSubmit}
          fullScreen
        >
          <DialogTitle>
            <IconButton color='dark' onClick={handleClose} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Stack sx={{ '& .MuiTextField-root': { mt: 3, width: '100%' } }}>
              <TextField
                label='Número de historia'
                name='medicalRecordNumber'
                type='number'
                defaultValue={count + 1}
                required
              />
              <TextField
                label='Nombres'
                name='firstnames'
                required
              />
              <TextField
                label='Apellidos'
                name='lastnames'
                required
              />
              <TextField
                label='Cédula de identidad'
                name='dni'
                type='number'
                required
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                label='Fecha de Nacimiento'
                name='birthdate'
                type='datetime-local'
                required
              />
              <TextField
                label='Lugar de residencia'
                name='location'
                required
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ pb: '1.5rem !important' }}>
            <Button
              disabled={!isCorrect}
              variant='contained'
              type='submit'
              endIcon={<SendIcon />}
            >
              Registrar
            </Button>

          </DialogActions>
        </Dialog>}

      <Fab
        onClick={handleOpen}
        color='primary'
        sx={{
          position: 'sticky',
          bottom: 0,
          justifySelf: 'end',
          alignSelf: 'end',
          mx: 2,
          background: ({ gradient }) => gradient.main
        }}
      >
        <AddIcon />
      </Fab>
    </>
  )
}

export default RegisterPatientForm
