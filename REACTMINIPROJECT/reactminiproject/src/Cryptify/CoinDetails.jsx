import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import MainIcon from '../References/AppIcon.svg';
import MainName from '../References/AppName.svg';
import { useDispatch } from 'react-redux';
import { addToPortfolio } from './Slice';

const CoinDetails = () => {
    const { id } = useParams();
    const [coinData, setCoinData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const response = await axios.get(`http://localhost:6969/coins/${id}`);
                setCoinData(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching coin details');
                setLoading(false);
            }
        };

        fetchCoinData();
    }, [id]);

    const handleAddToPortfolio = () => {
        if (coinData) {
            dispatch(addToPortfolio(coinData));  // Dispatching the coin data to the Redux store
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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

            {/* Main Content */}
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Coin Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={coinData.image}
                            alt={coinData.name}
                            className="w-40 h-40 lg:w-64 lg:h-64"
                        />

                    </div>

                    {/* Coin Details */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold text-gray-800">{coinData.name} ({coinData.symbol.toUpperCase()})</h1>

                        <p className="text-2xl font-semibold text-gray-700">
                            ${coinData.current_price.toLocaleString()}
                        </p>
                        <p className="text-gray-600">
                            Market Cap Rank: <span className="font-medium">{coinData.market_cap_rank}</span>
                        </p>
                        <div className="flex space-x-4">
                            <div className={`px-3 py-1 rounded-full text-white ${coinData.price_change_percentage_24h > 0 ? 'bg-green-500' : 'bg-red-500'}`}>
                                24h Change: {coinData.price_change_percentage_24h.toFixed(2)}%
                            </div>
                            <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                                ATH: ${coinData.ath.toLocaleString()}
                            </div>
                            <div className="px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                                ATL: ${coinData.atl.toLocaleString()}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div>
                                <p className="text-gray-600">Market Cap</p>
                                <p className="text-lg font-medium">${coinData.market_cap.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-gray-600">24h Volume</p>
                                <p className="text-lg font-medium">${coinData.total_volume.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Circulating Supply</p>
                                <p className="text-lg font-medium">{coinData.circulating_supply.toLocaleString()} {coinData.symbol.toUpperCase()}</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Max Supply</p>
                                <p className="text-lg font-medium">{coinData.max_supply ? coinData.max_supply.toLocaleString() : 'N/A'}</p>
                            </div>
                        </div>

                        <p className="text-gray-600 mt-6 text-sm">
                            Last Updated: {new Date(coinData.last_updated).toLocaleString()}
                        </p>
                        <button
                            onClick={handleAddToPortfolio}
                            className="px-6 py-2 bg-blue-500 text-white rounded-full"
                        >
                            Add to Portfolio
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;
