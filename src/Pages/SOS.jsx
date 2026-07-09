import { useState } from "react";
import {
  FaExclamationTriangle,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";

function SOS() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSOS = () => {
    setLoading(true);
    setMessage("");

    if (!navigator.geolocation) {
      setLoading(false);
      setMessage("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(false);

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setMessage(
          `SOS Activated!\n\nLatitude: ${latitude}\nLongitude: ${longitude}\n\n(In Phase 2 this will be sent to Firebase and emergency contacts.)`
        );
      },
      () => {
        setLoading(false);
        setMessage("Unable to get your location. Please allow location access.");
      }
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-red-50">

      {/* Header */}
      <div className="bg-red-600 text-white py-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center">
          🆘 Emergency SOS
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Info Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <div className="flex items-center gap-4 mb-6">
            <FaShieldAlt className="text-red-600 text-5xl" />

            <div>
              <h2 className="text-3xl font-bold">
                One-Tap Emergency Alert
              </h2>

              <p className="text-gray-600 mt-2">
                Press the SOS button below during an emergency.
              </p>
            </div>
          </div>

          {/* SOS Button */}
          <div className="flex justify-center my-10">

            <button
              onClick={handleSOS}
              disabled={loading}
              className="w-56 h-56 rounded-full bg-red-600 text-white text-4xl font-bold shadow-2xl hover:bg-red-700 transition animate-pulse"
            >
              {loading ? "Loading..." : "SOS"}
            </button>

          </div>

          {/* Status */}
          {message && (
            <div className="bg-red-100 border border-red-300 rounded-xl p-5 whitespace-pre-line">
              {message}
            </div>
          )}

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaMapMarkerAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">Live Location</h3>
            <p className="text-gray-600 mt-2">
              Your current GPS location is captured.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaPhoneAlt className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">Emergency Contacts</h3>
            <p className="text-gray-600 mt-2">
              In the next phase, alerts will be sent to trusted contacts.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaExclamationTriangle className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold">Instant Alert</h3>
            <p className="text-gray-600 mt-2">
              Emergency requests will be stored securely in Firebase.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default SOS;