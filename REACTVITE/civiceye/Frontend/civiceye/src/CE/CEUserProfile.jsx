import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import celogofullpng from '../assets/celogofull.png';
import spinner from '../assets/spinner.gif'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
export const CEUserProfile = () => {


    const navigate = useNavigate();
    const userid = localStorage.getItem('id'); // Get the user ID from local storage
    const [loading, setLoading] = useState(true); // Track loading state
    const [popupOpen, setPopupOpen] = useState(false)
    const [formData, setFormData] = useState({ // Form data state
        name: '',
        mobile: '',
        email: '',
        dob: '',
        password: '',
        address: ''
    });

    useEffect(() => {
        if (!userid) {
            navigate('/landing')
        }
    }, []);


    // Fetch the logged user data from the backend
    const fetchUserData = async () => {
        try {
            if (!userid) return;
            const response = await axios.get(`http://127.0.0.1:6969/user/viewuser/${userid}`);
            if (response) {
                setFormData({
                    name: response.data.name || '',
                    mobile: response.data.mobile || '',
                    email: response.data.email || '',
                    dob: response.data.dob || '',
                    password: 'AAAAAA',
                    address: response.data.address || ''
                });
                setLoading(false);
                // console.table(formData);
            }


        }
        catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);


    const change = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            // console.log(formData);            
            let response = await axios.put(`http://127.0.0.1:6969/user/update/${userid}`, formData)
            console.log(response.data);
            toast.success(response.data.message);
            fetchUserData();
        }
        catch (error) {
            console.log("CL", error);
            toast.error(error)
        }
    }

    const deleteaccount = async () => {
        try {
            let response = await axios.delete(`http://127.0.0.1:6969/user/delete/${userid}`)
            console.log(response.data);
            toast.success(response.data.message);
            localStorage.clear();
            setTimeout(() => {
                navigate('/landing ');
            }, 1000);
        }
        catch (error) {
            console.log("CL", error);
            toast.error(error)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-10">
            <Toaster />
            {/* Logo */}
            <img src={celogofullpng} alt="Civic Eye Logo" className="w-32 mb-6" />


            <div className="bg-white w-full max-w-2xl shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                    PROFILE <span className="text-blue-500">DETAILS</span>
                </h2>

                {loading ?
                    (
                        <div className='flex ite justify-center gap-4'>
                            <img src={spinner} alt="Loading..." className="w-10 h-10" />
                            <p className="text-xl font-semibold text-gray-700 mt-2">Loading...</p>
                        </div>
                    )
                    :
                    (
                        <form className="space-y-5" onSubmit={submit}>
                            {/* Full Name */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id='name'
                                    value={formData.name || ''}
                                    placeholder='Full Name'
                                    onChange={change}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    id='mobile'
                                    placeholder='Update Mobile Number'
                                    value={formData.mobile || ''}
                                    onChange={change}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id='email'
                                    placeholder='Update Email'
                                    value={formData.email || ''}
                                    onChange={change}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* DOB */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1">D.O.B</label>
                                <input
                                    type="date"
                                    name="dob"
                                    id='dob'
                                    value={formData.dob || ''}
                                    format="dd-mm-yy"
                                    onChange={change}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                                <input
                                    placeholder='Update password'
                                    type="password"
                                    name="password"
                                    id='password'
                                    value={formData.password}
                                    onChange={change}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Address (Textarea) */}
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-1">Address</label>
                                <textarea
                                    placeholder='Enter your address here'
                                    name="address"
                                    id='address'
                                    rows="3"
                                    value={formData.address}
                                    onChange={change}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                            Submit
                        </button> */}
                            {/* Buttons */}
                            <div className="flex justify-center gap-4 mt-6">
                                {/* <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 transition">
                            Edit
                        </button> */}
                                <div
                                    onClick={() => setPopupOpen(true)}
                                    className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">
                                    Delete Account
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                                    Update Account
                                </button>
                            </div>
                        </form>

                    )
                }
            </div>

            {popupOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-gray-950/80">
                    <div className="relative flex items-center justify-center">
                        <button
                            onClick={() => setPopupOpen(false)}
                            className="absolute top-4 right-4 focus:outline-none transition transform hover:scale-105 active:scale-95"
                        >
                            <img
                                src="https://img.icons8.com/?size=100&id=82771&format=png&color=000000"
                                alt="Close"
                                className="w-6 h-6"
                            />
                        </button>
                        <div className="w-full max-w-2xl p-4 md:p-8 bg-white rounded-lg shadow-2xl mx-auto">
                            <h2 className="text-2xl font-bold text-center text-gray-800">
                                Confirm Account Deletion
                            </h2>
                            <p className="text-center text-gray-600 mt-4">
                                Are you sure you want to delete your account?
                            </p>
                            <p className="text-center text-gray-600 mt-4">
                                This action cannot be undone.
                            </p>
                            <div className="flex justify-center gap-4 mt-6">
                                <button
                                    onClick={() => setPopupOpen(false)}

                                    className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 transition">
                                    Cancel
                                </button>
                                <button
                                    onClick={deleteaccount}
                                    className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">
                                    Delete Account
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div >




    )
}
