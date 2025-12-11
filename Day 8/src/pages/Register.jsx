import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirm: ""
  });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleRegister(e) {
    e.preventDefault();

    if (form.password !== form.confirm) {
      alert("Passwords do not match!");
      return;
    }

    // Save user temporarily
    localStorage.setItem("user", JSON.stringify(form));

    alert("Account Created Successfully!");

    // redirect to login page
    navigate("/login");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Create Account</h1>

        <form className="login-form" onSubmit={handleRegister}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={update}
            required
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            required
            placeholder="Enter your email"
          />

          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={update}
            required
            placeholder="Enter mobile number"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={update}
            required
            placeholder="Enter password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm"
            value={form.confirm}
            onChange={update}
            required
            placeholder="Re-enter password"
          />

          <button className="primary-button full-width" type="submit">
            Create Account
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "var(--accent)", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
