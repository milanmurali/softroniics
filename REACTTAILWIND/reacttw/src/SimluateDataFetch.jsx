import React, { useEffect, useState } from 'react'

export const SimluateDataFetch = () => {

    const [data, setData] = useState([]);

    const userlist = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 35 },

    ];
    useEffect(() =>{
        const fetchdata = () =>{
            setTimeout(() => {
                setData(userlist);
            }, 2000);
        }
        fetchdata();
    },[])


    return (
        <div className='flex justify-center items-center bg-green-700 h-screen'>
            <div className='bg-white rounded-lg p-8'>
                <h1 className='text-2xl font-bold text-gray-800 mb-4 text-center'>User List</h1>
                <ul>
                    {data.map((user) => (
                        <li className='bg-gray-100 p-4 mb-2 rounded-lg text-gray-800 shadow-md text-center'>
                            {user.name}, {user.age}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
