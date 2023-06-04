import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { AuthContextProvider } from '@contexts/AuthContext'
import theme from './theme'
import App from './App.jsx'

const Root = document.getElementById('root')

createRoot(Root).render(
  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </ThemeProvider>
)

if (navigator.serviceWorker.controller) {
  console.log('Active service worker found')
} else {
  navigator.serviceWorker
    .register('serviceWorker.js', {
      scope: './'
    })
    .then(function () {
      console.log('Service worker registered')
    })
}
