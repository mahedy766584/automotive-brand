import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Router/Router'
import AuthProvider from './Authentication/AuthProvider/Authprovider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={myCreatedRouter} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
