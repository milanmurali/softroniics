import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const MovieList = () => {

    const [query, setquery] = useState('')
    const [searchdata, Setsearch] = useState([])

    const fetchapidata = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=a5ef1268`)
            Setsearch(response.data.Search)
            console.log("Response " + response.data.Search)

        }
        catch (error) {
            console.error(error);

        };
    }
    const change = (event) => {
        setquery(event.target.value)
    }
    return (
        <div className="p-8 h-screen">
            {/* Searchbox */}
            <div className='bg-gray-300 p-8 rounded-lg shadow-lg max-w-lg mx-auto'>
                <h1 className='text-2xl font-bold mb-4 text-center'>Search Movie Database</h1>

                <div className='flex flex-col gap-4'>
                    <input
                        className='border border-gray-400 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent duration-300 w-full'
                        type="text"
                        placeholder='Search Movie'
                        onChange={change}
                    />
                    <button className='bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 duration-300' onClick={fetchapidata}>
                        Search
                    </button>
                </div>
            </div>
            <h1 className='text-2xl font-bold my-8 text-center'>Search Results</h1>
            {/* Search Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {searchdata && searchdata.map((result) => (
                    <Link key={result.imdbID} to={`/movie/${result.imdbID}`} >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                            <img src={result.Poster} alt={result.Title} className="w-full h-auto" />
                            <div className="p-4 flex flex-col items-center">
                                <h2 className="text-lg font-bold text-gray-800">{result.Title}</h2>
                                <p className='mt-4 hover:underline'>Click to View More Info</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
