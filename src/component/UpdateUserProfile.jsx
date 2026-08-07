"use client";

import React, { useState } from "react";

const UpdateUserProfile = ({ user, onClose, onUpdate }) => {
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      name,
      image,
    };

    if (onUpdate) {
      onUpdate(updatedData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      {/* Modal */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-[#0B3D6F] px-8 py-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-white">
              Update Profile
            </h2>

            <p className="text-blue-100 text-sm mt-1">
              Update your personal information
            </p>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="text-white text-2xl hover:text-[#F6B914] transition"
          >
            ✕
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">

          {/* Profile Preview */}
          <div className="flex justify-center mb-7">

            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#F6B914] shadow-md"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#F46C06] text-white flex items-center justify-center text-3xl font-bold border-4 border-[#F6B914]">
                {name?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}

          </div>

          {/* Name */}
          <div className="mb-5">

            <label className="block text-sm font-semibold text-[#0B3D6F] mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-[#F46C06] focus:ring-2 focus:ring-[#F46C06]/20 transition"
              required
            />

          </div>

          {/* Email - Disabled */}
          <div className="mb-5">

            <label className="block text-sm font-semibold text-[#0B3D6F] mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed"
            />

            <p className="text-xs text-gray-400 mt-2">
              Email address cannot be changed here.
            </p>

          </div>

          {/* Image URL */}
          <div className="mb-7">

            <label className="block text-sm font-semibold text-[#0B3D6F] mb-2">
              Profile Image URL
            </label>

            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/profile.jpg"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-[#F46C06] focus:ring-2 focus:ring-[#F46C06]/20 transition"
            />

          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-semibold hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-[#F46C06] text-white font-semibold hover:bg-[#d85b03] transition shadow-md"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default UpdateUserProfile;