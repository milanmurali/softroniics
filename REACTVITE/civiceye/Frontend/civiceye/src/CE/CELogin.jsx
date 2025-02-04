import React, { useState } from 'react'
import celogofull from '../assets/celogofull.png'
import { Link } from "react-router-dom";



export const CELogin = () => {


    const [logindata, setlogindata] = useState('')

    const change = (event) => {
        setlogindata({ ...logindata, [event.target.name]: event.target.value })
    }

    const submit = async (event) => {
        event.preventDefault()
        try {
            console.table(logindata)
        }
        catch (error) {
            console.log("CL", error);
        }
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-10">

            {/* the box  */}
            <div className="bg-white flex flex-col md:flex-row w-7xl shadow-lg rounded-lg py-10 px-4 md:py-20 md:px-0">

                {/* Left Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-between items-center p-8 border-b-2 md:border-b-0 md:border-r-2 border-gray-500">

                    <img width="200px" src={celogofull} alt="Civic Eye Logo" />

                    <p className="text-gray-700 text-center text-xl">
                        Welcome to CivicEye!
                    </p>
                    <div className='mb-4'>
                        <p className=" text-gray-500 text-center text-lg">
                            Your platform to report, track,
                        </p>
                        <p className="text-gray-500 text-center text-lg">
                            and resolve public issues with ease.
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center p-8">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-6">SIGN <span className='text-[#00B9FF]'>IN</span></h2>
                    <form className="w-full max-w-sm" onSubmit={submit}>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                onChange={change}
                                id="email"
                                name='email'
                                type="email"
                                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-white placeholder-gray-500
                                focus:outline-gray-500  active:outline-gray-500 active:shadow-lg"
                                placeholder="Email"
                            />

                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2 focus:">
                                Password
                            </label>
                            <input
                                onChange={change}
                                id="password"
                                name='password'
                                type="password"
                                className="bg-white w-full px-4 py-2 border border-gray-700 rounded-lg  placeholder-gray-500"
                                placeholder="Password"
                            />
                        </div>
                        {/* <div className="flex justify-between items-center mb-6">
                            <a href="#" className="text-sm text-[#00B9FF] hover:underline ml-auto">
                                Forgot Password?
                            </a>
                        </div> */}
                        <button
                            type="submit"
                            className="w-full bg-[#00B9FF] text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            SIGN IN
                        </button>
                    </form>
                    <p className="text-gray-600 text-sm mt-4">
                        Don't Have an Account?{' '}
                        <Link to="/signup" className="text-blue-500 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}
