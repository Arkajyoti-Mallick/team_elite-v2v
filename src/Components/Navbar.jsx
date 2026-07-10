import { Link, NavLink } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <FaShieldAlt className="text-purple-700 text-4xl" />

            <div>
              <h1 className="text-3xl font-bold text-purple-700">
                SafeSphere
              </h1>

              <p className="text-sm text-gray-500">
                Women's Safety Platform
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold"
                  : "text-gray-700 hover:text-purple-700"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold"
                  : "text-gray-700 hover:text-purple-700"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold"
                  : "text-gray-700 hover:text-purple-700"
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/safe-route"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold"
                  : "text-gray-700 hover:text-purple-700"
              }
            >
              Safe Route
            </NavLink>

            <NavLink
              to="/report"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold"
                  : "text-gray-700 hover:text-purple-700"
              }
            >
              Report
            </NavLink>

            <NavLink
              to="/ai"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold"
                  : "text-gray-700 hover:text-purple-700"
              }
            >
              AI Assistant
            </NavLink>

          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">

            <Link
              to="/login"
              className="border border-purple-700 text-purple-700 px-5 py-2 rounded-lg hover:bg-purple-700 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition"
            >
              Sign Up
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;