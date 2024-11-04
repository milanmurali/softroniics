import React, { useState } from 'react';
import 'flowbite';

export const UserInputTodo = () => {
    const [todo, setTodo] = useState([
        { name: 'Buy groceries', dueDate: '2024-11-01', priority: 'Normal', description: 'Get essentials for the week', status: 'Pending' },
        { name: 'Complete project report', dueDate: '2024-11-03', priority: 'High', description: 'Finish the report by Monday', status: 'Pending' },
        { name: 'Book doctor appointment', dueDate: '2024-11-04', priority: 'Low', description: 'Routine check-up booking', status: 'Completed' }
    ]);

    const [newTask, setNewTask] = useState({ name: '', dueDate: '', priority: 'Normal', description: '', status: 'Pending' });
    const submit = (event) => {
        event.preventDefault();
        if (newTask.name) {
            setTodo([...todo, newTask]);
            setNewTask({ name: '', dueDate: '', priority: 'Normal', description: '', status: 'Pending' });
            // console.log("mew", newTask);
            // console.log("todo", todo);

        }
    };

    const change = (event) => {
        setNewTask({
            ...newTask, [event.target.name]: event.target.value
        })
    }

    const statuschangeoncreate = (event) => {
        setNewTask({
            ...newTask,
            status: event.target.checked ? 'Completed' : 'Pending'
        });
    };

    const statusChange = (index) => (event) => {
        const updatedTodo = todo.map((task, i) => {
            if (i === index) {
                return { ...task, status: event.target.checked ? 'Completed' : 'Pending' };
            }
            return task;
        });
        setTodo(updatedTodo);
    };

    const [editTaskIndex, setEditTaskIndex] = useState(null);
    const [editTaskData, setEditTaskData] = useState({ name: '', dueDate: '', priority: 'Normal', description: '', status: 'Pending' });

    const edittodo = (index) => (event) => {
        event.preventDefault(); // Prevent the default form submission if applicable

        // Find the task at the specified index
        const taskToEdit = todo[index];

        // Set the task data htmlFor editing
        setEditTaskData(taskToEdit); // Set the task to be edited
        setEditTaskIndex(index); // Keep track of the index being edited

        // console.log("et", taskToEdit); // Log the task data being edited
        // console.log("eti", index); // This may still log the old index due to state batching
        console.log("etdstate", editTaskData); // Log the task data being edited
    };


    return (
        <div className='h-screen px-8 py-6 bg-gray-300'>
            <div className='flex justify-between my-4'>
                <h1 className="text-2xl font-bold">Things to do</h1>
                <button data-modal-target="create-todo-modal" data-modal-toggle="create-todo-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Create New
                </button>
            </div>

            {/* todo table list */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <td >

                            </td>
                            <th scope="col" className="px-6 py-3"   >
                                Task Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Due Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Priority
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.map((task, index) => (
                            <tr key={task.index} className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="flex items-center">
                                        <input
                                            id="default-checkbox"
                                            type="checkbox"
                                            checked={task.status === 'Completed'}
                                            onChange={statusChange(index)}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                </td>
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {task.name}
                                </td>
                                <td className="px-6 py-4">
                                    {task.dueDate}
                                </td>
                                <td className="px-6 py-4">
                                    {task.priority}
                                </td>
                                <td className="px-6 py-4">
                                    {task.description}
                                </td>
                                <td>
                                    {task.status}
                                </td>
                                <td className=" flex px-6 py-4 gap-2">
                                    {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                    <button onClick={edittodo(index)} data-modal-target="edit-todo-modal" data-modal-toggle="edit-todo-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                        Edit
                                    </button>
                                    <button onClick={edittodo(index)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                        Delete
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* todo table list end*/}

            {/* MODAL TODO CREATE */}
            <div>


                {/* <!-- Main modal --> */}
                <div id="create-todo-modal" tabIndex="-1" aria-hidden="{true}" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Create New Task
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="create-todo-modal">
                                    <svg className="w-3 h-3" aria-hidden="{true}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <form className="p-4 md:p-5" onSubmit={submit}>
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
                                        <input value={newTask.name} onChange={change} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Task name" required="{true}" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
                                        <input value={newTask.dueDate} onChange={change} type="date" name="dueDate" id="dueDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Priority</label>
                                        <select id="priority" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option defaultValue="">Select category</option>
                                            <option value="Low">Low</option>
                                            <option value="Normal">Normal</option>
                                            <option value="High">High</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                                        <textarea value={newTask.description} onChange={change} name='description' id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Task description here"></textarea>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center mb-5 cursor-pointer">
                                            <input
                                                onChange={statuschangeoncreate}
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Mark as Completed</span>
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                    Add new task
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL TODO CREATE END */}

            {/* MODAL TODO EDIT */}
            <div>
                {/* <!-- Modal toggle --> */}
                {/* in the table  */}

                {/* <!-- Main modal --> */}
                <div id="edit-todo-modal" tabIndex="-1" aria-hidden="{true}" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Edit Todo
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="edit-todo-modal">
                                    <svg className="w-3 h-3" aria-hidden="{true}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <form className="p-4 md:p-5" onSubmit={submit}>

                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
                                        <input value={editTaskData.name} onChange={change} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Task name" required="{true}" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
                                        <input value={editTaskData.dueDate} onChange={change} type="date" name="dueDate" id="dueDate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Priority</label>
                                        <select id="priority" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option defaultValue="{editTaskData.priority}">{editTaskData.priority}</option>
                                            <option value="Low">Low</option>
                                            <option value="Normal">Normal</option>
                                            <option value="High">High</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                                        <textarea value={editTaskData.description} onChange={change} name='description' id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Task description here"></textarea>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center mb-5 cursor-pointer">
                                            <input
                                                onChange={statuschangeoncreate}
                                                type="checkbox"
                                                value=""
                                                className="sr-only peer" />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-3 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Mark as Completed</span>
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Save Changes
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL TODO EDIT END */}

        </div>
    );
};
