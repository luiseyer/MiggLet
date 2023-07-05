import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogTitle, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, TextField } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, EventNote as EventNoteIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material'

const UpdatePatient = ({ medicalBackgrounds }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleOpen = ({ currentTarget }) => {
    setAnchorEl(currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    const button = document.getElementById('patient-button')
    button.addEventListener('click', handleOpen)
  }, [])

  const [openConsultationForm, setOpenConsultationForm] = useState(false)

  const handleConsultationFormClose = () => {
    setOpenConsultationForm(false)
  }

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        MenuListProps={{ disablePadding: true }}
        sx={{ '& .MuiMenuItem-root': { pl: 2, pr: 4, py: 2 } }}
      >
        <MenuItem onClick={handleClose} divider>
          <ListItemIcon><EventNoteIcon /></ListItemIcon>
          <ListItemText primary='Registrar antecedente' />
        </MenuItem>

        <MenuItem onClick={() => setOpenConsultationForm(true)} divider>
          <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
          <ListItemText primary='Registrar consulta' />
        </MenuItem>
      </Menu>

      <Dialog
        open={openConsultationForm}
        onClose={handleConsultationFormClose}
        fullScreen
      >
        <DialogTitle>
          <IconButton color='dark' onClick={handleConsultationFormClose} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ArrowBackIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            id='outlined-multiline-static'
            fullWidth
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default UpdatePatient
