// pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // Save login session
    localStorage.setItem("loggedIn", "true");

    alert("Login Successful!");

    // ⬇️ GO TO HOME PAGE AFTER LOGIN
    navigate("/");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>

        <form onSubmit={handleLogin} className="login-form">
          <label>Username</label>
          <input
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="primary-button full-width" type="submit">
            Login
          </button>
          <p style={{ textAlign: "center", marginTop: "10px" }}>
  Don't have an account?{" "}
  <span
    style={{ color: "var(--accent)", cursor: "pointer" }}
    onClick={() => navigate("/register")}
  >
    Create Account
  </span>
</p>

        </form>
      </div>
    </div>
  );
}
