import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

import {
  FaShieldAlt,
  FaMapMarkedAlt,
  FaRobot,
  FaUserCircle,
  FaExclamationTriangle,
  FaSignOutAlt,
  FaHandsHelping,
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  const cards = [
    {
      title: "SOS Emergency",
      icon: <FaExclamationTriangle size={45} className="text-red-500" />,
      path: "/sos",
      color: "bg-red-100",
    },
    {
      title: "Safe Route",
      icon: <FaMapMarkedAlt size={45} className="text-blue-600" />,
      path: "/safe-route",
      color: "bg-blue-100",
    },
    {
      title: "Report Incident",
      icon: <FaShieldAlt size={45} className="text-orange-500" />,
      path: "/report",
      color: "bg-orange-100",
    },
    {
      title: "AI Assistant",
      icon: <FaRobot size={45} className="text-green-600" />,
      path: "/ai",
      color: "bg-green-100",
    },
    {
      title: "Nearby Help",
      icon: <FaHandsHelping size={45} className="text-pink-600" />,
      path: "/nearby",
      color: "bg-pink-100",
    },
    {
      title: "Profile",
      icon: <FaUserCircle size={45} className="text-purple-600" />,
      path: "/profile",
      color: "bg-purple-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-purple-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            🛡 SafeSphere
          </h1>

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-4xl font-bold text-purple-700">
            Welcome to SafeSphere 👋
          </h2>

          <p className="text-gray-600 mt-3">
            Your personal women's safety dashboard.
            Access emergency services, AI assistance,
            safe navigation, and community support from here.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {cards.map((card, index) => (

            <Link
              key={index}
              to={card.path}
              className={`${card.color} rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300`}
            >

              <div className="mb-5">
                {card.icon}
              </div>

              <h2 className="text-2xl font-bold">
                {card.title}
              </h2>

              <p className="mt-3 text-gray-700">
                Click to open {card.title}.
              </p>

            </Link>

          ))}

        </div>

        {/* Emergency Button */}
        <div className="mt-12 flex justify-center">

          <Link
            to="/sos"
            className="bg-red-600 text-white text-2xl px-12 py-5 rounded-full shadow-xl hover:bg-red-700 animate-pulse"
          >
            🆘 EMERGENCY SOS
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;