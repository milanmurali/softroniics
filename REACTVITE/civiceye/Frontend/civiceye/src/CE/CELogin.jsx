import React, { useEffect, useState } from 'react'
import celogofullpng from '../assets/celogofull.png'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export const CELogin = () => {

    const navigate = useNavigate();

    const userId = localStorage.getItem('id'); // Get the user id from local storage 
    useEffect(() => {
        if (userId) {
            navigate('/home')
        }
    }, []);


    const [logindata, setlogindata] = useState('')

    const change = (event) => {
        setlogindata({ ...logindata, [event.target.name]: event.target.value })
    }

    const submit = async (event) => {
        event.preventDefault()
        try {
            console.table(logindata)
            const response = await axios.post('http://127.0.0.1:6969/user/login', logindata);

            // console.log(response);
            // console.log(response.data.token);
            localStorage.setItem("token", response.data.token);
            // console.log(localStorage.getItem("token"));
            localStorage.setItem("id", response.data.id);
            // console.log(localStorage.getItem("id"));
            toast.success(response.data.message);
            setTimeout(() => {
                navigate('/home ');
            }, 1000);
        }
        catch (error) {
            console.log("Error Occured", error);
            toast.error(error.message || error.response.data.message);
        }
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-10">
            <Toaster />

            {/* the box  */}
            <div className="bg-white w-7xl shadow-lg rounded-lg py-10 px-4 md:py-8 md:px-0">


                <Link to="/landing" className='hidden md:block'>
                    <img
                        className="w-7 h-7 mx-6 hover:bg-gray-200 rounded-lg p-1 cursor-pointer"
                        src="https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=000000"
                        alt="Icon"
                    />
                </Link>
                <div className='flex flex-col md:flex-row'>
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 flex flex-col justify-between items-center p-8 border-b-2 md:border-b-0 md:border-r-2 border-gray-500">

                        <img width="200px" src={celogofullpng} alt="Civic Eye Logo" />

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
        </div>
    )
}
