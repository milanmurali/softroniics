import React from 'react';

export const CEComplaintRegisterPopup = () => {
    return (
        <div className="w-full max-w-2xl p-8 bg-gray-50 rounded-lg shadow-2xl">
            <h1 className="text-3xl font-bold text-center text-white">
                Report Issues Seamlessly
            </h1>
            <p className="mt-4 text-center text-gray-300">
                Our platform empowers users to submit complaints with ease, offering tools to upload multimedia for comprehensive issue reporting.
            </p>
            <form className="mt-8 space-y-6">
                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">
                        Description
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your description"
                        className="mt-1 w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-[#00B9FF] focus:outline-none"
                    />
                </div>
                {/* Complaint Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">
                        Complaint Type
                    </label>
                    <select
                        className="mt-1 w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-[#00B9FF] focus:outline-none"
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
                    <label className="block text-sm font-medium text-gray-300">
                        Location
                    </label>
                    <input
                        type="text"
                        placeholder="Enter location"
                        className="mt-1 w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-[#00B9FF] focus:outline-none"
                    />
                </div>
                {/* Proof */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">
                        Proof
                    </label>
                    <button
                        type="button"
                        className="mt-1 w-full px-4 py-3 bg-[#00B9FF] text-white rounded-lg hover:bg-[#0099dd] focus:outline-none"
                    >
                        Upload photo or video
                    </button>
                </div>
                {/* Actions */}
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="w-1/2 px-4 py-3 bg-[#00B9FF] text-white rounded-lg hover:bg-[#0099dd] focus:outline-none"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="w-1/2 ml-4 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};
