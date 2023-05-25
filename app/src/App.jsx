import { Routes, Route } from 'react-router-dom'
import { DashboardPage, EMRsPage, UsersPage, LoginPage, HomePage } from '@pages'
import { PrivateRoute } from '@components'

const App = function () {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<PrivateRoute page={<DashboardPage />} />} />
        <Route path='/emrs' element={<PrivateRoute />}>
          <Route index element={<EMRsPage />} />
          <Route path=':id' element={<h1>Single EMR</h1>} />
        </Route>
        <Route path='/users' element={<PrivateRoute />}>
          <Route index element={<UsersPage />} />
          <Route path=':id' element={<h1>Single User</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
