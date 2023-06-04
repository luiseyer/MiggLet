import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollTrigger, AppBar, Toolbar, Tabs, Tab, Collapse, Stack, IconButton } from '@mui/material'
import { AppTitle, ProfileButton } from '@components'
import { LocalHospital as LocalHospitalIcon, Dashboard as DashboardIcon, People as PeopleIcon, Search as SearchIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material'

const pages = [
  { text: 'inicio', path: '/dashboard', icon: <DashboardIcon /> },
  { text: 'pacientes', path: '/patients', icon: <LocalHospitalIcon /> },
  { text: 'usuarios', path: '/users', icon: <PeopleIcon /> }
]

const TabsItems = ({ value }) => {
  return (
    <Tabs
      value={value}
      variant='fullWidth'
    >
      {pages.map(({ text, path, icon }) => (
        <Tab
          key={path}
          value={path}
          label={text}
          icon={icon}
          component={Link}
          to={path}
          sx={{ fontWeight: 'bolder', fontSize: '0.65rem', py: 0, minHeight: 64 }}
          onClick={() => { window.scrollTo({ top: 0 }) }}
        />
      ))}
    </Tabs>
  )
}

const NavigationMenu = ({ variant = 'navigation' }) => {
  const ref = useRef()
  const [target, setTarget] = useState(window)
  const trigger = useScrollTrigger({ target })
  const currentPage = '/' + useLocation().pathname.split('/')[1]

  useEffect(() => {
    setTarget(ref?.current.nextSibling)
    if (ref?.current.nextSibling instanceof window.HTMLElement) {
      ref.current.nextSibling.style.paddingTop = `calc(${ref.current.clientHeight}px + 2rem`
    }
  }, [])

  return (
    <AppBar
      id='appbar'
      ref={ref}
      color='light'
      elevation={0}
      variant='outlined'
    >
      {variant === 'navigation' &&
        <>
          <Collapse in={!trigger} timeout='auto' unmountOnExit>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <AppTitle variant='h5' />
              <Stack
                direction='row'
                spacing={1}
                justifyContent='flex-end'
                alignItems='center'
              >
                <IconButton type='button'>
                  <SearchIcon />
                </IconButton>
                <ProfileButton />
              </Stack>
            </Toolbar>
          </Collapse>
          <TabsItems value={currentPage} />
        </>}

      {variant === 'toolbar' &&
        <Collapse in={!trigger} timeout='auto' unmountOnExit>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton component={Link} to='..'>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        </Collapse>}
    </AppBar>
  )
}

export default NavigationMenu
