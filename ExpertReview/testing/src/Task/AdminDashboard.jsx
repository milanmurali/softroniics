import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {


  const navigate = useNavigate();

  const VITE_BACKEND_URL_BASE = import.meta.env.VITE_BACKEND_URL_BASE

  const username = localStorage.getItem('username');

  return (
    <div className='flex min-h-screen'>

      {/* Sidebar */}
      <div className='bg-[#252c48] w-1/6 py-6'>
        <div>
          <p className='text-white text-2xl text-center py-4'>Admin Dashboard</p>
        </div>

        {/* side menu */}

        <div className='flex flex-col text-white items-center gap-4 mt-6'>

          <button className='flex items-center px-4 py-2 hover:bg-gray-700 rounded-md transition-colors duration-200'>Dashboard</button>


          <button className='flex items-center px-4 py-2 hover:bg-gray-700 rounded-md transition-colors duration-200'>Products</button>


          <button className='flex items-center px-4 py-2 hover:bg-gray-700 rounded-md transition-colors duration-200'>Settings</button>


          <button className='flex items-center px-4 py-2 hover:bg-gray-700 rounded-md transition-colors duration-200'>Reports</button>


        </div>
      </div>
        {/* Main Content */}
        <div className='bg-[#1d203a] w-5/6'>

          {/* Upper Menu */}
          <div className='flex text-white px-6 py-4 justify-end'>

            <button className='flex items-center px-4 py-2 hover:bg-gray-700 rounded-md transition-colors duration-200'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></svg>
            </button>

            <button className='flex items-center px-4 py-2 gap-1 text-xl'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              <p >{username}</p>
            </button>
          </div>
          {/* Welcome */}
          <div>
            <h1 className='text-white text-2xl px-10'>Welcome, {username}!</h1>
          </div>
        </div>


      </div>
      )
}
