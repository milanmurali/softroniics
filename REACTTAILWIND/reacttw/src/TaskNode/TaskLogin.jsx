import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const TaskLogin = () => {

    const nav = useNavigate()
    const [login, setlogin] = useState({})

    const change = (event) => {
        setlogin({ ...login, [event.target.name]: event.target.value })
    }
    const submit = async (event) => {
        event.preventDefault()
        try {
            let response = await axios.post('http://127.0.0.1:6969/user/login', login)
            // console.log(response);

            if (response.status === 200) {
                localStorage.setItem('id', response.data._id)
                alert("Login successful!")
                nav('/home')
            }
        }
        catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    alert("User not found")
                }
                else if (error.response.status === 401) {
                    alert("Credential Mismatch")
                }
                else {
                    alert("Internal server error")
                    console.log(error)
                }
            }
            else {
                alert("An unexpected error occurred")
                console.log(error)
            }
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-teal-500">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl text-center text-gray-900 font-semibold">Login</h2>
                <form className="space-y-6" onSubmit={submit}>
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
                        className="w-full px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
