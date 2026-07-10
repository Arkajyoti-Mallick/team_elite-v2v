import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 via-pink-500 to-purple-900 px-6">

      <div className="bg-white rounded-3xl shadow-2xl p-10 text-center max-w-lg w-full">

        <FaExclamationTriangle
          className="text-yellow-500 mx-auto mb-6"
          size={80}
        />

        <h1 className="text-7xl font-bold text-purple-700">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-5">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 mt-8 bg-purple-700 text-white px-8 py-3 rounded-xl hover:bg-purple-800 transition"
        >
          <FaHome />
          Go Back Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;
