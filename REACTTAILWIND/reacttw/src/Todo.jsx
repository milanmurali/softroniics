import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Todo = () => {
    // API Calling
    const [ApiTodos, SetApiTodos] = useState([])
    const fetchapidata = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            SetApiTodos(response.data)
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchapidata()
    }, [])

    // Api Copy
    const copy = ApiTodos.slice(0, 20)
    const [Todos, SetTodos] = useState([])
    useEffect(() => {
        SetTodos(copy);
    }, [ApiTodos]);
    // console.log(Todos);

    //filtercopy
    const completed = Todos.filter(todo => todo.completed);
    const incomplete = Todos.filter(todo => !todo.completed);

    //toggles
    const markcomp = (id) => {
        const newstate = Todos.map((item) => item.id == id ? { ...item, completed: true } : item)
        SetTodos(newstate)
    }
    const markincomp = (id) => {
        const newstate = Todos.map((item) => item.id == id ? { ...item, completed: false } : item)
        SetTodos(newstate)
    }
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="flex justify-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">Todo List</h1>
            </div>
            <div className="flex justify-center space-x-8">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Incompleted</h2>
                    {incomplete.map((todo, index) => (
                        <div className="flex justify-between items-center p-4 mb-4 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300" key={todo.id}>
                            <span className="text-gray-700a flex-1">{index + 1}. {todo.title}</span>
                            <button
                                onClick={() => markcomp(todo.id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200 whitespace-nowrap"
                            >
                                Mark as Completed
                            </button>
                        </div>
                    ))}
                </div>

                <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Completed</h2>
                    {completed.map((todo, index) => (
                        <div className="flex justify-between items-center p-4 mb-4 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300" key={todo.id}>
                            <span className="text-gray-700 flex-1">{index + 1}. {todo.title}</span>
                            <button
                                onClick={() => markincomp(todo.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition duration-200 whitespace-nowrap"
                            >
                                Mark as Incomplete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
