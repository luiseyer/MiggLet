import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollTrigger, AppBar, Toolbar, Tabs, Tab, Stack, IconButton, Tooltip } from '@mui/material'
import {
  Search as SearchIcon,
  ChevronLeft as ChevronLeftIcon,
  Delete as DeleteIcon,
  ManageAccounts as ManageAccountsIcon
} from '@mui/icons-material'
import { AppTitle, MenuOptions } from '@components'
import { useAuthContext } from '@hooks'

const pages = [
  { text: 'inicio', path: '/dashboard' },
  { text: 'pacientes', path: '/patients' },
  { text: 'usuarios', path: '/users' }
]

const TabsItems = ({ value }) => {
  return (
    <Tabs
      value={value}
      variant='fullWidth'
    >
      {pages.map(({ text, path }) => (
        <Tab
          key={path} value={path} label={text} component={Link} to={path}
          sx={{ fontWeight: 'bolder', fontSize: '0.75rem' }}
          onClick={() => { window.scrollTo({ top: 0 }) }}
        />
      ))}
    </Tabs>
  )
}

const NavigationMenu = ({
  variant = 'navigation',
  deleteAction,
  manageAdminAction,
  sx
}) => {
  const { user: { isAdmin } } = useAuthContext()

  const ref = useRef()
  const [target, setTarget] = useState(window)
  const [elevation, setElevation] = useState(0)
  const trigger = useScrollTrigger({ target })
  const currentPage = '/' + useLocation().pathname.split('/')[1]

  useEffect(() => {
    setTarget(ref?.current.nextSibling)
  }, [])

  useEffect(() => {
    const section = ref.current.nextSibling
    const height = ref.current.clientHeight
    const spacing = section.getAttribute('data-spacing')

    section.style.paddingTop = `calc(${height}px + ${spacing}`

    target.addEventListener('scroll', () => {
      if (target.scrollTop <= 0) {
        return setElevation(0)
      }
      return setElevation(3)
    })
  }, [target])

  return (
    <AppBar
      id='appbar'
      ref={ref}
      color='light'
      elevation={elevation}
      sx={{
        background: (theme) => theme.gradient.surface,
        transition: 'transform 0.1s ease',
        transform: 'translateY(0)',
        ...(trigger &&
          { transform: `translateY(-${ref.current.querySelector('.MuiToolbar-root').clientHeight}px)` }),
        ...sx
      }}
    >
      {variant === 'navigation' &&
        <>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <AppTitle variant='h5' />
            <Stack direction='row' spacing={1} justifyContent='flex-end' alignItems='center'>
              <IconButton type='button'>
                <SearchIcon />
              </IconButton>
              <MenuOptions />
            </Stack>
          </Toolbar>
          <TabsItems value={currentPage} />
        </>}

      {variant === 'toolbar' &&
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton component={Link} to='..'>
            <ChevronLeftIcon />
          </IconButton>

          <Stack direction='row' spacing={1} justifyContent='flex-end' alignItems='center'>
            {isAdmin && manageAdminAction &&
              <Tooltip title='Configurar tipo de usuario' arrow>
                <IconButton onClick={deleteAction}>
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
