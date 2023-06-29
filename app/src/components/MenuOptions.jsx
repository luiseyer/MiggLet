import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { MoreVert as MoreVertIcon, Settings as SettingsIcon, Info as InfoIcon, AccountCircle as AccountIcon, Logout as LogoutIcon } from '@mui/icons-material'
import { useLogout, useAuthContext } from '@hooks'

const MenuOptions = () => {
  const { user: { isAdmin } } = useAuthContext()

  const { logout } = useLogout()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const pathnames = useLocation().pathname.split('/')

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const viewProfile = () => {
    navigate('/profile')
  }
  const about = () => {
    navigate('/about')
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        MenuListProps={{ disablePadding: true }}
        sx={{
          '& .MuiPaper-root': {
            top: '0 !important',
            right: '0 !important',
            left: 'calc(100% - 200px) !important'
          },
          '& .MuiMenuItem-root': { py: 2 }
        }}
      >

        {isAdmin && !pathnames.includes('settings') &&
          <MenuItem onClick={handleClose} divider>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Ajustes' />
          </MenuItem>}

        {!pathnames.includes('about') &&
          <MenuItem onClick={about} divider>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='Acerca de' />
          </MenuItem>}

        {!pathnames.includes('profile') &&
          <MenuItem onClick={viewProfile} divider>
            <ListItemIcon>
              <AccountIcon />
            </ListItemIcon>
            <ListItemText primary='Mi Perfil' />
          </MenuItem>}

        <MenuItem onClick={logout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary='Salir' />
        </MenuItem>

      </Menu>

    </>
  )
}

export default MenuOptions
