import React from 'react'
import { Link } from 'react-router-dom'

export const BisSignup = () => {
    return (
        <div className='font-sans bg-[#145cd4] min-h-screen flex flex-col'>

            <div className='nav text-white py-5 items-center sm:flex sm:flex-row sm:justify-center md:flex-row md:justify-around'>

                <div className='navname flex items-center sm:flex sm:justify-center'>
                    <img className="w-10 h-10 " src="https://img.icons8.com/?size=100&id=TPxGML1TEPUB&format=png&color=ffffff" alt="Icon" />
                    <Link to="/home" className=' text-3xl font-bold px-3 rounded'>Business</Link>
                </div>
                <div className='navitems flex flex-wrap items-center justify-center sm:flex-none'>
                    <Link to="/bislogin" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Login</Link>
                    <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Services</a>
                    <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">PortFolio</a>
                    <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Pricing</a>
                    <Link to="/bisabout" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">About</Link>
                    <Link to="/biscontact" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Contact</Link>
                </div>
            </div>

            <div className="flex-grow flex items-center justify-center">
                <div className='bg-white rounded-lg shadow-lg p-8 w-full max-w-md'>
                    <h2 className='text-3xl font-bold text-center text-[#145cd4] mb-6'>Sign Up</h2>

                    <form>
                        <div className='mb-4'>
                            <label className='block text-sm font-semibold text-gray-700'>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className='w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-[#145cd4] focus:ring focus:ring-[#145cd4] focus:ring-opacity-50'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-sm font-semibold text-gray-700'>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className='w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-[#145cd4] focus:ring focus:ring-[#145cd4] focus:ring-opacity-50'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-sm font-semibold text-gray-700'>Password</label>
                            <input
                                type="password"
                                placeholder="Create a password"
                                className='w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-[#145cd4] focus:ring focus:ring-[#145cd4] focus:ring-opacity-50'
                            />
                        </div>

                        <div className='mb-6'>
                            <label className='block text-sm font-semibold text-gray-700'>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className='w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-[#145cd4] focus:ring focus:ring-[#145cd4] focus:ring-opacity-50'
                            />
                        </div>

                        <button
                            type="submit"
                            className='w-full bg-[#145cd4] text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>
                            Sign Up
                        </button>
                    </form>

                    <div className='mt-6 text-center'>
                        <p className='text-gray-600'>Already have an account?
                            <Link to="/bislogin">

                                <a href="#" className='text-[#145cd4] font-bold ml-1 hover:underline'>Login</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
