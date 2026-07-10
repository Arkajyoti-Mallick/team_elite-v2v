import {
  FaMapMarkedAlt,
  FaClock,
  FaRoad,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

function RouteCard({
  title = "Safest Route",
  from = "Current Location",
  to = "Destination",
  distance = "5.2 km",
  duration = "18 mins",
  safetyScore = "95%",
  description = "Recommended route with well-lit roads and nearby emergency services.",
  onView,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">

        <div className="flex items-center gap-3">
          <FaMapMarkedAlt className="text-blue-600 text-3xl" />

          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-500">
              {from} <FaArrowRight className="inline mx-1" /> {to}
            </p>
          </div>
        </div>

        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
          {safetyScore}
        </div>

      </div>

      {/* Route Details */}
      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="flex items-center gap-3">
          <FaRoad className="text-purple-600" />
          <div>
            <p className="text-gray-500 text-sm">Distance</p>
            <h3 className="font-semibold">{distance}</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaClock className="text-orange-500" />
          <div>
            <p className="text-gray-500 text-sm">Estimated Time</p>
            <h3 className="font-semibold">{duration}</h3>
          </div>
        </div>

      </div>

      {/* Description */}
      <div className="flex gap-3 items-start mb-6">

        <FaShieldAlt className="text-green-600 mt-1" />

        <p className="text-gray-600">
          {description}
        </p>

      </div>

      {/* Button */}
      <button
        onClick={onView}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        View Route
      </button>

    </div>
  );
}

export default RouteCard;