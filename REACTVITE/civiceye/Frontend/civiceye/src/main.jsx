import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
// import App from './App.jsx'

import { CELogin } from './CE/CELogin.jsx'
import { CEUserProfile } from './CE/CEUserProfile.jsx'
import { CESignup } from './CE/CESignup.jsx'
import { CEGuestHomePage } from './CE/CEGuestHomePage.jsx'
import { KHome } from './Testss/KHome.jsx'
import { CEUserHomePage } from './CE/CEUserHomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        
        <Route path='/landing' element={<CEGuestHomePage />} />
        <Route path='/home' element={<CEUserHomePage />} />
        <Route path="/signin" element={<CELogin />} />
        <Route path="/signup" element={<CESignup />} />
        <Route path='/myprofile' element={<CEUserProfile />} />


        <Route path='/khome' element={<KHome />} />


      </Routes>
    </BrowserRouter>

    {/* <App /> */}
  </StrictMode>

  ,)
