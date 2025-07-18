import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HoxRoot } from 'hox'
import './assets/css/global.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HoxRoot>
        <App />
      </HoxRoot>
    </BrowserRouter>
  </StrictMode>
)
