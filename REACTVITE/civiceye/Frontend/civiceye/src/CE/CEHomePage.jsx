import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS
import celogofullpng from '../assets/celogofull.png'
import porsche from '../assets/porsche.jpg'
import vio1 from '../assets/vio1.jpg'


export const CEHomePage = () => {

    AOS.init();


    return (
        <div>
            {/* the nav  */}
            <nav className='flex justify-between items-center p-4 bg-white shadow-md'>
                {/* Logo */}
                <div className='navheadflex'>
                    <Link to="/home">
                        <img
                            src={celogofullpng}
                            width="160"
                            height="40"
                            title="Flipkart"
                        />
                    </Link>
                </div>

                {/* Action Buttons */}
                <div className="space-x-6 ">
                    <Link to="#" className="text-gray-700 hover:text-blue-500">Home</Link>
                    <Link to="#" className="text-gray-700 hover:text-blue-500">My Complaints</Link>
                    <Link to="#" className="text-gray-700 hover:text-blue-500">About</Link>
                    <Link to="#" className="text-gray-700 hover:text-blue-500">Contact</Link>
                    <Link to="/login" className="bg-[#00B9FF] text-white px-4 py-2 rounded">Login</Link>
                </div>
            </nav>

            {/* carousel  */}
            <Carousel
                className='h-[50vh] '
                autoPlay={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                swipable={true}
                stopOnHover={true}
                interval={2000}>
                <div>
                    <img src={porsche} className='object-contain h-[50vh]' />
                </div>
                <div>
                    <img src={porsche} className='object-contain h-[50vh]' />
                </div>
                <div>
                    <img src={porsche} className='object-contain h-[50vh]' />
                </div>

            </Carousel>

            {/* Hero Section */}
            <div className="relative h-[70vh] bg-black text-white flex flex-col items-center justify-center text-center px-6 md:px-12">
                {/* Hero Content */}
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                        Make Your Voice Heard!
                    </h1>
                    <p className="text-lg md:text-xl mt-4 opacity-90">
                        Report Problems, Help Your City, and Earn Rewards!
                    </p>

                    {/* Call-to-Action Button */}
                    <button className="mt-6 bg-[#00B9FF] px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">
                        Sign Up Now!
                    </button>
                </div>
            </div>



            {/* Complaint Reports Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Section Heading */}
                    <h2
                        className="text-3xl font-extrabold text-gray-800 mb-6"
                        data-aos="fade-down"
                        data-aos-duration="800"
                    >
                        Complaint Reports
                    </h2>
                    <p
                        className="text-gray-600 mb-10"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        A quick overview of complaints registered, reports filed, and rewards distributed.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div
                            className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <h3 className="text-lg font-semibold text-gray-700">Complaints Registered</h3>
                            <p className="text-3xl font-bold text-blue-600">1,002</p>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <h3 className="text-lg font-semibold text-gray-700">Reports Filed</h3>
                            <p className="text-3xl font-bold text-green-600">992</p>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg border-t-4 border-yellow-500 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                            data-aos="fade-up"
                            data-aos-duration="1400"
                        >
                            <h3 className="text-lg font-semibold text-gray-700">Rewards Distributed</h3>
                            <p className="text-3xl font-bold text-yellow-600">886</p>
                        </div>

                        <div
                            className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-500 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                            data-aos="fade-up"
                            data-aos-duration="1600"
                        >
                            <h3 className="text-lg font-semibold text-gray-700">Impact Made</h3>
                            <p className="text-3xl font-bold text-red-600">...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <div className="text-center py-16 bg-gray-50">
                <div
                    className="text-3xl font-extrabold text-gray-800 mb-6"
                    data-aos="fade-down"
                    data-aos-duration="800"
                >
                    What We Do
                </div>

                <p
                    className="text-gray-600 mb-10 max-w-2xl mx-auto px-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Our process ensures transparency and efficiency in addressing issues. Here’s how we work to make your city a better place.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
                    <div
                        className="border-2 border-blue-500 p-6 rounded-lg bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        data-aos="flip-left"
                        data-aos-duration="1000"
                    >
                        <div className="text-lg font-medium text-gray-700">You Register for Complaints</div>
                    </div>

                    <div
                        className="border-2 border-blue-500 p-6 rounded-lg bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        data-aos="flip-right"
                        data-aos-duration="1200"
                    >
                        <div className="text-lg font-medium text-gray-700">Our Team Validates Your Complaint</div>
                    </div>

                    <div
                        className="border-2 border-blue-500 p-6 rounded-lg bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        data-aos="flip-left"
                        data-aos-duration="1400"
                    >
                        <div className="text-lg font-medium text-gray-700">The Responsible Authority Acts</div>
                    </div>

                    <div
                        className="border-2 border-blue-500 p-6 rounded-lg bg-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        data-aos="flip-right"
                        data-aos-duration="1600"
                    >
                        <div className="text-lg font-medium text-gray-700">Then Here’s a Reward for You</div>
                    </div>
                </div>
            </div>



            {/* Testimonial */}
            <section className="py-16 text-center bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>

                {/* Testimonial Carousel */}
                <div className="max-w-xl mx-auto">
                    <Carousel
                        autoPlay
                        interval={3000}
                        infiniteLoop
                        showArrows={false}
                        showThumbs={true}
                        showStatus={false}
                        swipeable={true}
                        stopOnHover={true}
                    >
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <p className="text-gray-600 italic">
                                "This platform has been a game changer for addressing public concerns!"
                            </p>
                            <p className="text-blue-600 font-semibold mt-2">- John Doe</p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <p className="text-gray-600 italic">
                                "Super easy to use and makes a real difference in the community."
                            </p>
                            <p className="text-blue-600 font-semibold mt-2">- Jane Smith</p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <p className="text-gray-600 italic">
                                "I love how responsive the system is. Reporting issues is a breeze!"
                            </p>
                            <p className="text-blue-600 font-semibold mt-2">- Alex Johnson</p>
                        </div>
                    </Carousel>
                </div>

                {/* Feedback Input */}
                <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Write your feedback"
                        className="border border-gray-300 p-2 rounded-lg w-1/2"
                    />
                    <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Submit
                    </button>
                </div>
            </section>

        </div>
    )
}
