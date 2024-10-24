import axios from 'axios'
import React, { useState } from 'react'

export const Weather = () => {
    const [Search, SetSearch] = useState('')
    const [Weather, SetWeather] = useState([])

    const fetchapidata = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=0cf3d05c6cb443424f42856d18e090b3`)
            SetWeather(response.data)
            console.log(Weather)

        }
        catch (error) {
            console.error(error);

        };
    }

    const change = (event) => {
        SetSearch(event.target.value)
    }

    return (
        <div className="p-8 min-h-screen bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-400">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Weather Forecast</h1>

                <div className="flex flex-col gap-4 mb-6">
                    <input
                        className="border border-gray-400 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent duration-300 w-full"
                        type="text"
                        placeholder="Enter city name..."
                        onChange={change}
                    />
                    <button
                        className="bg-purple-500 text-white px-4 py-3 rounded-lg shadow-md hover:bg-purple-600 focus:outline-none duration-300"
                        onClick={fetchapidata}
                    >
                        Get Weather
                    </button>
                </div>

                {Weather && Weather.main && Weather.weather && (
                    <div className="mt-6 p-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-lg shadow-lg text-white">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-bold">{Weather.name}</h2>
                                <p className="text-lg mt-2">{Weather.weather[0].description}</p>
                                <p className="text-4xl font-semibold mt-2">{Weather.main.temp}°C</p>
                            </div>
                            <div>
                                <img
                                    className="w-20 h-20"
                                    src={`https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`}
                                    alt="Weather Icon"
                                />
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                            <div className="flex flex-col items-start">
                                <span className="font-semibold">Feels Like</span>
                                <span>{Weather.main.feels_like}°C</span>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="font-semibold">Humidity</span>
                                <span>{Weather.main.humidity}%</span>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="font-semibold">Wind Speed</span>
                                <span>{Weather.wind.speed} m/s</span>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="font-semibold">Pressure</span>
                                <span>{Weather.main.pressure} hPa</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}