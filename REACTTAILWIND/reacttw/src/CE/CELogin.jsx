import React from 'react'

export const CELogin = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">

            <div className="bg-white w-full max-w-4xl shadow-lg rounded-lg flex items-center">

                {/* Left Section */}
                <div className="w-1/2 flex flex-col justify-center items-center p-8">
                    <h1 className="text-3xl font-bold mb-4">
                        <span className="text-[#354020]">Civic</span>
                        <span className="text-[#00B9FF]">EYE</span>
                    </h1>
                    <p className="text-gray-700 text-center">
                        Welcome to CivicEye!
                    </p>
                    <p className="text-gray-500 text-center mt-2">
                        Your platform to report, track, and resolve public issues with ease.
                    </p>
                </div>

                {/* Right Section */}
                <div className="w-1/2 flex flex-col justify-center items-center p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">SIGN IN</h2>
                    <form className="w-full max-w-sm">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-white placeholder-gray-500 "
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B9FF] focus:border-[#00B9FF]"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-6">
                            <a href="#" className="text-sm text-[#00B9FF] hover:underline ml-auto">
                                Forgot Password?
                            </a>
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
                        <a href="#" className="text-[#00B9FF] hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>

            </div>
        </div>
    )
}
