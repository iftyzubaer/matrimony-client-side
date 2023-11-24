import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Layout/Root.jsx'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </React.StrictMode>
)
