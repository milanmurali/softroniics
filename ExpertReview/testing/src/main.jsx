import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { TestPage1 } from './TestPage1.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminLogin } from './Task/AdminLogin.jsx'
import { AdminDashboard } from './Task/AdminDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

      <Routes>

        {/* <Route path="/" element={<SimpleTodo />} /> */}
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>

    </BrowserRouter>


    {/* <App /> */}
    {/* <TestPage1/> */}
  </StrictMode>,
)
