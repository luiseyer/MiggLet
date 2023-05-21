// BASICS
import { useEffect, useRef, useState } from 'react'
// MUI COMPONENTS
import { Avatar, ClickAwayListener, Grow, IconButton, ListItemIcon, MenuItem, MenuList, Paper, Popper } from '@mui/material'
// ICONS
import { LogoutOutlined, AccountCircleOutlined } from '@mui/icons-material'
// HELPERS
import { useIsMobile } from '../helpers'

const mobileStyles = {
  bgcolor: 'secondary.main'
}

const desktopStyles = {
  bgcolor: 'secondary.main',
  width: 50,
  height: 50,
  fontSize: 24,
  border: '2px solid',
  borderColor: '#FFF'
}

const ProfileButton = function (props) {
  const { user } = props
  const userInitials = user.name.split(' ').map(name => name[0]).join('')
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const isMobile = useIsMobile()

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return
    setOpen(false)
  }

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
    if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const prevOpen = useRef(open)

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }
    prevOpen.current = open
  }, [open])

  return (
    <>
      <IconButton ref={anchorRef} onClick={handleToggle}>
        <Avatar
          alt={user.name}
          src={user.picture}
          sx={(isMobile ? mobileStyles : desktopStyles)}
        >
          {userInitials}
        </Avatar>
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement='top-end'
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              marginBottom: 10,
              transformOrigin: 'bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <AccountCircleOutlined fontSize='small' />
                    </ListItemIcon>
                    Perfil
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <LogoutOutlined fontSize='small' />
                    </ListItemIcon>
                    Salir
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default ProfileButton
