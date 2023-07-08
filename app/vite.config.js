import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

const createCache = ({ name, pattern, handlerType = 'CacheFirst' }) => ({
  urlPattern: pattern,
  handler: handlerType,
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 50,
      maxAgeSeconds: 7 * 24 * 60 * 60
    },
    cacheableResponse: {
      statuses: [200]
    }
  }
})

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: { enabled: true },
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg}'],
        runtimeCaching: [
          createCache({
            name: 'images',
            pattern: /\.(?:png|jpg|jpeg|svg|gif)$/
          })
        ],
        disableDevLogs: true
      },
      manifest: {
        name: 'MiggLet - Gestión de Historias Clínicas',
        short_name: 'MiggLet',
        description: 'MiggLet es una aplicación para registro, gestión y control de historias clínicas dirigida a especialistas de la salud',
        lang: 'es',
        start_url: '/',
        scope: '/',
        display: 'fullscreen',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/images/favicon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/images/favicon-256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: '/images/favicon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/favicon-96.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@contexts': resolve(__dirname, './src/contexts'),
      '@helpers': resolve(__dirname, './src/helpers'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@pages': resolve(__dirname, './src/pages')
    }
  }
})
