import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material'
import { MoreVert as MoreVertIcon, Settings as SettingsIcon, AccountCircle as AccountIcon, Logout as LogoutIcon } from '@mui/icons-material'
import { useLogout, useAuthContext } from '@hooks'

const MenuOptions = () => {
  const { user: { id, isAdmin } } = useAuthContext()

  const { logout } = useLogout()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const viewProfile = () => {
    navigate(`/users/${id}`)
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
        sx={{
          '& .MuiPaper-root': {
            top: '0 !important',
            right: '0 !important',
            left: 'calc(100% - 200px) !important'
          }
        }}
      >
        <MenuList>
          {isAdmin &&
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Ajustes' />
            </MenuItem>}

          {isAdmin && <Divider />}

          <MenuItem onClick={viewProfile}>
            <ListItemIcon>
              <AccountIcon />
            </ListItemIcon>
            <ListItemText primary='Mi Perfil' />
          </MenuItem>

          <Divider />

          <MenuItem onClick={logout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary='Salir' />
          </MenuItem>
        </MenuList>
      </Menu>

    </>
  )
}

export default MenuOptions
