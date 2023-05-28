import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollTrigger, AppBar, Toolbar, Tabs, Tab, Container } from '@mui/material'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import { AppTitle, ProfileButton } from '@components'
import { useBreakpoint } from '@hooks'

const pages = [
  { text: 'inicio', path: '/dashboard', icon: <DashboardIcon /> },
  { text: 'pacientes', path: '/patients', icon: <AccessibilityIcon /> },
  { text: 'usuarios', path: '/users', icon: <PeopleIcon /> }
]

const TabsItems = ({ value }) => {
  const breakpoint = useBreakpoint()
  return (
    <Tabs
      value={value}
      variant={breakpoint.up('md') ? 'standard' : 'fullWidth'}
      sx={{ ...(breakpoint.up('md') && { '& .MuiTabs-indicator': { display: 'none' } }) }}
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
  )
}

const NavigationMenu = () => {
  const ToolbarRef = useRef()
  const trigger = useScrollTrigger()
  const currentPage = '/' + useLocation().pathname.split('/')[1]
  const breakpoint = useBreakpoint()

  return (
    <AppBar
      position={breakpoint.down('md') ? 'sticky' : 'fixed'}
      color='light'
      elevation={0}
      sx={{
        gridColumn: 'span 2',
        transition: 'transform 0.3s ease',
        ...(!trigger
          ? { transform: 'translateY(0)' }
          : { transform: `translateY(-${ToolbarRef?.current.clientHeight}px)` })
      }}
    >
      <Container disableGutters maxWidth='lg'>
        <Toolbar ref={ToolbarRef} sx={{ justifyContent: 'space-between' }}>
          <AppTitle variant='h4' />
          {breakpoint.up('md') && <TabsItems value={currentPage} />}
          <ProfileButton />
        </Toolbar>
        {breakpoint.down('md') && <TabsItems value={currentPage} />}
      </Container>
    </AppBar>
  )
}

export default NavigationMenu
