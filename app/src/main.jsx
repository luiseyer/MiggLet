import '@assets/modern-normalize.css'
import '@assets/index.css'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ThemeProvider } from '@mui/material/styles'
import { AuthContextProvider } from '@contexts/AuthContext'
import { SearchContextProvider } from '@contexts/SearchContext'
import theme from './theme'
import App from './App.jsx'

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
