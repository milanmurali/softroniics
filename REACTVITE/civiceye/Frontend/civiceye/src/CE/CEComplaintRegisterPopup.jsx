import React from 'react';

export const CEComplaintRegisterPopup = () => {
    return (
        <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800">
                Report an Issue
            </h2>
            <p className="mt-2 text-center text-gray-600">
                Help us improve our community by reporting issues with detailed information.
            </p>
            <form className="mt-6 space-y-4">
                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        rows="3"
                        placeholder="Enter a detailed description"
                        className="mt-1 w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-blue-500 focus:outline-none"
                    ></textarea>
                </div>
                {/* Complaint Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Complaint Type
                    </label>
                    <select
                        className="mt-1 w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-blue-500 focus:outline-none"
                    >
                        <option>Select complaint type</option>
                        <option>Waste Dumping</option>
                        <option>Public Nuisance</option>
                        <option>Traffic Violations</option>
                        <option>Water Leakage</option>
                        <option>Power Outage</option>
                        <option>Noise Complaint</option>
                        <option>Road Damage</option>
                        <option>Other</option>
                    </select>
                </div>
                {/* Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <input
                        type="text"
                        placeholder="Enter location"
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                {/* Proof */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Proof
                    </label>
                    <button
                        type="button"
                        className="mt-1 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none"
                    >
                        Upload Photo or Video
                    </button>
                </div>
                {/* Actions */}
                <div className="flex space-x-4 mt-6">
                    <button
                        type="submit"
                        className="w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition focus:outline-none"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="w-1/2 bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 transition focus:outline-none"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};
