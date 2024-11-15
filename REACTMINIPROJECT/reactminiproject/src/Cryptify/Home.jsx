import React, { useEffect, useState } from 'react'
import 'flowbite';
import axios from 'axios';
import { Link } from 'react-router-dom'
import MainIcon from '../References/AppIcon.svg'
export const Home = () => {
    // State to store the crypto data
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch data from the CoinGecko API
    useEffect(() => {
        // URL for CoinGecko API to get cryptocurrency data
        const fetchData = async () => {
            try {
                // Fetch data from the API
                const response = await axios.get('http://localhost:6969/coins');  // Update URL to local JSON server
                setCryptoData(response.data);
                setLoading(false); // Stop the loading spinner once the data is fetched
            } catch (err) {
                setError('Error fetching data from Server');
                setLoading(false); // Stop loading even in case of an error
            }
        };

        fetchData();
    }, []); // Empty dependency array means this will run once when the component mounts

    return (
        <div>
            {/* navbar */}
            <div className='nav sticky top-0 z-10 flex justify-between bg-white pr-8 py-6'>
                {/* Logo */}
                <div className='navhead flex ms-20'>
                    <Link to="/">
                        <img
                            className='w-20'
                            src={MainIcon}
                            alt='Main Icon'
                            title="Crptify"
                        />
                    </Link>
                </div>
                {/* Search */}
                <div className="flex items-center bg-[#f0f5ff] rounded-lg">
                    <button className="p-2" type="submit" title="Search here">
                        <img
                            src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=717478"
                            alt="Login"
                            className="w-6 h-6"
                        />
                    </button>
                    <input
                        className="bg-[#f0f5ff] w-[500px] h-[30px] border-none focus:outline-none focus:ring-0 me-2"
                        type="text"
                        title="Search here"
                        autoComplete="off"
                        placeholder="Search..." />
                </div>
                {/* Action Buttons */}
                <div className="flex space-x-4 items-center">
                    {/* MY Account dropdown button*/}
                    <button
                        id="dropdownHoverButton"
                        data-dropdown-toggle="dropdownHover"
                        data-dropdown-trigger="hover"
                        className="text-black bg-white hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition ease-in-out duration-200"
                        type="button" >
                        <img
                            src="https://img.icons8.com/?size=100&id=zxB19VPoVLjK&format=png&color=000000"
                            alt="Account"
                            className="w-6 h-6 mr-2"
                        />
                        <span className='font-normal'>My Account</span>
                        <svg
                            className="w-2.5 h-2.5 ml-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-center" aria-labelledby="dropdownHoverButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Favourites</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>



                </div>
            </div>

            {/* main */}
            <div>
                {/* Navbar and other elements */}

                <div className="crypto-prices">
                    {loading ? (
                        <p className='text-center'>Loading Data...</p>
                    ) : error ? (
                        <p className='text-center'>{error}</p>
                    ) : (
                        <div className=" px-4 grid grid-cols-4 gap-4">
                            {cryptoData.map((coin) => (
                                <div key={coin.id} className="coin-card flex justify-between bg-white p-4 rounded-lg shadow-md">
                                    <div>
                                        <h2 className="text-xl font-bold">{coin.name}</h2>
                                        <p>Price: ${coin.current_price}</p>
                                        <p>24h Change: {coin.price_change_percentage_24h}%</p>
                                    </div>
                                    <div>
                                        <img
                                            src={coin.image}
                                            className="w-20 h-20"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
