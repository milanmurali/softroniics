import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
// import App from './App.jsx'
import { CELogin } from './CE/CELogin.jsx'
import { CEUserProfile } from './CE/CEUserProfile.jsx'
import { CESignup } from './CE/CESignup.jsx'
import { CEGuestHomePage } from './CE/CEGuestHomePage.jsx'
import { CEUserHomePage } from './CE/CEUserHomePage.jsx'
import CEMyComplaints from './CE/CEMyComplaints.jsx'
import { CEAdminUserManagement } from './CE/CEAdminUserManagement.jsx'
import { KHome } from './Testss/KHome.jsx'
import { CEAdminDashboard } from './CE/CEAdminDashboard.jsx'
import { CEAdminComplaints } from './CE/CEAdminComplaints.jsx'
import { CEAdminFeedback } from './CE/CEAdminFeedback.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />   // Redirect to landing page
        <Route path='/landing' element={<CEGuestHomePage />} />
        <Route path='/home' element={<CEUserHomePage />} />
        <Route path="/signin" element={<CELogin />} />
        <Route path="/signup" element={<CESignup />} />
        <Route path='/myprofile' element={<CEUserProfile />} />
        <Route path='/mycomplaints' element={<CEMyComplaints />} />

        <Route path='/dashboard' element={<CEAdminDashboard />} />
        <Route path='/userlist' element={<CEAdminUserManagement />} />
        <Route path='/complaints' element={<CEAdminComplaints />} />
        <Route path='/feedback' element={<CEAdminFeedback />} />

        <Route path='test' element={<KHome/>} />
      </Routes>
 
    </BrowserRouter>

    {/* <App /> */}
  </StrictMode>

  ,)
