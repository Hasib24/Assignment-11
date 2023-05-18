import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import router from './routes/Routes'
import AuthContextProvider from './providers/AuthContextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
<AuthContextProvider>
    <RouterProvider router={router}></RouterProvider>
</AuthContextProvider>)