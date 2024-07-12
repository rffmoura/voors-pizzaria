import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.css'
import ContextProvider from './context'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      <Toaster />
    </ContextProvider>
  </React.StrictMode>,
)
