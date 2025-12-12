// src/pages/Login.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // Validation schema
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>

        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            // values is available here and should NOT cause errors
            try {
              // Example: simple login flow (replace with real auth as needed)
              localStorage.setItem("loggedIn", "true");
              alert("Login Successful!");
              navigate("/"); // go to home
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="login-form">
              <label>Username</label>
              <Field
                name="username"
                placeholder="Enter Username"
                className="input-field"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="error-text"
              />

              <label>Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Enter Password"
                className="input-field"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-text"
              />

              <button
                type="submit"
                className="primary-button full-width"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
