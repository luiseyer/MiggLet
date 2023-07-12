import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from '@mui/material'

const pages = [
  { text: 'inicio', path: '/dashboard' },
  { text: 'pacientes', path: '/patients' },
  { text: 'usuarios', path: '/users' }
]

const NavigationTabs = ({ value }) => {
  return (
    <Tabs
      value={`/${value.split('/')[1]}`}
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

export default memo(NavigationTabs)
