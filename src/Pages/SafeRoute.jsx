import { useState } from "react";
import {
  FaMapMarkedAlt,
  FaLocationArrow,
  FaSearch,
  FaShieldAlt,
  FaHospital,
  FaPoliceBox,
} from "react-icons/fa";

function SafeRoute() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!from || !to) {
      alert("Please enter both locations.");
      return;
    }

    alert(
      `Searching the safest route from "${from}" to "${to}".\n\nGoogle Maps integration will be added in Phase 2.`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-700 text-white py-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center">
          🗺 Safe Route
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex items-center gap-4 mb-8">
            <FaMapMarkedAlt className="text-5xl text-blue-600" />

            <div>
              <h2 className="text-3xl font-bold">
                Find the Safest Route
              </h2>

              <p className="text-gray-600">
                Enter your starting location and destination.
              </p>
            </div>
          </div>

          <form onSubmit={handleSearch} className="space-y-5">

            <div>
              <label className="font-semibold block mb-2">
                Current Location
              </label>

              <input
                type="text"
                placeholder="Enter current location"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Destination
              </label>

              <input
                type="text"
                placeholder="Enter destination"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 flex justify-center items-center gap-3"
            >
              <FaSearch />
              Search Route
            </button>

          </form>

        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl shadow-lg p-10 mt-10">

          <div className="h-96 rounded-xl bg-gray-200 flex flex-col justify-center items-center">

            <FaLocationArrow className="text-7xl text-blue-600 mb-4" />

            <h2 className="text-3xl font-bold">
              Google Maps
            </h2>

            <p className="text-gray-600 mt-3">
              Safe route will appear here after Google Maps API integration.
            </p>

          </div>

        </div>

        {/* Safety Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaShieldAlt className="text-purple-600 text-5xl mx-auto mb-4" />

            <h3 className="text-xl font-bold">
              Safe Roads
            </h3>

            <p className="text-gray-600 mt-3">
              Suggests safer and well-traveled roads.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaPoliceBox className="text-blue-600 text-5xl mx-auto mb-4" />

            <h3 className="text-xl font-bold">
              Nearby Police
            </h3>

            <p className="text-gray-600 mt-3">
              Shows police stations along your route.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaHospital className="text-red-500 text-5xl mx-auto mb-4" />

            <h3 className="text-xl font-bold">
              Nearby Hospitals
            </h3>

            <p className="text-gray-600 mt-3">
              Displays nearby hospitals in case of emergencies.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SafeRoute;