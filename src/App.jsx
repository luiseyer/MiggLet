import { PrivateRoute } from '@components'
import {
  AboutPage,
  DashboardPage,
  HomePage,
  LoginPage,
  PatientsPage,
  SettingsPage,
  SinglePatientPage,
  SingleUserPage,
  UserProfilePage,
  UsersPage
} from '@pages'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<PrivateRoute page={<DashboardPage />} />} />
      <Route path="/patients" element={<PrivateRoute />}>
        <Route index element={<PatientsPage />} />
        <Route path=":id" element={<SinglePatientPage />} />
      </Route>
      <Route path="/users" element={<PrivateRoute />}>
        <Route index element={<UsersPage />} />
        <Route path=":id" element={<SingleUserPage />} />
      </Route>
      <Route path="/about">
        <Route index element={<AboutPage />} />
        <Route path=":hash" element={<AboutPage />} />
      </Route>
      <Route path="/profile" element={<PrivateRoute page={<UserProfilePage />} />} />
      <Route path="/settings" element={<PrivateRoute page={<SettingsPage />} requireAdmin />} />
    </Routes>
  )
}

export default App
