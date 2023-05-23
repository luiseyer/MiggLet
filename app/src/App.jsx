// THEME
import theme from './theme'
// BASICS
import { memo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
// PAGES
import { DashboardPage, EMRsPage, UsersPage, LoginPage} from './views'
// COMPONENTS
import AppContainer from './components/AppContainer'

const App = function () {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppContainer id='app-container'>
            <Routes>
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/emrs' element={<EMRsPage />} />
              <Route path='/users' element={<UsersPage />} />
              <Route path='/login' element={<LoginPage/> }/>
            </Routes>
          </AppContainer>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default memo(App)
