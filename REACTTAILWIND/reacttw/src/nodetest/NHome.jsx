import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const NHome = () => {

    const [adddata, setadddata] = useState('')


    const change = (event) => {
        setadddata({ ...adddata, [event.target.name]: event.target.value })
    }
    const submit = async (event) => {
        event.preventDefault()
        try {
            let response = await axios.post('http://127.0.0.1:6969/api/user/add', adddata)
            setadddata(adddata)
            // console.log(data);
            console.log(response);
            fetchData();
        }
        catch (error) {
            console.log(error);
        }
    }


    const [viewdata, setviewdata] = useState('');

    const fetchData = async () => {
        try {
            let response = await axios.get('http://127.0.0.1:6969/api/user/view');
            setviewdata(response.data);
            console.log("view", response);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    const del = async (id) => {
        try {
            let response = await axios.delete(`http://127.0.0.1:6969/api/user/delete/${id}`)
            fetchData()
        }
        catch (error) {
            console.log(error);
        }
    }

    const [editmode, seteditmode] = useState(false)
    const [edituser, setedituser] = useState(null);

    const openEditModal = (user) => {
        setedituser(user)
        seteditmode(true);
    }
    const closeEditModal = () => {
        seteditmode(false);
        setedituser(null)
    }

    const editchange = (event) => {
        setedituser({ ...edituser, [event.target.name]: event.target.value });
    };

    const edit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://127.0.0.1:6969/api/user/update/${edituser._id}`, edituser);
            console.log('User updated:', response.data);
            fetchData();
            closeEditModal();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="flex flex-col bg-gray-100 min-h-screen">

            {/* Node View Section */}
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl">
                    <h1 className="text-2xl font-bold text-center mb-6">View Data</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {viewdata.length > 0 ? (
                            viewdata.map((user) => (
                                <div
                                    key={user._id}
                                    className=" flex justify-between p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
                                >
                                    <div>
                                        <p className="text-lg font-medium">
                                            <strong>Name:</strong> {user.name}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong>Age:</strong> {user.age}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong>Email:</strong> {user.email}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong>Password:</strong> {user.password}
                                        </p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <button
                                            onClick={() => { openEditModal(user); }}
                                        >
                                            <img
                                                className='w-10 hover:bg-slate-200 p-2'
                                                src="https://img.icons8.com/?size=100&id=114092&format=png&color=000000"
                                                alt="" />
                                        </button>
                                        <button
                                            onClick={() => del(user._id)}
                                        >
                                            <img
                                                className='w-10 hover:bg-slate-200 p-2'
                                                src="https://img.icons8.com/?size=100&id=DsfKIIZjz707&format=png&color=000000"
                                                alt="" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 col-span-full">Loading data...</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Node Add Section */}
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
                    <h1 className="text-2xl font-bold text-center mb-4">Node Add</h1>
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

            {/* Node Edit Modal */}
            {editmode && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto relative">

                        <div className='flex justify-between items-center mb-6'>
                            <p className="text-2xl font-bold text-center">Node Edit</p>

                            <button
                                onClick={closeEditModal}
                            >
                                <img
                                    className='w-10 rounded-md hover:bg-gray-200 p-2'
                                    src="https://img.icons8.com/?size=100&id=46&format=png&color=000000" alt="" />
                            </button>
                        </div>

                        <div className="flex items-center justify-around">
                            <form className="space-y-4" onSubmit={edit}>
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                    <input
                                        onChange={editchange}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={edituser?.name || ""}

                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                {/* Age Field */}
                                <div>
                                    <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age</label>
                                    <input
                                        onChange={editchange}
                                        type="text"
                                        id="age"
                                        name="age"
                                        value={edituser?.age || ""}

                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                    <input
                                        onChange={editchange}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={edituser?.email || ""}

                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                                    <input
                                        onChange={editchange}
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={edituser?.password || ""}
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
            )}

        </div>

    )
}
