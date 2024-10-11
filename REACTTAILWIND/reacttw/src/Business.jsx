import React from 'react'

export const Business = () => {
    return (
        <div className='font-sans'>
            <div className='mainblue sm:h-auto md:h-auto lg:h-auto xl:h-screen w-screen bg-[#145cd4]'>

                <div className='nav text-white mx-16 py-5 flex flex-col items-center sm:flex sm:flex-row sm:justify-center md:flex-row md:justify-start'>

                    <div className='navname flex items-center sm:flex sm:justify-center'>
                        <img className="w-10 h-10 " src="https://img.icons8.com/?size=100&id=TPxGML1TEPUB&format=png&color=ffffff" alt="Icon" />
                        <a href="#" className=' text-3xl font-bold px-3 rounded'>Business</a>
                    </div>
                    <div className='navitems flex flex-wrap items-center justify-center sm:flex-none'>
                        <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Home</a>
                        <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Services</a>
                        <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">PortFolio</a>
                        <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Pricing</a>
                        <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Team</a>
                        <a href="#" className=" text-lg px-4 rounded hover:bg-blue-500 p-1">Contact</a>
                    </div>
                </div>

                <div className='con1 text-white mx-6 my-20 flex flex-wrap items-center justify-around'>
                    <div className='texts w-scree sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4'>
                        <p className=' text-5xl'>Corporate & Business Site Template By Ayro UI.</p>
                        <p className='my-10 text-lg'>
                            We are a digital agency that helps brand to achieve their Business outcomes.
                            We see technology as a tool to create amazing things.</p>
                        <div className='flex'>
                            <button className="bg-white text-[#145cd4] font-bold px-4 rounded-md hover:bg-gray-300">GET STARTED</button>
                            <a href="#" className=" text-lg mx-5 p-1 flex items-center rounded border border-transparent hover:border hover:border-white ">
                                <img className='rounded-full p-2 bg-white w-10' src='https://img.icons8.com/?size=100&id=398&format=png&color=145cd4' alt="Watch Intro" />
                                <p className='mx-4 font-semibold    '>Watch Intro</p>
                            </a>
                        </div>
                    </div>  
                    <div className='my-10 w-[80%] sm:w-[60%] md:w-[60%] lg:w-[50%] xl:w-[40%]'>
                        <img className='rounded-lg w-[500px]' src='https://images.unsplash.com/photo-1484863137850-59afcfe05386' alt="Main Picture" />
                    </div>
                </div>
            </div>

            <div className='mainwhite h-screen w-screen flex items-center'>
                <div className='con2 text-black flex flex-wrap justify-around items-center'>
                    <div className='flex justify-center'>
                        <img className='rounded-lg  w-[75%]'
                            src='https://assets.bizclikmedia.net/900/2c80fe0ddf3c3124926f2abe54fd67cc:e64e73ad7c7b991d4a6eee4e06a7a94b/tyler-franta-iusj25iyu1c-unsplash.webp'
                            alt="Main Picture" />
                    </div>
                    <div className='texts2 mx-6 my-10 w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3'>
                        <div className=' flex items-center '>
                            <p className='text-4xl  font-bold text-[#145cd4]'>~</p>
                            <p className='text-lg mx-4 font-bold'>OUR STORY</p>
                        </div>
                        <p className='text-5xl font-bold'>Our team comes with the experience and knowledge</p>
                        <div className='p-3 my-10 flex items-center bg-gray-200 rounded sm:flex-none'>
                            <button class=" bg-[#145cd4] text-white font-bold py-2 px-4 rounded-md hover:bg-white hover:text-black ">
                                Who We Are
                            </button>
                            <button class="mx-3 bg-white text-black font-bold py-2 px-4 rounded-md border border-white hover:bg-[#145cd4] hover:text-white">
                                Our Vision
                            </button>
                            <button class="bg-white text-black font-bold py-2 px-4 rounded-md border border-white hover:bg-[#145cd4] hover:text-white">
                                Our History
                            </button>
                        </div>
                        <p className='px-2 text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus iste voluptas doloremque mollitia atque reiciendis aperiam tenetur provident id, consectetur ex. Alias voluptatem expedita saepe molestiae</p>
                        <p className='px-2 text-gray-500 my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus iste voluptas </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
