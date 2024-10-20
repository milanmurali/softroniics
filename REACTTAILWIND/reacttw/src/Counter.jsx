import React, { useState } from 'react'

export const Counter = () => {

    const [count, setcount] = useState(0)
    
    let increment = () => {
        setcount(count + 1)
    }
    let decrement = () => {
        if (!count == 0) {
            setcount(count - 1)
        }
    }

    const [data, setdata] = useState([])
    let add = () => {
        setdata(
            [{ name: "HI" },
            { name: "HELLO" }]
        )
    }
    console.log(data);

    return (
        <div className='flex flex-col justify-center items-center h-screen bg-cyan-700'>
            <div className='counter flex flex-col justify-center items-center p-6 bg-white rounded'>
                <h1 className='text-3xl font-bold'>Counter</h1>
                <h1 className='text-lg'>{count}</h1>
                <div className="">
                    <button className='bg-cyan-700 text-white font-bold p-2 rounded mx-2' onClick={increment} >Increment</button>
                    <button className='bg-cyan-700 text-white font-bold p-2 rounded mx-2' onClick={decrement} >Decrement</button>
                </div>
            </div>

            <div className="my-10 flex flex-col justify-center items-center p-6 bg-white rounded">
                <div>
                    {data.map((a) => (<p>{a.name}</p>))}
                </div>
                <button className='bg-cyan-700 text-white font-bold p-2 rounded mx-2' onClick={add}>Show</button>
            </div>
        </div>
    )
}
