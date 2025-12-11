// pages/Contact.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();

    alert("Message sent successfully!");

    // Clear the form
    setForm({ name: "", email: "", message: "" });

    // ⬇️ Redirect to Home page
    navigate("/");
  }

  return (
    <div className="contact-page">
      <div className="form-card">
        <h3 className="section-heading">Contact Us</h3>

        <form className="recharge-form" onSubmit={submit}>
          <label>
            Name
            <input
              name="name"
              value={form.name}
              onChange={update}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={update}
              required
            />
          </label>

          <button className="primary-button full-width" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
