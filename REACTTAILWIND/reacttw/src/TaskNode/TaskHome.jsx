import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskHome = () => {

    const nav = useNavigate()

    // get id from localStorage
    let id = localStorage.getItem('id')
    console.log("LocalStorage ID : ", id);

    // get userdata using id 
    const [viewuserdata, setviewuserdata] = useState('');

    const fetchData = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:6969/user/viewid/${id}`);
            setviewuserdata(response.data);
            console.log(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    useEffect(() => {
        fetchData();

    }, [id]);

    // logout user
    const logout = () => {
        localStorage.clear()
        nav('/login')
    }

    // task view data
    const [tasks, settasks] = useState('');

    const fetchtasks = async () => {
        try {
            let response = await axios.get('http://127.0.0.1:6969/task/view')
            settasks(response.data)
            console.log(tasks);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        fetchtasks();
    }, []);



    // task add modal 
    const [modal, setmodal] = useState(false)

    const openModal = () => {
        setmodal(true);
        console.log(modal);

    }
    const closeModal = () => {
        setmodal(false);
        console.log(modal);
    }

    const [addtask, setaddtask] = useState({
        status: 'pending',
        loggedinuser: id
    })

    const taskaddchange = (event) => {
        setaddtask({ ...addtask, [event.target.name]: event.target.value })
    }

    const taskaddsubmit = async (event) => {
        event.preventDefault();

        try {
            let response = await axios.post('http://127.0.0.1:6969/task/add', addtask)
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 font-mono">
            {/* nav */}
            <div className="bg-teal-500 px-4 py-6 shadow-md container mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">To-do List</h1>

                </div>
                <div className="flex space-x-4">
                    <button
                        className="bg-white text-teal-500 py-2 px-4 rounded-md font-semibold hover:bg-gray-100 shadow"
                        onClick={openModal}
                    >Create New</button>
                    <button
                        onClick={logout}
                        className="bg-white text-teal-500 py-2 px-4 rounded-md font-semibold hover:bg-gray-100 shadow"
                    >Logout</button>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4">
                {/* Welcome Message */}
                <div>
                    <p className="text-gray-800 text-2xl font-semibold my-4 capitalize">
                        Welcome, {viewuserdata.name}
                    </p>
                </div>
                {/* Todo List Section */}
                <main className="">
                    <div className="bg-white px-4 py-4 rounded-lg shadow-md max-w-7xl mx-auto">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Tasks</h3>
                        <div className="space-y-4">
                            {tasks && tasks.length > 0 ? (
                                tasks.map((task, index) => (
                                    <div
                                        key={index}
                                        className="p-4 border rounded-md bg-gray-50 flex justify-between items-center shadow-sm"
                                    >
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800">{task.title}</h4>
                                            <p className="text-sm text-gray-600">{task.description}</p>
                                        </div>
                                        <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200">
                                            Delete
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">No tasks available</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <div className="fixed bottom-0 bg-gray-100 text-center py-4 w-full">
                <p className="text-sm text-gray-500">© 2024 MM. All rights reserved.</p>
            </div>

            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto relative">

                        <div className='flex justify-between items-center mb-6'>
                            <p className="text-2xl font-bold text-center">Create New Task</p>

                            <button
                                onClick={closeModal}
                            >
                                <img
                                    className='w-10 rounded-md hover:bg-gray-200 p-2'
                                    src="https://img.icons8.com/?size=100&id=46&format=png&color=000000" alt="" />
                            </button>
                        </div>

                        <div className="flex items-center justify-around">
                            <div className="">
                                <form onSubmit={taskaddsubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                            Title
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="title"
                                            name='title'
                                            onChange={taskaddchange}
                                            type="text"
                                            placeholder="Enter task title"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                            Description
                                        </label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="description"
                                            name="description"
                                            onChange={taskaddchange}
                                            placeholder="Enter task description"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                                            Status
                                        </label>
                                        <select
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="status"
                                            name="status"
                                            onChange={taskaddchange}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Add Task
                                        </button>
                                        <button
                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="reset"
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>



    );
};

export default TaskHome;