import { memo, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useScrollTrigger, AppBar, Toolbar, Stack, IconButton, Tooltip, Button } from '@mui/material'
import { Search as SearchIcon, ArrowBack as ArrowBackIcon, Delete as DeleteIcon, ManageAccounts as ManageAccountsIcon, EditNote as EditNoteIcon } from '@mui/icons-material'
import { AppTitle, MenuOptions, NavigationTabs, SearchInput } from '@components'
import { useAuthContext, useSearchContext } from '@hooks'

const NavigationMenu = ({
  variant = 'navigation',
  title,
  noSearch,
  deleteButton,
  manageAdminButton,
  patientButton,
  sx
}) => {
  const { user: { isAdmin } } = useAuthContext()

  const ref = useRef()
  const [target, setTarget] = useState(window)
  const scrollTrigger = useScrollTrigger({ target, threshold: 0 })
  const elevationTrigger = useScrollTrigger({ disableHysteresis: true, target, threshold: 0 })
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [openSearchInput, setOpenSearchInput] = useState(false)
  const { setSearchQuery } = useSearchContext()

  useEffect(() => {
    const section = document.querySelector('.section')
    const height = document.querySelector('#appbar').clientHeight
    const spacing = section.getAttribute('data-spacing')
    section.style.paddingTop = `calc(${height}px + ${spacing}`
    setTarget(section)
  }, [openSearchInput])

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
          <Toolbar sx={{ justifyContent: 'space-between', px: 1 }}>
            {!openSearchInput && <AppTitle variant='h5' pl={1} />}
            <Stack direction='row' spacing={1} justifyContent='flex-end' flex={1} alignItems='center'>
              {!openSearchInput &&
                <>
                  {!noSearch &&
                    <IconButton type='button' onClick={() => { setOpenSearchInput(true) }}>
                      <SearchIcon />
                    </IconButton>}

                  <MenuOptions />
                </>}

              {openSearchInput &&
                <>
                  <IconButton
                    type='button' onClick={() => {
                      setOpenSearchInput(false)
                      setSearchQuery('')
                    }}
                  >
                    <ArrowBackIcon />
                  </IconButton>

                  <SearchInput />
                </>}
            </Stack>
          </Toolbar>

          {!openSearchInput && <NavigationTabs value={pathname} />}
        </>}

      {variant === 'toolbar' &&
        <Toolbar sx={{ justifyContent: 'space-between', px: 1 }}>
          <Button
            color='dark'
            onClick={() => {
              setSearchQuery('')
              navigate(-1)
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <ArrowBackIcon />
            {title}
          </Button>

          <Stack direction='row' spacing={1} justifyContent='flex-end' alignItems='center'>
            {isAdmin && manageAdminButton &&
              <Tooltip title='Configurar tipo de usuario' arrow>
                <IconButton id='manage-admin-button'>
                  <ManageAccountsIcon />
                </IconButton>
              </Tooltip>}

            {isAdmin && deleteButton &&
              <Tooltip title='Eliminar' arrow>
                <IconButton id='delete-button'>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>}

            {patientButton &&
              <Tooltip title='Actualizar datos' arrow>
                <IconButton id='patient-button'>
                  <EditNoteIcon />
                </IconButton>
              </Tooltip>}

            <MenuOptions />
          </Stack>
        </Toolbar>}
    </AppBar>
  )
}

export default memo(NavigationMenu)
