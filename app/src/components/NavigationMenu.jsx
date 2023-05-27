import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollTrigger, AppBar, Toolbar, Tabs, Tab } from '@mui/material'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import { AppTitle, ProfileButton } from '@components'

const pages = [
  { text: 'inicio', path: '/dashboard', icon: <DashboardIcon /> },
  { text: 'pacientes', path: '/patients', icon: <AccessibilityIcon /> },
  { text: 'usuarios', path: '/users', icon: <PeopleIcon /> }
]

const NavigationMenu = () => {
  const ToolbarRef = useRef()
  const trigger = useScrollTrigger()
  const currentPage = useLocation().pathname

  return (
    <>
      <AppBar
        position='sticky'
        color='neutral'
        elevation={0}
        sx={{
          transition: 'transform 0.3s ease',
          ...(!trigger
            ? { transform: 'translateY(0)' }
            : { transform: `translateY(-${ToolbarRef?.current.clientHeight}px)` })
        }}
      >
        <Toolbar ref={ToolbarRef} sx={{ justifyContent: 'space-between' }}>
          <AppTitle variant='h4' />
          <ProfileButton />
        </Toolbar>
        <Tabs
          value={currentPage}
          variant='fullWidth'
          scrollButtons={false}
          centered
        >
          {pages.map(({ text, path, icon }) => (
            <Tab
              key={path}
              value={path}
              label={text}
              component={Link}
              to={path}
              sx={{ fontWeight: 'bolder', fontSize: '0.875rem' }}
              onClick={() => { window.scrollTo({ top: 0 }) }}
            />
          ))}
        </Tabs>
      </AppBar>
    </>
  )
}

export default NavigationMenu
