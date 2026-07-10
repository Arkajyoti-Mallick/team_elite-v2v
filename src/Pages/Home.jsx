import { Link } from "react-router-dom";
import { FaShieldAlt, FaMapMarkedAlt, FaRobot, FaPhoneAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-3xl font-bold text-purple-700">
            🛡 SafeSphere
          </h1>

          <div className="space-x-4">
            <Link
              to="/login"
              className="px-5 py-2 rounded-lg border border-purple-600 text-purple-700 hover:bg-purple-700 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-purple-700 via-pink-500 to-purple-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center">

          <div className="lg:w-1/2">

            <h1 className="text-5xl font-extrabold leading-tight">
              Women's Safety,
              <br />
              Powered by Technology
            </h1>

            <p className="mt-6 text-lg text-purple-100">
              SafeSphere is an AI-powered women's safety platform that provides
              one-tap SOS alerts, safe navigation, emergency contacts, AI
              assistance, and community safety reporting—all in one place.
            </p>

            <div className="mt-10 flex gap-5 flex-wrap">

              <Link
                to="/signup"
                className="bg-white text-purple-700 font-bold px-8 py-3 rounded-lg hover:scale-105 transition"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-700 transition"
              >
                Login
              </Link>

            </div>

          </div>

          <div className="lg:w-1/2 mt-14 lg:mt-0 flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800"
              alt="Women's Safety"
              className="rounded-3xl shadow-2xl w-full max-w-md"
            />

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="py-20 px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-800">
            Our Features
          </h2>

          <p className="text-gray-600 mt-4">
            Everything you need to stay safe.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 max-w-7xl mx-auto">

          {/* Card */}

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition">

            <FaPhoneAlt className="text-5xl text-red-500 mx-auto mb-5" />

            <h3 className="font-bold text-xl">
              One-Tap SOS
            </h3>

            <p className="text-gray-600 mt-3">
              Send instant emergency alerts with live location to trusted
              contacts.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition">

            <FaMapMarkedAlt className="text-5xl text-blue-500 mx-auto mb-5" />

            <h3 className="font-bold text-xl">
              Safe Navigation
            </h3>

            <p className="text-gray-600 mt-3">
              Discover safer routes with nearby police stations and hospitals.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition">

            <FaRobot className="text-5xl text-green-500 mx-auto mb-5" />

            <h3 className="font-bold text-xl">
              AI Assistant
            </h3>

            <p className="text-gray-600 mt-3">
              Get AI-powered safety guidance during emergency situations.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition">

            <FaShieldAlt className="text-5xl text-purple-600 mx-auto mb-5" />

            <h3 className="font-bold text-xl">
              Community Protection
            </h3>

            <p className="text-gray-600 mt-3">
              Report incidents anonymously and help make communities safer.
            </p>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="bg-purple-100 py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-purple-800">
            Why SafeSphere?
          </h2>

          <p className="mt-8 text-lg text-gray-700 leading-8">

            SafeSphere combines Artificial Intelligence, emergency response,
            real-time location tracking, and community collaboration into one
            platform. Our mission is to empower women with confidence and
            immediate access to help whenever they need it.

          </p>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-20 text-center">

        <h2 className="text-4xl font-bold">
          Your Safety Starts Today
        </h2>

        <p className="mt-5 text-gray-600">
          Join thousands of users making safety smarter and faster.
        </p>

        <Link
          to="/signup"
          className="inline-block mt-8 bg-purple-700 text-white px-10 py-4 rounded-lg text-lg hover:bg-purple-800 transition"
        >
          Create Free Account
        </Link>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-gray-900 text-gray-300 py-8">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-2xl font-bold text-white">
            SafeSphere
          </h2>

          <p className="mt-3">
            AI-Powered Women's Safety & Security Platform
          </p>

          <p className="mt-5 text-sm text-gray-500">
            © 2026 SafeSphere. Built with ❤️ by Team Elite.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Home;