import React, { useState } from 'react'

export const FormSubmission = () => {
    const [data, setdata] = useState('')

    const change = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const submit = (event) => {
        event.preventDefault()
        setdata(data)
        console.log(data);
        

    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Create New Account</h1>

                <form onSubmit={submit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input onChange={change} type="text" name="name" id="name" placeholder="John Doe"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input onChange={change} type="email" name="email" id="email" placeholder="example@email.com"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                        <input onChange={change} type="number" name="age" id="age" placeholder="30" min={0}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input onChange={change} type="text" name="username" id="username" placeholder="Username"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input onChange={change} type="password" name="password" id="password" placeholder="********"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-4 py-2" />
                    </div>

                    <div className="flex justify-between mt-6">
                        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Submit
                        </button>
                        <button type="reset" className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
