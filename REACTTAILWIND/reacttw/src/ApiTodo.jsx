import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const ApiTodo = () => {
    const [Todos, SetTodos] = useState([])
    const [completedTodos, setCompletedTodos] = useState([]);
    const [incompletedTodos, setIncompleteTodos] = useState([]);

    const fetchapidata = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            SetTodos(response.data)
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchapidata()
    }, [])

    useEffect(() => {
        const completed = Todos.filter(todo => todo.completed);
        const incomplete = Todos.filter(todo => !todo.completed);
        setCompletedTodos(completed);
        setIncompleteTodos(incomplete);
    }, [Todos])

    return (
        <div className='bg-gray-300 p-8'>
            <div className='flex justify-center'>
                <h1 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Todo List</h1>
                <div className='text-center mx-4'>
                    <button onClick={fetchapidata} className='bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 duration-300'>Refresh</button>
                </div>
            </div>
            <div className='flex justify-evenly flex-wrap'>

                <div className='w-full max-w-md'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Incompleted</h1>
                    <ul>
                        {incompletedTodos.map((todo, index) => (
                            <li className='bg-white p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300' key={todo.id}>
                                {index + 1}. {todo.title}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='w-full max-w-md'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-8 text-center'>Completed</h1>
                    <ul>
                        {completedTodos.map((todo, index) => (
                            <li className='bg-white p-6 mb-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300' key={todo.id}>
                                {index + 1}. {todo.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
