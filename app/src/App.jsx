import { memo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DashboardPage, EMRsPage, UsersPage, LoginPage } from '@pages'

const App = function () {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Página de Inicio</h1>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/emrs' element={<EMRsPage />} />
        <Route path='/users' element={<UsersPage />} />
      </Routes>
    </>
  )
}

export default memo(App)
