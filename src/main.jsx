import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Injection de l'application React dans le nœud HTML racine (#root)
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)