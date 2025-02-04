import React from 'react'

export const KHome = () => {
    return (
        <div className="bg-gray-100">
            {/* Navbar */}
            <nav className="flex justify-between items-center p-4 bg-white shadow-md">
                <div className="text-2xl font-bold text-blue-500">CivicEYE</div>
                <div className="space-x-6 ">
                    <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">My Complaints</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">About</a>
                    <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative h-80 bg-black text-white flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl font-bold">Make Your Voice Heard!</h1>
                <p className="text-lg mt-2">Report Problems, Help Your City, and Earn Rewards!</p>
                <button className="mt-4 bg-blue-500 px-6 py-2 text-white rounded">Sign Up</button>
            </header>

            {/* Complaint Reports */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                {[
                    { label: "Complaints Registered", value: "1002" },
                    { label: "Reports Filed", value: "992" },
                    { label: "Rewards Distributed", value: "886" },
                    { label: "Impact Made", value: "-----" },
                ].map((item, index) => (
                    <div key={index} className="p-4 bg-white shadow rounded text-center">
                        <h3 className="font-bold text-xl">{item.value}</h3>
                        <p className="text-gray-600">{item.label}</p>
                    </div>
                ))}
            </section>

            {/* What We Do Section */}
            <section className="text-center p-6">
                <h2 className="text-2xl font-bold">What We Do</h2>
                <div className="flex justify-center gap-4 mt-4">
                    {["You Register the Complaint", "Our Team Verifies", "We Collaborate with Authorities", "Your Issue is Resolved"].map((text, index) => (
                        <div key={index} className="border p-4 rounded-lg shadow-md w-1/4">
                            {text}
                        </div>
                    ))}
                </div>
            </section>

            {/* User Testimonials */}
            <section className="text-center p-6">
                <h2 className="text-2xl font-bold">What Our Users Have to Say</h2>
                <div className="mt-4 border p-4 rounded-md bg-white shadow-md max-w-xl mx-auto">
                    "This is an amazing platform to report issues and get them resolved quickly!" - John Doe
                </div>
            </section>

            {/* Contact Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 p-6 gap-4">
                <div className="bg-white shadow-md p-4 rounded">
                    <h3 className="font-bold">Support Mail</h3>
                    <p>For assistance, reach us at:</p>
                    <p className="text-blue-500">support@civiceye.com</p>
                </div>
                <div className="bg-white shadow-md p-4 rounded">
                    <h3 className="font-bold">Make A Call</h3>
                    <p>Need urgent help? Call us:</p>
                    <p className="text-blue-500">+123 456 7890</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white text-center p-4">
                <p>&copy; 2024 CivicEYE. All rights reserved.</p>
            </footer>
        </div>
    )
}
