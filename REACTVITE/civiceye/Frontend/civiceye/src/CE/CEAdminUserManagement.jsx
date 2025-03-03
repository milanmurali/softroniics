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
    <div className="w-full min-h-screen bg-gray-300 flex justify-center p-6">

      <Toaster />

      {/* Main Container */}
      <div className="backdrop-blur-lg shadow-2xl rounded-2xl w-[90%] max-w-7xl flex overflow-hidden">

        {/* Sidebar */}
        <aside className="bg-white/50 w-72 p-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex justify-center items-center mb-8">
              <img src={celogofullpng} width="180" height="80" alt="Civic Eye Logo" className="drop-shadow-md" />
            </div>

            <nav className="space-y-2">
              {["📊 Overview", "⚖️ Complaints", "👤 User Management", "📄 Reports", "🗣️ Feedback"].map((item, index) => (
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
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider border-b border-gray-200">
                    {["Name", "Email", "Phone", "Address", "ID Proof", "Reports", "Actions"].map((header, index) => (
                      <th key={index} className="px-6 py-3 font-medium">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition duration-150">
                        <td className="px-6 py-4 text-gray-800 font-medium">{user.name}</td>
                        <td className="px-6 py-4 text-gray-600">{user.email}</td>
                        <td className="px-6 py-4 text-gray-600">{user.phone}</td>
                        <td className="px-6 py-4 text-gray-600">{user.address}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                            {user.idProof}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{user.reports}</td>
                        <td className="px-6 py-4">
                          <div className="flex justify-center space-x-2">
                            <a
                              href={user.proof}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 rounded-md hover:bg-blue-100 transition"
                              title="View Proof"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                              </svg>
                              View
                            </a>
                            <a
                              href={user.proof}
                              download="proof-document.png"
                              target="_blank"
                              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-md hover:bg-gray-100 transition border border-gray-200"
                              title="Download Proof"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                              </svg>
                              Download
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="p-6 text-center text-lg font-medium text-gray-500">
                        No users found.
                      </td>
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
