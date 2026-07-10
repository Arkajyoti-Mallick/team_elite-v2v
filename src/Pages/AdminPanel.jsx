import {
  FaUsers,
  FaExclamationTriangle,
  FaShieldAlt,
  FaChartBar,
  FaUserCheck,
} from "react-icons/fa";

function AdminPanel() {
  const stats = [
    {
      title: "Total Users",
      value: "124",
      icon: <FaUsers className="text-5xl text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      title: "SOS Alerts",
      value: "18",
      icon: <FaExclamationTriangle className="text-5xl text-red-600" />,
      color: "bg-red-100",
    },
    {
      title: "Incident Reports",
      value: "35",
      icon: <FaShieldAlt className="text-5xl text-orange-600" />,
      color: "bg-orange-100",
    },
    {
      title: "Verified Users",
      value: "96",
      icon: <FaUserCheck className="text-5xl text-green-600" />,
      color: "bg-green-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-indigo-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold">
            🛡 SafeSphere Admin Panel
          </h1>
          <p className="mt-2 text-indigo-100">
            Monitor users, SOS alerts, and incident reports.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`${item.color} rounded-2xl shadow-lg p-6`}
            >
              <div className="mb-4">
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold">
                {item.value}
              </h2>

              <p className="text-gray-700 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>

        {/* Recent SOS Alerts */}
        <div className="bg-white rounded-2xl shadow-lg mt-10 p-6">

          <h2 className="text-2xl font-bold mb-5">
            Recent SOS Alerts
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">User</th>

                <th className="text-left">Location</th>

                <th className="text-left">Time</th>

                <th className="text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-4">Priya Sharma</td>

                <td>Kolkata</td>

                <td>09:45 PM</td>

                <td className="text-red-600 font-semibold">
                  Active
                </td>

              </tr>

              <tr className="border-b">

                <td className="py-4">Ananya Das</td>

                <td>Howrah</td>

                <td>08:20 PM</td>

                <td className="text-green-600 font-semibold">
                  Resolved
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Incident Reports */}
        <div className="bg-white rounded-2xl shadow-lg mt-10 p-6">

          <h2 className="text-2xl font-bold mb-5">
            Latest Incident Reports
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">Incident</th>

                <th className="text-left">Location</th>

                <th className="text-left">Date</th>

                <th className="text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-4">
                  Harassment
                </td>

                <td>Salt Lake</td>

                <td>09-Jul-2026</td>

                <td className="text-yellow-600">
                  Pending
                </td>

              </tr>

              <tr>

                <td className="py-4">
                  Unsafe Area
                </td>

                <td>Dum Dum</td>

                <td>08-Jul-2026</td>

                <td className="text-green-600">
                  Verified
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Analytics Placeholder */}
        <div className="bg-white rounded-2xl shadow-lg mt-10 p-8 text-center">

          <FaChartBar className="text-7xl text-indigo-600 mx-auto mb-5" />

          <h2 className="text-3xl font-bold">
            Analytics Dashboard
          </h2>

          <p className="text-gray-600 mt-3">
            Charts and analytics will be connected to Firebase data in Phase 2.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminPanel;