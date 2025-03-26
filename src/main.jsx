import '@assets/modern-normalize.css'
import '@assets/index.css'

import { AuthContextProvider } from '@contexts/AuthContext'
import { SearchContextProvider } from '@contexts/SearchContext'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import theme from './theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24
    }
  }
})

const Root = document.getElementById('root')

createRoot(Root).render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SearchContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </ThemeProvider>
)
