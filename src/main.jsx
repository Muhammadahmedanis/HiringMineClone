import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppRouter from './Router/index.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <AppRouter>
    <App />
  </AppRouter>
  // </StrictMode>,
)
