import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaTint,
  FaSave,
} from "react-icons/fa";

function Profile() {
  const [user, setUser] = useState(null);

  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    emergencyContact: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        setProfile((prev) => ({
          ...prev,
          name: currentUser.displayName || "",
        }));
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async () => {
    try {
      if (user) {
        await updateProfile(user, {
          displayName: profile.name,
        });

        alert("Profile Updated Successfully!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-purple-700 text-white py-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center">
          👤 My Profile
        </h1>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-5">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          {/* Avatar */}
          <div className="flex flex-col items-center">

            <FaUserCircle
              className="text-purple-600 mb-4"
              size={120}
            />

            <h2 className="text-3xl font-bold">
              {profile.name || "User"}
            </h2>

            <p className="text-gray-500">
              {user?.email}
            </p>

          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div>
              <label className="font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">
                Email
              </label>

              <div className="flex items-center border rounded-lg mt-2 px-3">

                <FaEnvelope className="text-gray-500" />

                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="w-full p-3 bg-gray-100"
                />

              </div>
            </div>

            <div>
              <label className="font-semibold">
                Phone Number
              </label>

              <div className="flex items-center border rounded-lg mt-2 px-3">

                <FaPhone className="text-gray-500" />

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full p-3"
                />

              </div>
            </div>

            <div>
              <label className="font-semibold">
                Blood Group
              </label>

              <div className="flex items-center border rounded-lg mt-2 px-3">

                <FaTint className="text-red-500" />

                <select
                  name="bloodGroup"
                  value={profile.bloodGroup}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                >
                  <option value="">Select</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>

              </div>
            </div>

            <div className="md:col-span-2">

              <label className="font-semibold">
                Emergency Contact
              </label>

              <input
                type="text"
                name="emergencyContact"
                placeholder="Enter emergency contact number"
                value={profile.emergencyContact}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />

            </div>

          </div>

          {/* Save Button */}
          <div className="mt-10 text-center">

            <button
              onClick={saveProfile}
              className="bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-800 flex items-center gap-3 mx-auto"
            >
              <FaSave />
              Save Profile
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;
