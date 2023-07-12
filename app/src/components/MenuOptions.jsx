import { memo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material'
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

  return (
    <>
      <Tooltip title='Más opciones' arrow>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        MenuListProps={{ disablePadding: true }}
        sx={{
          '& .MuiMenuItem-root': { pl: 2, pr: 8, py: 2 },
          '& .MuiPaper-root': {
            position: 'fixed',
            top: '0px !important',
            right: '0px !important',
            left: 'auto !important'
          }
        }}
      >
        {isAdmin && !pathnames.includes('settings') &&
          <MenuItem onClick={() => navigate('/settings')} divider>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Ajustes' />
          </MenuItem>}

        {!pathnames.includes('about') &&
          <MenuItem onClick={() => navigate('/about')} divider>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='Acerca de' />
          </MenuItem>}

        {!pathnames.includes('profile') &&
          <MenuItem onClick={() => navigate('/profile')} divider>
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

export default memo(MenuOptions)
