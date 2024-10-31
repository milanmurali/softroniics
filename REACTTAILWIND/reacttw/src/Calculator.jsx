import React, { useState } from 'react'

export const Calculator = () => {
    const [Input, SetInput] = useState('')
    const [Result, SetResult] = useState('')
    console.log("inp", Input);
    console.log("res", Result);


    const append = (bleh) => {
        SetInput(Input + bleh)
    }
    const evaluate = () => {
        try {
            SetResult(eval(Input))
        }

        catch (error) {
            SetResult('Syntax Error')
            console.log(error.message);
        }
    }
    const reset = () => {
        SetInput('')
        SetResult('')
    }
    return (
        <div className="robotofont bg-gray-50 min-h-screen flex flex-col items-center justify-center p-8">
            <div className="main bg-black rounded-lg shadow-md p-8">
                <div className='disp text-right bg-gray-500 pt-6 pb-4 px-2 rounded-md transition-transform duration-300 ease-in-out'>
                    {/* Input */}
                    {Input === '' ? (
                        <p className={`text-white text-5xl ${Result ? "-translate-y-4 opacity-60" : ""} transition-transform duration-300 ease-in-out`}>
                            0
                        </p>
                    ) : (
                        <p className={`text-white text-5xl ${Result ? "-translate-y-4 opacity-60" : ""} transition-transform duration-300 ease-in-out`}>
                            {Input}
                        </p>
                    )}

                    {/* Result */}
                    <p className={`text-white text-5xl ${Result ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-in-out`}>
                        {Result}
                    </p>
                </div>
                <div className="keys">
                    <div className="r1 grid grid-cols-4 gap-3 my-2">
                        <button onClick={reset} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">AC</button>
                        <button onClick={reset} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">+/-</button>
                        <button onClick={() => { append('%') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">%</button>
                        <button onClick={() => { append('/') }} className="text-xl rounded-full p-5 bg-orange-500 hover:bg-orange-700 text-white font-bold">÷</button>
                    </div>
                    <div className="r2 grid grid-cols-4 gap-3 my-2">
                        <button onClick={() => { append('7') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">7</button>
                        <button onClick={() => { append('8') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">8</button>
                        <button onClick={() => { append('9') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">9</button>
                        <button onClick={() => { append('*') }} className="text-xl rounded-full p-5 bg-orange-500 hover:bg-orange-700 text-white font-bold">X</button>
                    </div>
                    <div className="r3 grid grid-cols-4 gap-3 my-2">
                        <button onClick={() => { append('4') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">4</button>
                        <button onClick={() => { append('5') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">5</button>
                        <button onClick={() => { append('6') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">6</button>
                        <button onClick={() => { append('-') }} className="rounded-full p-5 bg-orange-500 hover:bg-orange-700 text-white font-bold">-</button>
                    </div>
                    <div className="r4 grid grid-cols-4 gap-3 my-2">
                        <button onClick={() => { append('1') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">1</button>
                        <button onClick={() => { append('2') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">2</button>
                        <button onClick={() => { append('3') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">3</button>
                        <button onClick={() => { append('+') }} className="text-xl rounded-full p-5 bg-orange-500 hover:bg-orange-700 text-white font-bold">+</button>
                    </div>
                    <div className="r5 grid grid-cols-4 gap-3 my-2">
                        <button onClick={() => { append('00') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">00</button>
                        <button onClick={() => { append('0') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">0</button>
                        <button onClick={() => { append('.') }} className="text-xl rounded-full p-5 bg-gray-500 hover:bg-gray-700 text-white font-bold">.</button>
                        <button onClick={evaluate} className="text-xl rounded-full p-5 bg-orange-500 hover:bg-orange-700 text-white font-bold">=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
