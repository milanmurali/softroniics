import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskHome = () => {

    const nav = useNavigate()
    
    // get id from localStorage
    let id = localStorage.getItem('id')
    // console.log("LocalStorage ID : ", id);

    // get userdata using localstorage id 
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
            let response = await axios.get(`http://127.0.0.1:6969/task/viewid/${id}`);
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
    const [addmodal, setaddmodal] = useState(false)

    const openaddmodal = () => {
        setaddmodal(true);
        console.log(addmodal);

    }
    const closeaddmodal = () => {
        setaddmodal(false);
        console.log(addmodal);
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
            fetchtasks();
            closeaddmodal();
        }
        catch (error) {
            console.log(error);
        }
    }

    // delete task
    const deletetask = async (id) => {
        try {
            let response = await axios.delete(`http://127.0.0.1:6969/task/delete/${id}`)
            console.log(response);
            fetchtasks();
        }
        catch (error) {
            console.log(error);
        }
    }

    // edit task
    const [editmodal, seteditmodal] = useState(false)
    const [edituser, setedituser] = useState(null);

    const openEditModal = (task) => {
        setedituser(task)
        seteditmodal(true);
    }
    const closeEditModal = () => {
        seteditmodal(false);
        setedituser(null)
    }

    const taskeditchange = (event) => {
        setedituser({ ...edituser, [event.target.name]: event.target.value });
    };
    const taskeditsubmit = async (event) => {
        event.preventDefault();
        try {
            let response = await axios.put(`http://127.0.0.1:6969/task/update/${edituser._id}`, edituser)
            console.log(response);
            fetchtasks();
            closeEditModal();
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen">
            {/* nav */}
            <div className="bg-teal-500 px-4 py-6 shadow-md container mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">To-do List</h1>

                </div>
                <div className="flex space-x-4">
                    <button
                        className="bg-white text-teal-500 py-2 px-4 rounded-md font-semibold hover:bg-gray-200 shadow transition duration-200"
                        onClick={openaddmodal}
                    >Create New</button>
                    <button
                        onClick={logout}
                        className="bg-white text-teal-500 py-2 px-4 rounded-md font-semibold hover:bg-gray-700 hover:text-white shadow transition duration-200"
                    >Logout</button>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4">
                {/* Welcome Message */}
                <div>
                    <p className="text-gray-800 text-2xl font-semibold px-4 py-4 capitalize ">
                        Welcome, {viewuserdata.name}
                    </p>

                </div>
                {/* Todo List Section */}
                <div className="">
                    <div className="bg-white px-4 py-4 rounded-lg mx-auto">
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

                                        <div className='space-x-4'>
                                            <button
                                                onClick={() => openEditModal(task)}
                                                className="bg-white text-teal-500 py-2 px-4 rounded-md font-semibold hover:bg-teal-500 hover:text-white shadow transition duration-200">
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => deletetask(task._id)}
                                                className="bg-white text-teal-500 py-2 px-4 rounded-md font-semibold hover:bg-red-500 hover:text-white shadow transition duration-200">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">No tasks available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            {/* <div className="fixed bottom-0 bg-gray-100 text-center py-4 w-full">
                <p className="text-sm text-gray-500">© 2024 MM. All rights reserved.</p>
            </div> */}

            {/* add modal  */}
            {addmodal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto relative">

                        <div className='flex justify-between items-center mb-6'>
                            <p className="text-2xl font-bold text-center">Create New Task</p>

                            <button
                                onClick={closeaddmodal}
                            >
                                <img
                                    className='w-10 rounded-md hover:bg-gray-200 p-2'
                                    src="https://img.icons8.com/?size=100&id=46&format=png&color=000000" alt="" />
                            </button>
                        </div>

                        <div className="flex items-center justify-around">
                            <div className="">
                                <form onSubmit={taskaddsubmit}>
                                    <div className='flex justify-between space-x-4'>
                                        {/* title  */}
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                                            <input
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 transition duration-200"
                                                id="title"
                                                name='title'
                                                onChange={taskaddchange}
                                                type="text"
                                                placeholder="Enter task title"
                                            />
                                        </div>
                                        {/* status  */}
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                                                Status
                                            </label>
                                            <select
                                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 transition duration-200'
                                                id="status"
                                                name="status"
                                                onChange={taskaddchange}
                                            >
                                                <option className='bg-teal-500 text-white' value="pending">Pending</option>
                                                <option className="bg-teal-500 text-white" value="completed">Completed</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* description  */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                            Description
                                        </label>
                                        <textarea
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 h-28 w-full p-2.5 transition duration-200'
                                            id="description"
                                            name="description"
                                            onChange={taskaddchange}
                                            placeholder="Enter task description"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button
                                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                                            type="submit"
                                        >
                                            Add Task
                                        </button>
                                        <button
                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
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

            {/* edit modal  */}
            {editmodal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto relative">

                        <div className='flex justify-between items-center mb-6'>
                            <p className="text-2xl font-bold text-center">Edit Task</p>

                            <button
                                onClick={closeEditModal}
                            >
                                <img
                                    className='w-10 rounded-md hover:bg-gray-200 p-2'
                                    src="https://img.icons8.com/?size=100&id=46&format=png&color=000000" alt="" />
                            </button>
                        </div>

                        <div className="flex items-center justify-around">
                            <div className="">
                                <form onSubmit={taskeditsubmit}>
                                    <div className='flex justify-between space-x-4'>
                                        {/* title  */}
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                                            <input
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 transition duration-200"
                                                id="title"
                                                name='title'
                                                value={edituser.title}
                                                onChange={taskeditchange}
                                                type="text"
                                                placeholder="Enter task title"
                                            />
                                        </div>
                                        {/* status  */}
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                                                Status
                                            </label>
                                            <select
                                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 transition duration-200'
                                                id="status"
                                                name="status"
                                                value={edituser.status}
                                                onChange={taskeditchange}
                                            >
                                                <option className='bg-teal-500 text-white' value="pending">Pending</option>
                                                <option className="bg-teal-500 text-white" value="completed">Completed</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* description  */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                            Description
                                        </label>
                                        <textarea
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 h-28 w-full p-2.5 transition duration-200'
                                            id="description"
                                            name="description"
                                            value={edituser.description}
                                            onChange={taskeditchange}
                                            placeholder="Enter task description"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button
                                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                                            type="submit"
                                        >
                                            Add Task
                                        </button>
                                        <button
                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
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