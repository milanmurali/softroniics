import React from 'react'
import { Link } from 'react-router-dom'
import celogofull from '../assets/celogofull.png'


export const CEHomePage = () => {
    return (
        <div>
            {/* the nav  */}
            <nav className='flex justify-between items-center p-4 bg-white shadow-md'>
                {/* Logo */}
                <div className='navheadflex'>
                    <Link to="/home">
                        <img
                            src={celogofull}
                            width="160"
                            height="40"
                            title="Flipkart"
                        />
                    </Link>
                </div>

                {/* Action Buttons */}
                <div className="space-x-6 ">
                    <Link to="#" className="text-gray-700 hover:text-blue-500">Home</Link>
                    <Link to="#" className="text-gray-700 hover:text-blue-500">My Complaints</Link>
                    <Link to="#" className="text-gray-700 hover:text-blue-500">About</Link>
                    <Link to="#" className="text-gray-700 hover:text-blue-500">Contact</Link>
                    <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
                </div>
            </nav>
        </div>
    )
}
