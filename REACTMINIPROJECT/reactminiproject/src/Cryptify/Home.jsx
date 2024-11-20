import React, { useEffect, useState } from 'react'
import 'flowbite';
import axios from 'axios';
import { Link } from 'react-router-dom'
import MainIcon from '../References/AppIconFull.svg'
export const Home = () => {

    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setsearch] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the API
                const response = await axios.get('http://localhost:6969/coins');
                setCryptoData(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching data from Server');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* navbar */}
            <div className='nav sticky top-0 z-10 flex flex-wrap justify-between items-center bg-white px-6 py-4 shadow-md'>
                {/* Logo */}
                <div className='navhead flex items-center w-full sm:w-auto mb-4 sm:mb-0 justify-center'>
                    <Link to="/">
                        <img
                            className='w-16 sm:w-20'
                            src={MainIcon}
                            alt='Main Icon'
                            title="Cryptify"
                        />
                    </Link>
                </div>

                {/* Search */}
                <div className="flex flex-col sm:flex-row items-center bg-[#f0f5ff] rounded-lg w-full sm:w-auto mb-4 sm:mb-0">
                    <div className="flex items-center w-full sm:w-auto">
                        <button className="p-2" type="submit" title="Search here">
                            <img
                                src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=717478"
                                alt="Login"
                                className="w-6 h-6 object-contain"
                            />
                        </button>
                        <input
                            className="bg-[#f0f5ff] w-full sm:w-[300px] lg:w-[500px] h-[30px] border-none focus:outline-none focus:ring-0 me-2"
                            type="text"
                            value={search}
                            onChange={(e) => setsearch(e.target.value)}
                            title="Search here"
                            autoComplete="off"
                            placeholder="Search..." />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="relative flex items-center justify-center w-full sm:w-auto">
                    {/* My Account dropdown button */}
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="text-black bg-white hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:outline-none rounded-lg px-4 py-2 text-center flex justify-center items-center transition ease-in-out duration-200"
                        type="button"
                    >
                        <img
                            className="flex justify-center items-center w-6 h-6"
                            src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000"
                            alt="Account"
                        />
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                        <div className="absolute top-full mt-2 right-0 w-40 bg-white shadow-lg rounded-lg">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-center">
                                <li>
                                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>


            {/* main */}
            <div className='p-6'>

                <div className='text-2xl font-bold'>Crypto Market</div>
                <div className="crypto-prices my-5">
                    {loading ? (
                        <p className='text-center'>Loading Data...</p>
                    ) : error ? (
                        <p className='text-center'>{error}</p>
                    ) : (
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {cryptoData.map((coin) => (
                                coin.name.toLowerCase().includes(search.toLowerCase()) && (
                                    <Link to={`/coins/${coin.id}`} key={coin.id} className="coin-card flex justify-between bg-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-105 active:scale-95">
                                        <div className='flex flex-col justify-center'>
                                            <h2 className="text-xl font-bold">{coin.name}</h2>
                                            <p className='text-gray-500'>Current Price: ${coin.current_price}</p>
                                            {/* <p>24h Change: {coin.price_change_percentage_24h}%</p> */}
                                        </div>
                                        <div>
                                            <img
                                                src={coin.image}
                                                className="w-20 h-20"
                                            />
                                        </div>
                                    </Link>
                                )))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
