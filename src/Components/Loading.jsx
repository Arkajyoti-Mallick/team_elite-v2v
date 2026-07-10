import { FaShieldAlt } from "react-icons/fa";

function Loading({
  message = "Loading...",
  fullScreen = true,
}) {
  return (
    <div
      className={`${
        fullScreen
          ? "min-h-screen"
          : "h-80"
      } flex items-center justify-center bg-gray-100`}
    >
      <div className="text-center">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-purple-700 flex items-center justify-center animate-pulse shadow-xl">
            <FaShieldAlt
              className="text-white"
              size={42}
            />
          </div>
        </div>

        {/* Spinner */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 border-4 border-purple-700 border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-purple-700">
          SafeSphere
        </h2>

        {/* Message */}
        <p className="text-gray-600 mt-3 text-lg">
          {message}
        </p>

      </div>
    </div>
  );
}

export default Loading;