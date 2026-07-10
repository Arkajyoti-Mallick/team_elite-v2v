import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Login with Email & Password
  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  // Login with Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-700 via-pink-500 to-purple-800 px-4">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-purple-700">
          SafeSphere
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to continue
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mt-5 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-6 space-y-5">

          <div>
            <label className="block mb-2 font-semibold">
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

            <label className="block mb-2 font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
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
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-5 border py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Continue with Google
        </button>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-700 font-semibold"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;