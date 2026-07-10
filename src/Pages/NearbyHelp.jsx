import {
  FaHospital,
  FaShieldAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

function NearbyHelp() {

  const emergencyPlaces = [
    {
      name: "Nearest Police Station",
      icon: <FaShieldAlt className="text-blue-600 text-5xl" />,
      description: "Find the closest police station for immediate assistance.",
      color: "bg-blue-100",
    },
    {
      name: "Nearest Hospital",
      icon: <FaHospital className="text-red-500 text-5xl" />,
      description: "Locate the nearest hospital for medical emergencies.",
      color: "bg-red-100",
    },
    {
      name: "Women Helpline",
      icon: <FaPhoneAlt className="text-green-600 text-5xl" />,
      description: "Quick access to women's emergency helpline numbers.",
      color: "bg-green-100",
    },
    {
      name: "Safe Shelter",
      icon: <FaMapMarkerAlt className="text-purple-600 text-5xl" />,
      description: "Find nearby safe shelters and support centres.",
      color: "bg-purple-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-pink-600 text-white py-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center">
          🏥 Nearby Help
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

          <h2 className="text-3xl font-bold mb-6">
            Search Nearby Services
          </h2>

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Enter your location..."
              className="flex-1 border rounded-lg p-3"
            />

            <button
              className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 flex items-center justify-center gap-2"
              onClick={() =>
                alert("Google Maps integration will be added in Phase 2.")
              }
            >
              <FaSearch />
              Search
            </button>

          </div>

        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {emergencyPlaces.map((place, index) => (

            <div
              key={index}
              className={`${place.color} rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition`}
            >

              <div className="flex justify-center mb-4">
                {place.icon}
              </div>

              <h2 className="text-xl font-bold">
                {place.name}
              </h2>

              <p className="mt-3 text-gray-700">
                {place.description}
              </p>

              <button
                className="mt-5 bg-white px-5 py-2 rounded-lg shadow hover:bg-gray-100"
                onClick={() =>
                  alert(`${place.name} feature coming in Phase 2.`)
                }
              >
                View
              </button>

            </div>

          ))}

        </div>

        {/* Google Map Placeholder */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold mb-6">
            Live Map
          </h2>

          <div className="h-[450px] rounded-xl bg-gray-200 flex items-center justify-center">

            <div className="text-center">

              <FaMapMarkerAlt className="text-7xl text-pink-600 mx-auto mb-5" />

              <h3 className="text-3xl font-bold">
                Google Maps
              </h3>

              <p className="text-gray-600 mt-3">
                Nearby Police Stations, Hospitals, Helplines,
                and Safe Shelters will appear here.
              </p>

            </div>

          </div>

        </div>

        {/* Emergency Numbers */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold mb-6">
            Emergency Helpline Numbers
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-red-100 p-5 rounded-xl text-center">
              <h3 className="font-bold text-xl">🚓 Police</h3>
              <p className="text-2xl mt-3 font-bold">100 / 112</p>
            </div>

            <div className="bg-pink-100 p-5 rounded-xl text-center">
              <h3 className="font-bold text-xl">👩 Women Helpline</h3>
              <p className="text-2xl mt-3 font-bold">181</p>
            </div>

            <div className="bg-green-100 p-5 rounded-xl text-center">
              <h3 className="font-bold text-xl">🚑 Ambulance</h3>
              <p className="text-2xl mt-3 font-bold">108</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default NearbyHelp;