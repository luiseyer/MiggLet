import { useEffect, useState } from 'react'
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { LocalHospital as LocalHospitalIcon, EventNote as EventNoteIcon } from '@mui/icons-material'
import { RegisterConsultationForm } from '@components'

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
        sx={{
          '& .MuiMenuItem-root': { pl: 2, pr: 4, py: 2 },
          '& .MuiPaper-root': {
            position: 'fixed',
            top: '0px !important',
            right: '0px !important',
            left: 'auto !important'
          }
        }}
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

      {openConsultationForm &&
        <RegisterConsultationForm open={openConsultationForm} handleClose={handleConsultationFormClose} />}
    </>
  )
}

export default UpdatePatient
