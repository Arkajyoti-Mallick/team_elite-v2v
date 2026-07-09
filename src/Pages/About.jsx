import {
  FaShieldAlt,
  FaBullseye,
  FaUsers,
  FaRobot,
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaGithub,
} from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 via-pink-500 to-purple-900 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            About SafeSphere
          </h1>

          <p className="mt-6 text-xl text-purple-100">
            An AI-powered Women's Safety & Security Platform developed for
            hackathons to provide emergency assistance, safe navigation,
            incident reporting, and community-driven safety.
          </p>

        </div>

      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex items-center gap-4 mb-6">
            <FaBullseye className="text-purple-700 text-5xl" />

            <h2 className="text-3xl font-bold">
              Our Mission
            </h2>
          </div>

          <p className="text-gray-700 leading-8 text-lg">
            SafeSphere aims to empower women by providing technology-driven
            safety solutions. Our platform combines emergency response,
            artificial intelligence, live location services, and community
            reporting into a single, user-friendly application.
          </p>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaExclamationTriangle className="text-red-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold">
              One-Tap SOS
            </h3>
            <p className="mt-3 text-gray-600">
              Instantly trigger emergency alerts with live location.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaMapMarkedAlt className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold">
              Safe Navigation
            </h3>
            <p className="mt-3 text-gray-600">
              Discover safer travel routes with nearby emergency services.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaRobot className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold">
              AI Assistant
            </h3>
            <p className="mt-3 text-gray-600">
              Receive AI-powered safety guidance during emergencies.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaShieldAlt className="text-orange-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold">
              Incident Reporting
            </h3>
            <p className="mt-3 text-gray-600">
              Report unsafe situations and help create safer communities.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaUsers className="text-purple-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold">
              Community Safety
            </h3>
            <p className="mt-3 text-gray-600">
              Build a trusted network for reporting and sharing safety updates.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaGithub className="text-gray-800 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold">
              Open Innovation
            </h3>
            <p className="mt-3 text-gray-600">
              Built using React, Firebase, Google Maps, and modern web
              technologies.
            </p>
          </div>

        </div>

      </section>

      {/* Team */}
      <section className="bg-purple-700 text-white py-16">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Team Elite
          </h2>

          <p className="mt-6 text-lg">
            Developed for the Women's Safety & Security Hackathon.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6">

            <div className="bg-white text-gray-800 rounded-xl p-5">
              <h3 className="font-bold">Hrit Panja</h3>
              <p className="text-sm mt-2">
                Full Stack Developer
              </p>
            </div>

            <div className="bg-white text-gray-800 rounded-xl p-5">
              <h3 className="font-bold">Adri Roy</h3>
              <p className="text-sm mt-2">
                UI/UX Designer
              </p>
            </div>

            <div className="bg-white text-gray-800 rounded-xl p-5">
              <h3 className="font-bold">Arkajyoti Mallick</h3>
              <p className="text-sm mt-2">
                Backend Developer
              </p>
            </div>
            
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">

        <h2 className="text-2xl font-bold">
          SafeSphere
        </h2>

        <p className="mt-3 text-gray-400">
          Empowering Women Through Technology
        </p>

        <p className="mt-5 text-sm text-gray-500">
          © 2026 SafeSphere | Team Elite
        </p>

      </footer>

    </div>
  );
}

export default About;