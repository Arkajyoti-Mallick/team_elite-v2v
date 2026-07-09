import { useState } from "react";
import {
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaCamera,
  FaPaperPlane,
} from "react-icons/fa";

function ReportIncident() {
  const [formData, setFormData] = useState({
    incidentType: "",
    location: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Incident Report Submitted Successfully!\n\n(In Phase 2, this data will be saved to Firebase.)");

    setFormData({
      incidentType: "",
      location: "",
      description: "",
      date: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-orange-600 text-white py-6 shadow-lg">
        <h1 className="text-4xl font-bold text-center">
          🚨 Report Incident
        </h1>
      </div>

      <div className="max-w-4xl mx-auto py-10 px-6">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <div className="flex items-center gap-4 mb-8">
            <FaExclamationTriangle className="text-orange-600 text-5xl" />

            <div>
              <h2 className="text-3xl font-bold">
                Report an Incident
              </h2>

              <p className="text-gray-600">
                Help build a safer community by reporting incidents.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Incident Type */}
            <div>
              <label className="font-semibold block mb-2">
                Incident Type
              </label>

              <select
                name="incidentType"
                value={formData.incidentType}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              >
                <option value="">Select Incident</option>
                <option>Harassment</option>
                <option>Stalking</option>
                <option>Theft</option>
                <option>Violence</option>
                <option>Unsafe Area</option>
                <option>Other</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="font-semibold block mb-2">
                Location
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaMapMarkerAlt className="text-red-500" />

                <input
                  type="text"
                  name="location"
                  placeholder="Enter Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="font-semibold block mb-2">
                Date
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="font-semibold block mb-2">
                Description
              </label>

              <textarea
                rows="5"
                name="description"
                placeholder="Describe what happened..."
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
                required
              />
            </div>

            {/* Upload */}
            <div>
              <label className="font-semibold block mb-2">
                Upload Image or Video
              </label>

              <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                <FaCamera className="text-blue-600 text-xl" />

                <span>Select File</span>

                <input
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                />
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 flex justify-center items-center gap-3"
            >
              <FaPaperPlane />
              Submit Report
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ReportIncident;