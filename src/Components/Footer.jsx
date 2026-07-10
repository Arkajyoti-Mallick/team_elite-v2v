import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <FaShieldAlt className="text-4xl text-pink-500" />

              <h2 className="text-3xl font-bold">
                SafeSphere
              </h2>

            </div>

            <p className="mt-5 text-gray-400 leading-7">
              SafeSphere is an AI-powered women's safety platform
              designed to provide emergency assistance, safe navigation,
              AI support, and community-driven security.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-400 hover:text-white"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/safe-route"
                  className="text-gray-400 hover:text-white"
                >
                  Safe Route
                </Link>
              </li>

              <li>
                <Link
                  to="/report"
                  className="text-gray-400 hover:text-white"
                >
                  Report Incident
                </Link>
              </li>

            </ul>

          </div>

          {/* Emergency Contacts */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Emergency Numbers
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-500" />
                <span>Emergency: 112</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-pink-500" />
                <span>Women Helpline: 181</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500" />
                <span>Ambulance: 108</span>
              </div>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>support@safesphere.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Kolkata, West Bengal, India</span>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} SafeSphere. All Rights Reserved.
          </p>

          <p className="text-gray-400 mt-3 md:mt-0">
            Developed by <span className="font-semibold text-white">Team Elite</span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
