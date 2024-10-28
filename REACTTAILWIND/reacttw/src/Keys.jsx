import React, { useState } from 'react'

export const Keys = () => {
    const ProductDetails = [
        { id: 1, name: "Acer Nitro V15", qty: 1 },
        { id: 2, name: "Product2", qty: 2 },
        
    ]
    const [data, Setdata] = useState(ProductDetails)

    const increase = (id) => {
        const newcount = data.map((item)=> item.id == id ? {...item,qty:item.qty+1}:item)
        Setdata(newcount)
    }
    const decrease = (id) => {
        const newcount = data.map((item)=> item.id == id && item.qty > 1 ? {...item,qty:item.qty-1}:item)
        Setdata(newcount)
    }
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <div>Name : {item.name}</div>
                    <div>Quantity : {item.qty}</div>
                    <button className='bg-purple-600' onClick={() => increase(item.id)}>UPPPP</button>
                    <br></br>
                    <button className='bg-purple-600' onClick={() => decrease(item.id)}>DOWN</button>
                </div>

            ))}
        </div>
    )
}
