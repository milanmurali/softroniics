import React from 'react';


const TaskList = () => {
    const tasks = [
        'Buy groceries',
        'Walk the dog',
        'Complete React project',
        'Read a book',
    ];

    return (
        <div className='Tasks'>
            <h2>To-Do List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
