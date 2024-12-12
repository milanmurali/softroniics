import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NodeLogin = () => {
  const nav = useNavigate()


  const [adddata, setadddata] = useState('')

  const change = (event) => {
    setadddata({ ...adddata, [event.target.name]: event.target.value })
  }
  const submit = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.post('http://127.0.0.1:6969/api/user/login', adddata)
      console.log(response.data);

      if (response.data) {
        localStorage.setItem('id', response.data._id)
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('password', response.data.password)
        alert("YEEESS")
        nav('/profile')

      }
      else {
        alert("PODA")
      }
    }
    catch (error) {
      console.log("CL", error);
      console.error("CE", error)
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Node Login</h1>
        <form className="space-y-4" onSubmit={submit}>
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Email</label>
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
          {/* Submit and Clear Buttons */}
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
  )
}
