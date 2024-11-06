import React, { useState } from 'react'

export const CounterTest = () => {
    const [count, setCount] = useState(0)

    const inc = () => {
        setCount(count + 1)
    }
    const dec = () => {
        setCount(count > 0 ? count - 1 : count)
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={inc}>upppppppp</button>
            <button onClick={dec}>downnnnnnn</button>
        </div>
    )
}
