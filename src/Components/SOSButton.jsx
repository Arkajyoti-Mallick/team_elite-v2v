import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

function SOSButton() {
  const [loading, setLoading] = useState(false);

  const handleSOS = () => {
    const confirmed = window.confirm(
      "⚠️ Are you sure you want to send an emergency SOS alert?"
    );

    if (!confirmed) return;

    setLoading(true);

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(false);

        const { latitude, longitude } = position.coords;

        alert(
          `🆘 SOS Activated!

Location:
Latitude: ${latitude}
Longitude: ${longitude}

(Phase 2: This location will be sent to Firebase and your emergency contacts.)`
        );
      },
      () => {
        setLoading(false);
        alert("Unable to access your location. Please enable location permissions.");
      }
    );
  };

  return (
    <button
      onClick={handleSOS}
      disabled={loading}
      className={`flex items-center justify-center gap-3 px-6 py-4 rounded-full font-bold text-lg text-white shadow-xl transition duration-300 ${
        loading
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700 hover:scale-105 animate-pulse"
      }`}
    >
      <FaExclamationTriangle size={24} />

      {loading ? "Getting Location..." : "SOS Emergency"}
    </button>
  );
}

export default SOSButton;