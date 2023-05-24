import { memo } from 'react'
import { Link, NavLink, matchPath, useLocation } from 'react-router-dom'
import { Paper, Tabs, Tab, Box, IconButton } from '@mui/material'
import { Dashboard, LocalHospital, People, Settings } from '@mui/icons-material'
import { ProfileButton } from '@components'
import { useIsMobile } from '@helpers'

const navItems = [
  {
    text: 'inicio',
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

const styles = ({ breakpoints }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& .MuiBox-root': {
    gap: '0.5rem',
    display: 'flex'
  },
  [breakpoints.down('md')]: {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    '& .MuiTab-root': {
      fontSize: '0.5rem'
    },
    '& .MuiBox-root': {
      px: 1
    }
  },
  [breakpoints.up('md')]: {
    maxHeight: '100dvh',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    pb: 1,
    bgcolor: 'dark.main',
    '& .MuiTabs-indicator': {
      display: 'none'
    },
    '& .MuiTab-root': {
      fontSize: '0.5rem',
      py: 2,
      color: 'neutral.dark',
      '& .MuiTab-iconWrapper': {
        width: 40,
        height: 40
      }
    },
    '& .MuiTab-root.Mui-selected': {
      py: 2,
      color: 'primary.main'
    },
    '& .MuiBox-root': {
      py: 1,
      flexDirection: 'column',
      '& .MuiIconButton-root': {
        color: 'neutral.dark'
      }
    }
  }
})

const NavigationMenu = function () {
  const { pathname } = useLocation()
  const activeItem = navItems.find((item) => !!matchPath(pathname, item.path))
  const isMobile = useIsMobile()

  return (
    <>
      <Paper id='navigation-menu' square elevation={2} sx={styles}>
        <Tabs
          value={activeItem?.text}
          variant='scrollable'
          scrollButtons={false}
          orientation={isMobile ? 'horizontal' : 'vertical'}
        >
          {navItems.map(item =>
            <Tab
              key={item.text}
              value={item.text}
              label={item.text}
              icon={item.icon}
              component={NavLink}
              to={item.path}
            />
          )}
        </Tabs>

        <Box>
          <IconButton component={Link} to='/settings'><Settings /></IconButton>
          <ProfileButton />
        </Box>
      </Paper>
    </>
  )
}

export default memo(NavigationMenu)
