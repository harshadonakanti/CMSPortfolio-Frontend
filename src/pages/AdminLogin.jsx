import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/admin-login",
        { username, password }
      );

      if (response.data.success) {
        login({
          username: response.data.username,
          _id: response.data._id,
        });


        localStorage.setItem("token", response.data.token);

        navigate("/admin");
      }

    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || "Invalid username or password");
      } else {
        setError("Server error. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gray-300">
      <div className="border shadow p-6 w-80 bg-white rounded-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>

        {error && (
          <p className="text-red-500 mb-3 text-center font-semibold">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black">User Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-xl"
              placeholder="Enter the username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-black">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-xl"
              placeholder="Enter the password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-2xl font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
