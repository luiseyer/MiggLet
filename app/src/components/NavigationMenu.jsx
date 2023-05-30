import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScrollTrigger, AppBar, Toolbar, Tabs, Tab, Collapse } from '@mui/material'
import { AppTitle, ProfileButton } from '@components'

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
  const ref = useRef()
  const [target, setTarget] = useState(window)
  const trigger = useScrollTrigger({ target })
  const currentPage = '/' + useLocation().pathname.split('/')[1]
  useEffect(() => { setTarget(ref?.current.nextSibling) }, [])

  return (
    <AppBar
      id='appbar'
      ref={ref}
      color='light'
      elevation={0}
      variant='outlined'
      sx={{
        gridColumn: 'span 2'
      }}
    >
      <Collapse in={!trigger} timeout='auto' unmountOnExit>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <AppTitle variant='h5' />
          <ProfileButton />
        </Toolbar>
      </Collapse>
      <TabsItems value={currentPage} />
    </AppBar>
  )
}

export default NavigationMenu
