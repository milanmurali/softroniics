import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'; // Import the Carousel Component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the Carousel CSS
import AOS from 'aos'; // Import the AOS Library
import 'aos/dist/aos.css'; // Import the AOS CSS
import celogofullpng from '../assets/celogofull.png' // Import the CivicEye Logo
import porsche from '../assets/porsche.jpg' // Import the Porsche Image
import { CEComplaintRegisterPopup } from './CEComplaintRegisterPopup';
import toast, { Toaster } from 'react-hot-toast';

export const CEUserHomePage = () => {

    AOS.init(); // Initialize AOS Library

    const [menuOpen, setMenuOpen] = useState(false);         // For mobile hamburger in navbar
    const [profileOpen, setProfileOpen] = useState(false);  // For desktop profile dropdown in navbar
    const [popupOpen, setPopupOpen] = useState(false);     // For complaint register popup



    return (
        <div>
            {/* Toast Notifications */}
            <Toaster />

            {/* Navbar */}
            <div className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 w-full z-50">
                {/* Logo on the Left */}
                <div>
                    <Link to="/">
                        <img
                            src={celogofullpng}
                            width="160"
                            height="40"
                            alt="CivicEye Logo"
                            title="CivicEye"
                        />
                    </Link>
                </div>

                {/* Desktop Menu: Nav Links + Profile Dropdown */}
                <div className="hidden md:flex items-center space-x-4 ">
                    {/* Nav Links */}
                    <div className="flex space-x-4">
                        <Link to="/" className="px-3 py-2 rounded text-gray-700 hover:bg-gray-200 transition">
                            Home
                        </Link>
                        <Link to="/mycomplaints" className="px-3 py-2 rounded text-gray-700 hover:bg-gray-200 transition">
                            My Complaints
                        </Link>
                        <Link to="/about" className="px-3 py-2 rounded text-gray-700 hover:bg-gray-200 transition">
                            About
                        </Link>
                        <Link to="/contact" className="px-3 py-2 rounded text-gray-700 hover:bg-gray-200 transition">
                            Contact
                        </Link>
                    </div>

                    {/* Profile Dropdown Button */}
                    <div className="relative rounded text-gray-700 hover:bg-gray-200 transition">
                        <button
                            onClick={() => setProfileOpen(!profileOpen)}
                            className="flex items-center space-x-2 p-2 focus:outline-none"
                        >
                            <img
                                src="https://img.icons8.com/?size=100&id=7819&format=png&color=00B9FF"
                                alt="Profile Icon"
                                className="w-8 h-8 "
                            />
                            <span className="text-gray-700 font-normal">Username</span>
                            <img
                                src="https://img.icons8.com/?size=100&id=fZGbT6FrWkSx&format=png&color=000000"
                                alt="Down Arrow"
                                className="w-4 h-4"
                            />
                        </button>

                        {profileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 py-2">
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => setProfileOpen(false)}
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="/delete-account"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => setProfileOpen(false)}
                                >
                                    Delete Account
                                </Link>
                                <Link
                                    to="/logout"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => setProfileOpen(false)}
                                >
                                    Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Section */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 focus:outline-none text-2xl">
                        {menuOpen ? "✖" : "☰"}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden">
                        <Link to="/" className="w-full text-center py-3 text-gray-700 hover:bg-gray-200" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                        <Link to="/mycomplaints" className="w-full text-center py-3 text-gray-700 hover:bg-gray-200" onClick={() => setMenuOpen(false)}>
                            My Complaints
                        </Link>
                        <Link to="/about" className="w-full text-center py-3 text-gray-700 hover:bg-gray-200" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                        <Link to="/contact" className="w-full text-center py-3 text-gray-700 hover:bg-gray-200" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                        <hr className="w-full border-gray-200" />
                        <Link to="/profile" className="w-full text-center py-3 text-gray-700 hover:bg-gray-200" onClick={() => setMenuOpen(false)}>
                            Profile
                        </Link>
                        <Link to="/delete-account" className="w-full text-center py-3 text-gray-700 hover:bg-gray-200" onClick={() => setMenuOpen(false)}>
                            Delete Account
                        </Link>
                        <Link to="/logout" className="w-full text-center py-3 text-gray-700 hover:bg-gray-200" onClick={() => setMenuOpen(false)}>
                            Logout
                        </Link>
                    </div>
                )}
            </div>


            {/* Carousel  */}
            <Carousel
                className='h-[50vh] '
                autoPlay={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                swipable={true}
                showIndicators={false}
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

            {/* Register Complaints Full Screen Popup */}
            {popupOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-gray-950/80">
                    <div className="relative flex items-center justify-center">
                        <button
                            onClick={() => setPopupOpen(false)}
                            className="absolute top-4 right-4 focus:outline-none transition transform hover:scale-105 active:scale-95"
                        >
                            <img
                                src="https://img.icons8.com/?size=100&id=82771&format=png&color=000000"
                                alt="Close"
                                className="w-6 h-6"
                            />
                        </button>
                        <CEComplaintRegisterPopup />
                    </div>
                </div>
            )}


            {/* Register Complaints Section */}
            <div className="p-16 mx-auto bg-gray-50 text-black">
                {/* Title */}
                <div className='mx-auto text-center'>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Register Complaints</h2>
                    <p className="text-gray-600 mb-6">Easily register your complaints and help us improve our community.</p>
                </div>

                {/* Register Complaints Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
                    {/* Button 1 */}
                    <button onClick={() => setPopupOpen(true)}
                        className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md">
                        <div className="text-4xl mb-2">🗑️</div>
                        <span className="text-gray-700 text-lg font-semibold">Waste Dumping</span>
                    </button>


                    {/* Button 2 */}
                    <button onClick={() => setPopupOpen(true)}
                        className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md">
                        <div className="text-4xl mb-2">⚠️</div>
                        <span className="text-gray-700 text-lg font-semibold">Public Nuisance</span>
                    </button>

                    {/* Button 3 */}
                    <button onClick={() => setPopupOpen(true)}
                        className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md">
                        <div className="text-4xl mb-2">🚦</div>
                        <span className="text-gray-700 text-lg font-semibold">Traffic Violations</span>
                    </button>

                    {/* Button 4 */}
                    <button onClick={() => setPopupOpen(true)}
                        className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md">
                        <div className="text-4xl mb-2">📄</div>
                        <span className="text-gray-700 text-lg font-semibold">Others</span>
                    </button>
                </div>

            </div>




            {/* Complaint Reports Section */}
            <div className="py-16 bg-gray-50">

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
                        className="text-gray-600 mb-10 px-6"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        A quick overview of complaints registered, reports filed, and rewards distributed.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
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
            </div>

            {/* What We Do Section */}
            <div className="text-center py-8 bg-gray-50">
                <div
                    className="text-3xl font-extrabold text-gray-800 mb-6"
                    data-aos="fade-down"
                    data-aos-duration="800"
                >
                    What We Do
                </div>

                <p
                    className="text-gray-600 mb-10 max-w-2xl mx-auto px-4 text-lg"
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
            <div className="py-16 text-center bg-gray-50 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>

                {/* Testimonial Carousel */}
                <Carousel
                    className="max-w-xl flex flex-col justify-center items-center py-2"
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop={true}
                    showIndicators={false}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    swipeable={true}
                    stopOnHover={true}
                >
                    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto my-2">
                        <p className="text-gray-700 text-lg leading-relaxed italic">
                            "This platform has been a game changer for addressing public concerns!"
                        </p>
                        <p className="text-blue-700 font-semibold text-base mt-3">- John Doe</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto my-2">
                        <p className="text-gray-700 text-lg leading-relaxed italic">
                            "This platform has been a game changer for addressing public concerns!"
                        </p>
                        <p className="text-blue-700 font-semibold text-base mt-3">- John Doe</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto my-2">
                        <p className="text-gray-700 text-lg leading-relaxed italic">
                            "This platform has been a game changer for addressing public concerns!"
                        </p>
                        <p className="text-blue-700 font-semibold text-base mt-3">- John Doe</p>
                    </div>
                </Carousel>

                {/* Feedback Input */}
                <div className="mt-1 flex">
                    <input
                        type="text"
                        placeholder="Write your feedback"
                        className="border border-gray-300 p-2 rounded-lg"
                    />
                    <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                        Submit
                    </button>
                </div>
            </div>

            {/* Support Section */}
            <div className="py-12 bg-gray-50 flex flex-col items-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Need Help? Contact Us</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full px-6">
                    {/* Support Mail */}
                    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-500 text-center">
                        <div className="flex flex-col items-center">
                            <img className="w-10 h-10"
                                src="https://img.icons8.com/?size=100&id=83161&format=png&color=2b7fff" alt="Email" />
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Support Mail</h3>
                            <p className="text-gray-600 mt-1">For any assistance,</p>
                            <p className="text-gray-600 mt-1">contact our support team.</p>
                            <p className="text-blue-600 font-medium mt-2">support@civiceye.com</p>
                        </div>
                    </div>

                    {/* Support Call */}
                    <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500 text-center">
                        <div className="flex flex-col items-center">
                            <img
                                className="w-10 h-10" src="https://img.icons8.com/?size=100&id=87292&format=png&color=00c951" alt="Email" />

                            <div>
                                <h3 className="text-xl font-semibold text-gray-700">Make A Call</h3>
                                <p className="text-gray-600 mt-1">Need help?</p>
                                <p className="text-gray-600 mt-1">Give us a call anytime.</p>
                                <p className="text-green-600 font-medium mt-2">+123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#1A1A1A] text-white py-6">
                <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">

                    {/* Content Grid - Centered */}
                    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                        {/* Quick Links */}
                        <div className=''>
                            <h3 className="text-lg font-semibold pl-2">
                                <span className='border-l-4 border-[#00B9FF]'> </span>
                                Quick Links</h3>
                            <ul className="ml-4 mt-2 space-y-2">
                                <li><a href="#" className="flex items-center justify-center md:justify-start space-x-2 hover:text-[#00B9FF]"><span>▪</span> <span>Home</span></a></li>
                                <li><a href="#" className="flex items-center justify-center md:justify-start space-x-2 hover:text-[#00B9FF]"><span>▪</span> <span>Complaints</span></a></li>
                                <li><a href="#" className="flex items-center justify-center md:justify-start space-x-2 hover:text-[#00B9FF]"><span>▪</span> <span>Register</span></a></li>
                                <li><a href="#" className="flex items-center justify-center md:justify-start space-x-2 hover:text-[#00B9FF]"><span>▪</span> <span>Login</span></a></li>
                            </ul>
                        </div>
                        {/* Phone Numbers */}
                        <div>
                            <h3 className="text-lg font-semibold pl-2">
                                <span className='border-l-4 border-[#00B9FF]'> </span>
                                Phone Numbers</h3>
                            <div className='ml-4'>
                                <p className="mt-2">
                                    <span className="font-semibold">Military</span> <br />
                                    (123) 456-7890 <br />
                                    (123) 456-7540
                                </p>
                                <p className="mt-4">
                                    <span className="font-semibold">State Police</span> <br />
                                    (123) 456-7891
                                </p>
                                <p className="mt-4">
                                    <span className="font-semibold">Fire Department</span> <br />
                                    (123) 456-7892
                                </p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold pl-2">
                                <span className='border-l-4 border-[#00B9FF]'> </span>
                                Contact Info</h3>
                            <div className='ml-4'>
                                <div className="mt-2 flex items-center justify-center md:justify-start space-x-2">
                                    <span>📍</span>
                                    <a href="https://maps.app.goo.gl/Pn36ysUuiPzKB3qu5" >CivicEye</a>
                                </div>
                                <div className="mt-4 flex items-center justify-center md:justify-start space-x-2">
                                    <span>📞</span>
                                    <a href="tel:+91 9037-29-1113" > +91 9037-29-1113</a>
                                </div>
                                <div className="mt-4 flex items-center justify-center md:justify-start space-x-2">
                                    <span>✉️</span>
                                    <span>info@civiceye.com</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Copyright - Centered */}
                    <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4 w-full max-w-5xl">
                        © CivicEye 2025 | Empowering Citizens, Improving Communities.
                    </div>
                </div>
            </footer>

        </div >
    )
}
