import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToPortfolio, removeFromPortfolio } from './Slice';
import axios from 'axios';
import MainIcon from '../References/AppIcon.svg';
import MainName from '../References/AppName.svg';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const portfolio = useSelector((state) => state.portfolio.portfolio);
    const dispatch = useDispatch();
    const [search, setsearch] = useState('');
    const [coins, setCoins] = useState([]); // For dynamically fetching coin data
    const [loading, setLoading] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Fetch coins data dynamically
    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await axios.get('http://localhost:6969/coins');
                setCoins(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Error fetching coins:", error);
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    const handleAddCoin = (coin) => {
        dispatch(addToPortfolio(coin));
    };

    const handleRemoveCoin = (coinId) => {
        dispatch(removeFromPortfolio({ id: coinId }));
    };

    return (
        <div>
            {/* Navbar */}
            <div className="nav sticky top-0 z-10 flex justify-between items-center bg-white px-6 py-4 shadow-md">
                <div className="navhead flex items-center">
                    <Link to="/">
                        <img className="w-14" src={MainIcon} alt="Main Icon" title="Cryptify" />
                    </Link>
                </div>
                <div className="navname flex items-center">
                    <div>
                        <img className="w-40" src={MainName} alt="Main Icon" title="Crptify" />
                    </div>
                </div>


                {/* Action Buttons */}
                <div className="flex space-x-4 items-center">

                    {/* MY Account dropdown button*/}
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="text-black bg-white hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center transition ease-in-out duration-200"
                        type="button" >

                        <img
                            className="flex justify-center items-center w-6 h-6 mr-2"
                            src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000"
                            alt="Account"
                        />

                    </button>


                    {/* <!-- Dropdown menu --> */}
                    {isDropdownOpen && (
                        <div className="absolute top-full right-4 w-40 bg-white shadow-lg rounded-lg">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-center">
                                <li>
                                    <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</  Link>
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




            {/* Portfolio Section */}
            <div className="container mx-auto px-6 py-10">
                <h1 className="text-2xl font-bold mb-4">Your Portfolio</h1>

                <ul>
                    {portfolio.length === 0 ? (
                        <p className='text-center'>Your portfolio is empty.</p>
                    ) : (
                        portfolio.map((coin) => (
                            <div key={coin.id} className="coin-card flex items-center justify-between bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                                <div className="flex items-center space-x-4">
                                    {/* Coin Icon */}
                                    <img src={coin.image} alt={coin.name} className="w-10 h-10 rounded-full" />
                                    <div className="flex flex-col">
                                        <h2 className="text-xl font-semibold">{coin.name}</h2>
                                        <p className="text-gray-500">Price: ${coin.current_price.toLocaleString()}</p>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                                        onClick={() => handleRemoveCoin(coin.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
};

export default DashBoard;
