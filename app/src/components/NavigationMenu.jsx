import { Link, useLocation } from 'react-router-dom'
import { useScrollTrigger, BottomNavigation, BottomNavigationAction, AppBar, Toolbar, Slide } from '@mui/material'
import { Dashboard, LocalHospital, People } from '@mui/icons-material'
import { AppTitle, ProfileButton } from '@components'
import { useBreakpoint } from '@hooks'

const navItems = [
  {
    text: 'dashboard',
    path: '/dashboard',
    icon: <Dashboard />
  },
  {
    text: 'historias',
    path: '/emrs',
    icon: <LocalHospital />
  },
  {
    text: 'usuarios',
    path: '/users',
    icon: <People />
  }
]

const NavigationMenu = function () {
  const breakpoint = useBreakpoint()
  const { pathname } = useLocation()
  const activeItem = '/' + pathname.split('/')[1]
  const trigger = useScrollTrigger({ target: window })

  if (breakpoint.up('sm')) {
    return (
      <h1 style={{ padding: '1rem', color: 'red' }}>
        Por ahora solo está disponible el menú movil, reduce el tamaño de la ventana para verlo
      </h1>
    )
  }

  return (
    <>
      <Slide appear={false} direction='down' in={!trigger}>
        <AppBar position='sticky' color='light' variant='outlined' elevation={0}>
          <Toolbar>
            <AppTitle />
            <ProfileButton />
          </Toolbar>
        </AppBar>
      </Slide>

      <BottomNavigation component='nav' showLabels value={activeItem} sx={{ position: 'sticky', bottom: 0, order: 1 }}>
        {navItems.map(({ text, path, label, icon }) => (
          <BottomNavigationAction
            key={text}
            value={path}
            label={text}
            icon={icon}
            component={Link}
            to={path}
          />
        ))}
      </BottomNavigation>
    </>
  )
}

export default NavigationMenu
