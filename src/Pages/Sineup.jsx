import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Email & Password Signup
  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save user's display name
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      alert("Account Created Successfully!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  // Google Signup
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign Up Successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 px-4">

      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-purple-700">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join SafeSphere Today
        </p>

        {error && (
          <div className="mt-5 bg-red-100 text-red-600 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="mt-6 space-y-5">

          <div>
            <label className="font-semibold block mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <button
          onClick={handleGoogleSignup}
          className="w-full mt-5 border py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Continue with Google
        </button>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-700 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;