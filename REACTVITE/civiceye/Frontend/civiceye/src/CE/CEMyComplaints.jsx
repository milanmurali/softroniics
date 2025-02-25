import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-8">My Complaints</h1>
            {complaints.length === 0 ? (
                <p className="text-gray-700">You have not submitted any complaints yet.</p>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Category</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Location</th>
                                <th className="px-4 py-2">Date Submitted</th>
                                <th className="px-4 py-2">Uploaded Proof</th>

                            </tr>
                        </thead>
                        <tbody>
                            {complaints.map((complaint) => (
                                <tr key={complaint._id} className="border-b">
                                    <td className="px-4 py-2 text-center">{complaint.description}</td>
                                    <td className="px-4 py-2 text-center">{complaint.type}</td>
                                    <td className="px-4 py-2 text-center">
                                        <span
                                            className={`px-2 py-1 rounded-full text-sm ${complaint.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : complaint.status === "Resolved"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-red-100 text-red-800"
                                                }`}
                                        >
                                            {complaint.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 text-center">{complaint.location}</td>
                                    <td className="px-4 py-2 text-center">
                                        {new Date(complaint.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        <a
                                            href={complaint.proof}
                                            className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                                        >
                                            View Proof
                                        </a>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default CEMyComplaints;