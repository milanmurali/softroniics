import React from 'react';
import { Link } from 'react-router-dom';

export const BisContact = () => {
    return (
        <div className='font-sans min-h-screen bg-gray-100'>

            <div className='nav bg-[#145cd4] text-white py-5 items-center sm:flex sm:flex-row sm:justify-center md:flex-row md:justify-around'>

                    <div className='navname flex items-center sm:flex sm:justify-center'>
                        <img className="w-10 h-10 " src="https://img.icons8.com/?size=100&id=TPxGML1TEPUB&format=png&color=ffffff" alt="Icon" />
                        <Link to="/home" className=' text-3xl font-bold px-3 rounded'>Business</Link>
                    </div>
                    <div className='navitems flex flex-wrap items-center justify-center sm:flex-none'>
                        <Link to="/bislogin" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Login</Link>
                        <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Services</a>
                        <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">PortFolio</a>
                        <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Pricing</a>
                        <Link to="/bisabout" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">About</Link>
                        <Link to="/biscontact" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Contact</Link>
                    </div>
                </div>

            <div className='container mx-auto py-20'>
                <div className='text-center mb-12'>
                    <h2 className='text-5xl font-bold text-[#145cd4]'>Get in Touch</h2>
                    <p className='text-gray-600 mt-4'>We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.</p>
                </div>

                <div className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
                    <form>
                        <div className='mb-4'>
                            <label className='block text-sm font-semibold text-gray-700'>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className='w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-[#145cd4] focus:ring focus:ring-[#145cd4] focus:ring-opacity-50'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-sm font-semibold text-gray-700'>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className='w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-[#145cd4] focus:ring focus:ring-[#145cd4] focus:ring-opacity-50'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-sm font-semibold text-gray-700'>Message</label>
                            <textarea
                                rows="5"
                                placeholder="Your message"
                                className='w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-[#145cd4] focus:ring focus:ring-[#145cd4] focus:ring-opacity-50'
                            />
                        </div>

                        <button
                            type="submit"
                            className='w-full bg-[#145cd4] text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className='bg-white py-20'>
                <div className='container mx-auto text-center'>
                    <h2 className='text-4xl font-bold text-[#145cd4]'>Find Us</h2>
                    <p className='text-gray-600 mt-4'>Our office is located in the heart of the city. Visit us for a chat!</p>
                    <div className='mt-8'>
                        <iframe
                            title="Our Location"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15734.519136583288!2d75.7906215!3d11.2592992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba433073d62a9fb%3A0x58edc3f2276c7f89!2s11.2592992%2C%2075.7906215!5e0!3m2!1sen!2sin!4v1697292301957!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
