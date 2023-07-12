import { memo, useEffect, useState } from 'react'
import { Backdrop, Stack, Button, CircularProgress, Dialog, DialogContent, DialogTitle, Fab, TextField, DialogActions } from '@mui/material'
import { Add as AddIcon, ArrowBack as ArrowBackIcon, Send as SendIcon } from '@mui/icons-material'
import { useCreatePatient } from '@hooks/usePatients'

const RegisterPatientForm = ({
  count,
  refetchFn = () => {}
}) => {
  const fields = ['firstnames', 'lastnames', 'birthdate', 'dni', 'location', 'medicalRecordNumber']

  const { mutate, isLoading, isSuccess } = useCreatePatient()

  const [open, setOpen] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  useEffect(() => {
    if (isSuccess) {
      refetchFn()
      setOpen(false)
    }
  }, [isSuccess, refetchFn])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new window.FormData(event.currentTarget)
    const data = {}
    fields.forEach(field => {
      data[field] = formData.get(field)
    })
    mutate(data)
  }

  const handleInput = (event) => {
    const formData = new window.FormData(event.currentTarget)
    const values = fields.map(field => formData.get(field))

    if (values.every(value => value && value.trim('').length !== 0)) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }

  return (
    <>
      {open && isLoading &&
        <Backdrop sx={{ color: 'primary.light', zIndex: 9999 }} open={isLoading}>
          <CircularProgress color='inherit' />
        </Backdrop>}

      {open &&
        <Backdrop sx={{ color: 'primary.light', zIndex: 9999 }} open={!count}>
          <CircularProgress color='inherit' />
        </Backdrop>}

      {count &&
        <Dialog
          component='form'
          autoComplete='off'
          open={open}
          onClose={handleClose}
          onInput={handleInput}
          onSubmit={handleSubmit}
          fullScreen
        >
          <DialogTitle component='header' sx={{ background: ({ gradient }) => gradient.surface, py: '8px !important', px: 1 }}>
            <Button
              color='dark'
              onClick={handleClose}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <ArrowBackIcon />
              Registrar Paciente
            </Button>
          </DialogTitle>
          <DialogContent>
            <Stack sx={{
              pt: 1,
              '& .MuiTextField-root': { mt: 4, width: '100%' },
              '& .MuiTextField-root fieldset': { borderWidth: '2px' }
            }}
            >
              <TextField
                label='Número de historia'
                name='medicalRecordNumber'
                type='number'
                defaultValue={count + 1}
                variant='outlined'
                required
              />
              <TextField
                label='Nombres'
                name='firstnames'
                variant='outlined'
                required
              />
              <TextField
                label='Apellidos'
                name='lastnames'
                variant='outlined'
                required
              />
              <TextField
                label='Cédula de identidad'
                name='dni'
                type='number'
                variant='outlined'
                required
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                label='Fecha de Nacimiento'
                name='birthdate'
                type='date'
                variant='outlined'
                required
              />
              <TextField
                label='Lugar de residencia'
                name='location'
                variant='outlined'
                required
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ pb: '1.5rem !important' }}>
            <Button
              disabled={!isCompleted}
              type='submit'
              variant='contained'
              size='large'
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

export default memo(RegisterPatientForm)
