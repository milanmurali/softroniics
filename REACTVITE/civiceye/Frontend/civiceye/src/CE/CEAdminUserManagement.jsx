import React, { useEffect, useState } from "react";
import celogofullpng from '../assets/celogofull.png';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export const CEAdminUserManagement = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('id');
  const [loggedUserData, setLoggedUserData] = useState({});
  const [users, setUsers] = useState([]);

  const fetchUserList = async () => {
    try {
      if (!userId) return;
      const response = await axios.get(`http://127.0.0.1:6969/user/viewuser/${userId}`);
      if (response) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  useEffect(() => {
    if (!userId) {
      navigate('/landing');
    }
  }, []);

  const fetchUserData = async () => {
    try {
      if (!userId) return;
      const response = await axios.get(`http://127.0.0.1:6969/user/viewuser/${userId}`);
      if (response) {
        setLoggedUserData(response.data);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  useEffect(() => {
    if (loggedUserData.role === 'user') {
      toast.error("You are not authorized to view this page.");
      navigate('/home');
    }
  }, [loggedUserData]);

  return (
    <div className="w-full min-h-screen bg-gray-300 flex justify-center px-6 py-4">
      <Toaster />

      <div className="backdrop-blur-lg shadow-2xl rounded-2xl w-full max-w flex overflow-hidden">

        {/* Sidebar */}
        <div className="bg-white/50 w-72 p-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex justify-center items-center mb-8">
              <img src={celogofullpng} width="180" height="80" alt="Civic Eye Logo" className="drop-shadow-md" />
            </div>
            <div className="space-y-2 ">
              <p className="text-2xl text-center font-bold text-gray-800 mb-4">Admin Panel</p>
              <Link className="flex items-center px-6 py-3 text-lg font-medium w-full rounded-lg transition duration-300 hover:bg-[#00b9ff] hover:text-white">
                📊 Overview
              </Link>
              <Link className="flex items-center px-6 py-3 text-lg font-medium w-full rounded-lg transition duration-300 hover:bg-[#00b9ff] hover:text-white">
                ⚖️ Complaints
              </Link>
              <Link className="flex items-center px-6 py-3 text-lg font-medium w-full rounded-lg transition duration-300 hover:bg-[#00b9ff] hover:text-white">
                👤 User Management
              </Link>
              <Link className="flex items-center px-6 py-3 text-lg font-medium w-full rounded-lg transition duration-300 hover:bg-[#00b9ff] hover:text-white">
                📄 Reports
              </Link>
              <Link className="flex items-center px-6 py-3 text-lg font-medium w-full rounded-lg transition duration-300 hover:bg-[#00b9ff] hover:text-white">
                🗣️ Feedback
              </Link>
            </div>
          </div>
          <button className="text-lg font-medium px-6 py-3 bg-[#00B9FF] text-white rounded-lg shadow-md hover:bg-[#0090cc] transition">
            👮 {loggedUserData.name || "Admin"}
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-10 bg-[#00B9FF]">
          <div className="bg-white/70 backdrop-blur-lg rounded-xl shadow-md p-6">
            <h2 className="text-3xl font-bold mb-6 border-b pb-4 text-gray-800">User Management</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider border-b border-gray-200">
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
