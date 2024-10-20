import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const ApiCallSim = () => {

    const [apidata, Setdata] = useState([])

    const fetchapidata = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            Setdata(response.data)
        }
        catch (error) {
            console.error(error);

        };
    }
    useEffect(() => {
        fetchapidata()
    })
    return (
        <div className='bg-gray-300 p-8'>

            <div className='flex justify-center'>
                <h1 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Users List</h1>
                <div className='text-center mx-4'>
                    <button onClick={fetchapidata} className='bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 duration-300'>Refresh</button>
                </div>
            </div>
            {
                apidata.map((user) => (
                    <div key={user.id} className='bg-white p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                        <h2 className='text-xl font-bold text-gray-700 mb-2'>{user.id}. {user.name}</h2>
                        <p className='text-gray-600 mb-1'><span className="font-semibold">Phone:</span> {user.phone}</p>
                        <p className='text-gray-600 mb-1'><span className="font-semibold">Email:</span> {user.email}</p>
                        <p className='text-gray-600 mb-1'><span className="font-semibold">Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                    </div>
                ))
            }
        </div>
    )
}
