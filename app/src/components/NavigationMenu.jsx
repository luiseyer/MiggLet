import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useScrollTrigger, AppBar, Toolbar, Stack, IconButton, Tooltip, Button } from '@mui/material'
import { Search as SearchIcon, ArrowBack as ArrowBackIcon, Delete as DeleteIcon, ManageAccounts as ManageAccountsIcon } from '@mui/icons-material'
import { AppTitle, MenuOptions, NavigationTabs } from '@components'
import { useAuthContext } from '@hooks'

const NavigationMenu = ({
  variant = 'navigation',
  title,
  deleteAction,
  manageAdminAction,
  sx
}) => {
  const { user: { isAdmin } } = useAuthContext()

  const ref = useRef()
  const [target, setTarget] = useState(window)
  const scrollTrigger = useScrollTrigger({ target, threshold: 0 })
  const elevationTrigger = useScrollTrigger({ disableHysteresis: true, target, threshold: 0 })
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const section = document.querySelector('.section')
    const height = document.querySelector('#appbar').clientHeight
    const spacing = section.getAttribute('data-spacing')
    setTarget(section)

    section.style.paddingTop = `calc(${height}px + ${spacing}`
  }, [])

  return (
    <AppBar
      id='appbar'
      ref={ref}
      color='light'
      elevation={elevationTrigger ? 3 : 0}
      sx={{
        background: (theme) => theme.gradient.surface,
        transition: 'transform 0.1s ease',
        transform: 'translateY(0)',
        ...(scrollTrigger &&
          { transform: `translateY(-${ref.current.querySelector('.MuiToolbar-root').clientHeight}px)` }),
        ...sx
      }}
    >
      {variant === 'navigation' &&
        <>
          <Toolbar variant='dense' sx={{ justifyContent: 'space-between' }}>
            <AppTitle variant='h5' />
            <Stack direction='row' spacing={1} justifyContent='flex-end' alignItems='center'>
              <IconButton type='button'>
                <SearchIcon />
              </IconButton>
              <MenuOptions />
            </Stack>
          </Toolbar>
          <NavigationTabs value={pathname} />
        </>}

      {variant === 'toolbar' &&
        <Toolbar variant='dense' sx={{ justifyContent: 'space-between' }}>
          <Button
            color='dark'
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
          >
            {title}
          </Button>

          <Stack direction='row' spacing={1} justifyContent='flex-end' alignItems='center'>
            {isAdmin && manageAdminAction &&
              <Tooltip title='Configurar tipo de usuario' arrow>
                <IconButton onClick={manageAdminAction}>
                  <ManageAccountsIcon />
                </IconButton>
              </Tooltip>}

            {isAdmin && deleteAction &&
              <Tooltip title='Eliminar' arrow>
                <IconButton onClick={deleteAction}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>}

            <MenuOptions />
          </Stack>
        </Toolbar>}
    </AppBar>
  )
}

export default NavigationMenu
