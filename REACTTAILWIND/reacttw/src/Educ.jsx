import React from 'react'

export const Educ = () => {
    return (
        <div>
            <div className='nav flex justify-around bg-[#d81365] text-white'>
                <div className="navname flex py-3 items-center">
                    <img className="h-16" src="https://img.icons8.com/?size=100&id=tlXZO3hU3TSG&format=png&color=ffffff" alt="Icon" />
                    <div className='navname'>
                        <a href="#" className='text-3xl font-bold'>First</a>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className='navitems flex flex-wrap uppercase items-center justify-center sm:flex-none'>
                    <a href="#" className="rounded p-1 mx-2 hover:border hover:border-white">Home</a>
                    <a href="#" className="rounded p-1 mx-2 hover:border hover:border-white">About us</a>
                    <a href="#" className="rounded p-1 mx-2 hover:border hover:border-white">Services</a>
                    <a href="#" className="rounded p-1 mx-2 hover:border hover:border-white">PortFolio</a>
                    <a href="#" className="rounded p-1 mx-2 hover:border hover:border-white">Pricing</a>
                    <a href="#" className="rounded p-1 mx-2 hover:border hover:border-white">Contact</a>
                </div>
            </div>
            <div
                className="w-screen h-[450px] bg-cover bg-center
                            bg-[url('https://www.ergo.com/-/media/ergocom/bilder/web/verantwortung/ergo-cr-foederung-entwicklung-800x450web.jpg?la=en&hash=6DA178213C1FF53C98965EE17C3EA03F4B7064A8')]">
                aaa
            </div>



        </div >
    )
}
