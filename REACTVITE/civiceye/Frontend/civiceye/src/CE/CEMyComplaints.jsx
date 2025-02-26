import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import spinner from '../assets/spinner.gif'
import celogofullpng from '../assets/celogofull.png' // Import the CivicEye Logo


const CEMyComplaints = () => {

    const userid = localStorage.getItem('id'); // Get the user ID from local storage
    const [complaints, setComplaints] = useState([]); // State to store complaints
    const [loading, setLoading] = useState(true); // State to handle loading
    const navigate = useNavigate();

    // Fetch complaints when the component mounts
    const fetchComplaints = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:6969/complaint/get/${userid}`);
            console.log(response.data);
            setComplaints(response.data);
            setLoading(false);

        }
        catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    useEffect(() => {
        fetchComplaints();
    }, []);


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10">
            {/* Logo */}
            <img src={celogofullpng} alt="Civic Eye Logo" className="w-24 mb-6" />

            {/* Header */}
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Your Complaints</h1>

            {/* Complaints Container */}
            <div className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-6 md:p-8">
                {complaints.length === 0 ? (
                    <p className="text-gray-600 text-center text-lg">No complaints submitted yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            {/* Table Header */}
                            <thead>
                                <tr className="bg-blue-600 text-white text-sm md:text-base">
                                    <th className="px-4 py-3 rounded-tl-lg">Description</th>
                                    <th className="px-4 py-3">Category</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Location</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Proof</th>
                                    <th className="px-4 py-3 rounded-tr-lg">Download</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {complaints.map((complaint, index) => (
                                    <tr key={complaint._id} className="border-b hover:bg-gray-100 transition duration-200">
                                        <td className="px-4 py-3 text-gray-800">{complaint.description}</td>
                                        <td className="px-4 py-3 text-gray-600">{complaint.type}</td>
                                        <td className="px-4 py-3">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full
                                        ${complaint.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                                                    complaint.status === "Resolved" ? "bg-green-100 text-green-800" :
                                                        "bg-red-100 text-red-800"}
                                    `}>
                                                {complaint.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-gray-600">{complaint.location}</td>
                                        <td className="px-4 py-3 text-gray-500">
                                            {new Date(complaint.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <a href={complaint.proof} target="_blank" rel="noopener noreferrer"
                                                className="text-blue-500 font-semibold hover:underline">
                                                View Proof
                                            </a>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <a href={complaint.proof} download className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-lg shadow-md transition">
                                                ⬇
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>

    );
};

export default CEMyComplaints;