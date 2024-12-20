import axios from 'axios';
import { add } from 'mathjs';
import React, { useState } from 'react';

const NodeRegister = () => {
    const [regdata, setregdata] = useState('')

    const change = (event) => {
        setregdata({ ...regdata, [event.target.name]: event.target.value })
    }
    const submit = async (event) => {
        event.preventDefault();
        try {
            let response = await axios.post('http://127.0.0.1:6969/api/user/register', regdata)
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
                    <h1 className="text-2xl font-bold text-center mb-4">Node Register</h1>
                    <form className="space-y-4" onSubmit={submit}>
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                onChange={change}
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                        {/* Age Field */}
                        <div>
                            <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age</label>
                            <input
                                onChange={change}
                                type="text"
                                id="age"
                                name="age"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                onChange={change}
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                            <input
                                onChange={change}
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>
                        {/* Submit Button */}
                        <div className="flex space-x-4">
                            <button
                                type="submit"
                                className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Submit
                            </button>
                            <button
                                type="reset"
                                className="flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                Clear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NodeRegister;