import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginApi } from '../Api/api'
export const Login = () => {

    const [login, setlogin] = useState({
        email: "",
        password: ""
    })

    const change = (event) => {
        setlogin({ ...login, [event.target.name]: event.target.value })
    }
    const submit = async (event) => {
        event.preventDefault()
        try {
            let response = await loginApi(login)
            console.log(response);
        }
        catch (error) {
            console.error("Internal Server Error", error)
        }
    }


    console.log(login);

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
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-200"
                        >
                            Login
                        </button>
                    </div>
                    <div className='text-center underline'>
                        <Link to={"/register"}>
                            <p>New Here?</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
