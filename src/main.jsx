import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routers/Routes'
import { createContext } from "react";
import { ToastContainer } from 'react-toastify'

export const contextApi=createContext()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
    
  </StrictMode>
)
