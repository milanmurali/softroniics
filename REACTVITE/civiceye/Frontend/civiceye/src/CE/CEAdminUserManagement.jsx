import React, { useEffect, useState } from "react";
import celogofullpng from '../assets/celogofull.png' // Import the CivicEye Logo
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const CEAdminUserManagement = () => {

  const Navigate = useNavigate();
  const users = [
    { name: "Karthik M", email: "chimbmon@gmail.com", phone: "1234567890", address: "123 Main St, City", idProof: "Aadhaar", reports: "5" },
    { name: "Viswajith E", email: "jithu@gmail.com", phone: "9876543210", address: "456 Elm St, Town", idProof: "Driving License", reports: "2" },
    { name: "Milan", email: "milanmon@gmail.com", phone: "1234567890", address: "123 Main St, City", idProof: "Aadhaar", reports: "5" },
    { name: "Neeraj", email: "appumon@gmail.com", phone: "1234567890", address: "123 Main St, City", idProof: "PAN", reports: "3" },
    { name: "Neeraj", email: "appumon@gmail.com", phone: "1234567890", address: "123 Main St, City", idProof: "PAN", reports: "3" },
    { name: "Neeraj", email: "appumon@gmail.com", phone: "1234567890", address: "123 Main St, City", idProof: "PAN", reports: "3" },
    { name: "Neeraj", email: "appumon@gmail.com", phone: "1234567890", address: "123 Main St, City", idProof: "PAN", reports: "3" }
  ];
  const userId = localStorage.getItem('id');  // Get the user id from local storage
  useEffect(() => {
    if (!userId) {
      Navigate('/landing')
    }

  }, []);
  const [loggeduserdata, setloggeduserdata] = useState(''); // For logged in user data 

  const fetchUserData = async () => {
    try {
      if (!userId) return;
      const response = await axios.get(`http://127.0.0.1:6969/user/viewuser/${userId}`);
      if (response) {
        setloggeduserdata(response.data);
        // console.log(loggeduserdata);
      }
    }
    catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  // Redirect to home page if user is not admin
  useEffect(() => {
    if (loggeduserdata.role === 'user') {
      toast.error("You are not authorized to view this page.");
      Navigate('/home');
    }
  }, [loggeduserdata]);

  // Fetch the user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className=" w-full min-h-screen bg-gray-300 flex justify-center p-6">
      <Toaster />

      {/* Main Container */}
      <div className="backdrop-blur-lg shadow-2xl rounded-2xl w-[90%] max-w-10xl flex overflow-hidden">

        {/* Sidebar */}
        <aside className="bg-white/50 w-72 p-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex justify-center items-center mb-8">
              <img src={celogofullpng} width="180" height="80" alt="Civic Eye Logo" className="drop-shadow-md" />
            </div>

            <nav className="space-y-2">
              {["📊 Overview", "⚖️ Complaints", "👤 User Management", "📄 Reports"].map((item, index) => (
                <button
                  key={index}
                  className="flex items-center px-6 py-3 text-lg font-medium w-full rounded-lg transition duration-300 hover:bg-[#00b9ff] hover:text-white"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          <button className="text-lg font-medium px-6 py-3 bg-[#00B9FF] text-white rounded-lg shadow-md hover:bg-[#0090cc] transition">
            👮 {loggeduserdata.name}
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10 bg-[#00B9FF]">
          <div className="bg-white/70 backdrop-blur-lg rounded-xl shadow-md p-6">
            <h2 className="text-3xl font-bold mb-6 border-b pb-4 text-gray-800">User Management</h2>

            <div className="overflow-x-auto">
              
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-lg font-semibold border-b">
                    {["Name", "Email", "Phone", "Address", "ID Proof", "Reports"].map((header, index) => (
                      <th key={index} className="p-4">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={index} className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100 transition"}`}>
                        {Object.values(user).map((value, i) => (
                          <td key={i} className="p-4 text-lg text-gray-700">{value}</td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="p-6 text-center text-lg font-medium text-gray-500">No users found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>


  );
};
