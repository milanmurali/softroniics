import React from 'react';

export const CEComplaintRegisterPopup = () => {
    return (
        <div className="w-full max-w-2xl p-4 md:p-8 bg-white rounded-lg shadow-2xl mx-auto">
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

                {/* Media Upload */}
                <div className='flex justify-between px-2'>
                    <div>
                        <p className="text-gray-600 text-md">Upload Media as proof</p>
                    </div>

                    <div className="">
                        {/* Hidden file input */}
                        <input
                            type="file"
                            accept="image/*,video/*"
                            id="media-upload"
                            className="hidden"
                        />
                        {/* Label acts as a button */}
                        <label
                            htmlFor="media-upload"
                            className="flex items-center gap-2 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition transform hover:scale-105 active:scale-95 focus:outline-none"
                        >
                            <span className="text-md">Upload</span>
                            <img
                                src="https://img.icons8.com/?size=100&id=5a1dAmxLxIS1&format=png&color=ffffff"
                                alt="Upload Media"
                                className="w-6 h-6"
                            />
                        </label>

                    </div>
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
