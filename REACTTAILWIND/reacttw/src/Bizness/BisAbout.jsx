import React from 'react';
import { Link } from 'react-router-dom';

export const BisAbout = () => {
  return (
    <div className='font-sans'>
      {/* Navbar */}
      <div className='mainblue sm:h-auto md:h-auto lg:h-auto xl:h-auto w-screen bg-[#145cd4]'>

        <div className='nav text-white py-5 items-center sm:flex sm:flex-row sm:justify-center md:flex-row md:justify-around'>

          <div className='navname flex items-center justify-center sm:flex sm:justify-center'>
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

      </div>

      {/* Hero Section */}
      <section className='bg-white py-20'>
        <div className='container mx-auto flex flex-col items-center'>
          <h1 className='text-5xl font-bold text-[#145cd4]'>Who We Are</h1>
          <p className='text-lg text-gray-600 mt-4 text-center'>
            We are a passionate team committed to delivering top-notch services and transforming businesses.
          </p>
          <p className='text-lg text-gray-600 text-center'>
            Our mission is to help brands achieve their goals through innovative solutions and technology.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className='bg-gray-100 py-20'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
          <div className='w-full md:w-1/2 p-6'>
            <img className='rounded-lg w-full' src="https://images.unsplash.com/photo-1542744095-291d1f67b221" alt="Our Mission" />
          </div>
          <div className='w-full md:w-1/2 p-6'>
            <h2 className='text-4xl font-bold text-[#145cd4]'>Our Mission</h2>
            <p className='mt-4 text-gray-600'>
              At Business, we aim to be the catalyst for your company’s digital transformation. We use cutting-edge technology to help brands achieve their goals and create innovative, impactful solutions that drive success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className='bg-white py-20'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-bold text-[#145cd4]'>Meet Our Team</h2>
          <div className='flex flex-wrap justify-center mt-8'>
            {/* Team Member 1 */}
            <div className='w-full md:w-1/4 p-4'>
              <img className='rounded-full w-32 mx-auto' src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df" alt="Team Member" />
              <h3 className='mt-4 text-xl font-bold'>John Doe</h3>
              <p className='text-gray-600'>CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className='w-full md:w-1/4 p-4'>
              <img className='rounded-full w-32 mx-auto' src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8" alt="Team Member" />
              <h3 className='mt-4 text-xl font-bold'>Jane Smith</h3>
              <p className='text-gray-600'>CTO</p>
            </div>
          </div>
        </div>
      </section>

      <div className='bg-gray-100 py-20 container text-center flex flex-col items-center'>
        <h2 className='text-4xl font-bold text-[#145cd4]'>Get In Touch</h2>
        <p className='text-lg text-gray-600 mt-4'>
          Have any questions? We'd love to hear from you. Reach out today and let’s start building something amazing together.
        </p>
        <Link to="/biscontact" className='mt-6 bg-[#145cd4] text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>
          Contact Us
        </Link>
      </div>
    </div>
  );
};
