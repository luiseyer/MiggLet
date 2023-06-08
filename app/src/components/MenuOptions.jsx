import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { MoreVert as MoreVertIcon, Settings as SettingsIcon, Info as InfoIcon, AccountCircle as AccountIcon, Logout as LogoutIcon } from '@mui/icons-material'
import { useLogout, useAuthContext } from '@hooks'

const MenuOptions = () => {
  const { user: { id, isAdmin } } = useAuthContext()

  const { logout } = useLogout()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const pathname = useLocation().pathname.split('/')

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const viewProfile = () => {
    navigate(`/users/${id}`)
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

        {isAdmin && !pathname.includes('settings') &&
          <MenuItem onClick={handleClose} divider>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Ajustes' />
          </MenuItem>}

        {!(pathname.includes('users') && pathname.includes(id)) &&
          <MenuItem onClick={viewProfile}>
            <ListItemIcon>
              <AccountIcon />
            </ListItemIcon>
            <ListItemText primary='Mi Perfil' />
          </MenuItem>}

        <MenuItem onClick={logout} divider>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary='Salir' />
        </MenuItem>

        {!pathname.includes('about') &&
          <MenuItem onClick={about}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='Acerca de' />
          </MenuItem>}
      </Menu>

    </>
  )
}

export default MenuOptions
