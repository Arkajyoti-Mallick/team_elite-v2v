import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaExclamationTriangle,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaRobot,
  FaHandsHelping,
  FaUserCircle,
  FaUserShield,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "SOS Emergency",
      path: "/sos",
      icon: <FaExclamationTriangle />,
    },
    {
      name: "Safe Route",
      path: "/safe-route",
      icon: <FaMapMarkedAlt />,
    },
    {
      name: "Report Incident",
      path: "/report",
      icon: <FaShieldAlt />,
    },
    {
      name: "AI Assistant",
      path: "/ai",
      icon: <FaRobot />,
    },
    {
      name: "Nearby Help",
      path: "/nearby",
      icon: <FaHandsHelping />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUserCircle />,
    },
    {
      name: "Admin Panel",
      path: "/admin",
      icon: <FaUserShield />,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-gradient-to-b from-purple-700 to-indigo-900 text-white shadow-2xl">

      {/* Logo */}
      <div className="p-6 border-b border-purple-500">
        <h1 className="text-3xl font-bold">
          🛡 SafeSphere
        </h1>

        <p className="text-purple-200 mt-2">
          Women's Safety Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-6">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 transition ${
                isActive
                  ? "bg-white text-purple-700 font-semibold"
                  : "hover:bg-purple-600"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.name}</span>
          </NavLink>
        ))}

      </nav>

      {/* Bottom */}
      <div className="absolute bottom-0 w-72 border-t border-purple-500 p-6">

        <div className="bg-purple-600 rounded-xl p-4">

          <h3 className="font-bold">
            Emergency
          </h3>

          <p className="text-sm text-purple-100 mt-2">
            Press the SOS button immediately if you are in danger.
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;