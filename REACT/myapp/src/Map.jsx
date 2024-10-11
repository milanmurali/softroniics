import React from 'react'

export const Map = () => {
    const peeps = [
        { id: 1, name: 'Peru', age: 69 },
        { id: 2, name: 'Jithu', age: 96 },
    ]
    console.log(peeps);

    return (

        <div>
            {peeps.map((person) => {
                    <div>
                        <h2>{person.id}</h2>
                        <h1>{person.name}</h1>
                    </div>
                })}
        </div>
    )
}
