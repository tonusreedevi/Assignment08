"use client";

import { useState } from "react";
import UpdateUserProfile from "@/component/UpdateUserProfile";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const [showModal, setShowModal] = useState(false);

  // Loading
  if (isPending) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FFF9F2]">
        <p className="text-[#0B3D6F] text-lg font-semibold">
          Loading profile...
        </p>
      </main>
    );
  }

  const user = session?.user;

  // Not logged in
  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FFF9F2]">
        <p className="text-gray-600">
          Please login to view your profile.
        </p>
      </main>
    );
  }

  // Get initials
  const getInitials = (name) => {
    if (!name) return "U";

    return name
      .trim()
      .split(" ")
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  };

  return (
    <main className="min-h-screen bg-[#FFF9F2] py-16 px-6">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#F46C06] font-semibold uppercase tracking-[4px]">
            My Account
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-[#0B3D6F] mt-3">
            My Profile
          </h1>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Top section */}
          <div className="bg-[#0B3D6F] h-32"></div>

          {/* Profile content */}
          <div className="px-8 pb-10">

            {/* Avatar */}
            <div className="flex justify-center -mt-16">

              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name || "Profile"}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div
                  className="w-32 h-32 rounded-full bg-[#F46C06]
                  text-white flex items-center justify-center
                  text-4xl font-bold border-4 border-white shadow-lg"
                >
                  {getInitials(user.name)}
                </div>
              )}

            </div>

            {/* Name */}
            <div className="text-center mt-5">

              <h2 className="text-3xl font-bold text-[#0B3D6F]">
                {user.name}
              </h2>

              <p className="text-gray-500 mt-1">
                {user.email}
              </p>

            </div>

            {/* User Information */}
            <div className="mt-10 space-y-4">

              {/* Name */}
              <div className="bg-[#FFF9F2] p-5 rounded-2xl">
                <p className="text-sm text-gray-500">
                  Full Name
                </p>

                <p className="font-semibold text-[#0B3D6F] mt-1">
                  {user.name}
                </p>
              </div>

              {/* Email */}
              <div className="bg-[#FFF9F2] p-5 rounded-2xl">
                <p className="text-sm text-gray-500">
                  Email Address
                </p>

                <p className="font-semibold text-[#0B3D6F] mt-1">
                  {user.email}
                </p>
              </div>

              {/* Email Verification */}
              <div className="bg-[#FFF9F2] p-5 rounded-2xl">
                <p className="text-sm text-gray-500">
                  Email Verification
                </p>

                <p
                  className={`font-semibold mt-1 ${
                    user.emailVerified
                      ? "text-green-600"
                      : "text-orange-500"
                  }`}
                >
                  {user.emailVerified
                    ? "Verified"
                    : "Not Verified"}
                </p>
              </div>

            </div>

            {/* Edit Profile Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-3 rounded-full bg-[#F46C06]
                text-white font-semibold
                hover:bg-[#d85b03]
                transition shadow-md"
              >
                Edit Profile
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Update Profile Modal */}
      {showModal && (
        <UpdateUserProfile
          user={user}
          onClose={() => setShowModal(false)}
          onUpdate={(updatedData) => {
            console.log("Updated data:", updatedData);
          }}
        />
      )}

    </main>
  );
};

export default ProfilePage;