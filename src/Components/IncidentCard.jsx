import {
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserShield,
} from "react-icons/fa";

function IncidentCard({
  incidentType = "Harassment",
  location = "Kolkata",
  date = "10 Jul 2026",
  status = "Pending",
  description = "A short description of the reported incident.",
  image = "",
}) {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case "verified":
        return "bg-green-100 text-green-700";
      case "resolved":
        return "bg-blue-100 text-blue-700";
      case "pending":
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      {/* Image */}
      {image ? (
        <img
          src={image}
          alt={incidentType}
          className="w-full h-52 object-cover"
        />
      ) : (
        <div className="h-52 bg-orange-100 flex items-center justify-center">
          <FaExclamationTriangle
            className="text-orange-500"
            size={70}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaExclamationTriangle className="text-red-500" />
            {incidentType}
          </h2>

          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusColor()}`}
          >
            {status}
          </span>

        </div>

        <div className="mt-5 space-y-3">

          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-red-500" />
            {location}
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaCalendarAlt className="text-blue-500" />
            {date}
          </div>

          <div className="flex items-start gap-3 text-gray-700">
            <FaUserShield className="text-purple-600 mt-1" />
            <p>{description}</p>
          </div>

        </div>

        <button
          className="w-full mt-6 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
        >
          View Details
        </button>

      </div>

    </div>
  );
}

export default IncidentCard;
