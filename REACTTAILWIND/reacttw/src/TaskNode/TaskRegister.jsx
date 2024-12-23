import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const TaskRegister = () => {

    // fetch user data to check if email already exists
    const [userdata, setuserdata] = useState('')
    const fetchData = async () => {
        try {
            let response = await axios.get('http://127.0.0.1:6969/user/view');
            setuserdata(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    

    // register 
    const [regdata, setregdata] = useState('')
    const change = (event) => {
        setregdata({ ...regdata, [event.target.name]: event.target.value })
    }
    const submit = async (event) => {
        event.preventDefault();

        const emailExists = userdata.some(user => user.email === regdata.email);
        if (emailExists) {
            alert('Email already in use');
            return;
        }
    
        try {
            let response = await axios.post('http://127.0.0.1:6969/user/register', regdata)
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-teal-500">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl text-center text-gray-900 font-semibold">Register</h2>
                <form className="space-y-6" onSubmit={submit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            onChange={change}
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-200 focus:border-teal-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                        <input
                            min="0"
                            onChange={change}
                            type="number"
                            id="age"
                            name="age"
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-200 focus:border-teal-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            onChange={change}
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-200 focus:border-teal-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            onChange={change}
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-200 focus:border-teal-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}
