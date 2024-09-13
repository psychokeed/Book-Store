import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

const root = createRoot(document.getElementById('root'));
root.render(
  
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  
);
