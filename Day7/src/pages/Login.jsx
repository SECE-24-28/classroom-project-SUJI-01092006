import React from "react";

export default function Login() {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <label className="font-medium">Username</label>
        <input className="w-full p-2 border rounded mb-3" placeholder="Enter Username" />

        <label className="font-medium">Password</label>
        <input className="w-full p-2 border rounded mb-4" type="password" placeholder="Enter Password" />

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg shadow mt-2">
          Login
        </button>

        <p className="text-center text-sm mt-4">Don't have an account?</p>

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg shadow mt-2">
          Create Account
        </button>
      </div>
    </div>
  );
}
