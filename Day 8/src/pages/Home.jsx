// pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import homeImg from "../assets/homeimage.png.png";

export default function Home() {
  const navigate = useNavigate();

  function handleProceed() {
    const login = localStorage.getItem("loggedIn");
    if (!login) {
      alert("Please login first!");
      navigate("/login");
      return;
    }
    navigate("/plans");
  }

  return (
    <div className="home-container">

      {/* ===== HERO SECTION ===== */}
      <section className="recharge-hero">
        <div className="recharge-left">
          <h1 className="recharge-title">Recharge Made Easy</h1>
          <p className="recharge-sub">Fast, secure & instant recharge for all mobile operators.</p>
          <p className="recharge-desc">Get exclusive offers and cashback on every mobile recharge.</p>

          <button className="hero-btn" onClick={() => navigate("/plans")}>
            View Plans
          </button>
        </div>

        <div className="recharge-right">
          <img src={homeImg} alt="Recharge banner" className="hero-image" />
        </div>
      </section>

      {/* ===== RECHARGE FORM SECTION ===== */}
      <section className="recharge-section">
        <div className="form-card">
          <h3 className="section-heading">Enter Details</h3>

          <div className="recharge-form">
            <label>
              Mobile Number
              <input type="text" placeholder="Enter number" />
            </label>

            <label>
              Operator
              <select>
                <option>Airtel</option>
                <option>Jio</option>
                <option>VI</option>
                <option>BSNL</option>
              </select>
            </label>

            <button className="primary-button full-width" onClick={handleProceed}>
              Proceed
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/*      🔥 NEW DASHBOARD SECTION YOU REQUESTED BELOW       */}
      {/* ======================================================= */}

      <section className="dashboard-section">

        <h2 className="dashboard-title">Welcome to your Recharge Dashboard</h2>
        <p className="dashboard-sub">
          Manage your recharges, view offers and track recent activity.
        </p>

        {/* RECENT TRANSACTIONS */}
        <div className="dashboard-card">
          <h3>Recent Transactions</h3>
          <ul className="transaction-list">
            <li>₹199 Airtel Recharge — <span className="success">Success</span> • Dec 5, 2025</li>
            <li>₹239 Jio Recharge — <span className="success">Success</span> • Nov 28, 2025</li>
            <li>₹149 VI Recharge — <span className="failed">Failed</span> • Nov 21, 2025</li>
          </ul>
        </div>

        {/* LATEST OFFERS */}
        <div className="dashboard-card">
          <h3>Latest Offers</h3>
          <ul className="offer-list">
            <li>1GB Extra Data on recharge above ₹299</li>
            <li>₹30 Cashback on first recharge</li>
            <li>Unlimited Calls + 2GB/day on ₹399 plan</li>
          </ul>
        </div>

        {/* ABOUT SECTION */}
        <div className="dashboard-card">
          <p>
            With Recharge App, managing your mobile recharges has never been easier.
            We offer a user-friendly interface that helps you quickly browse, compare,
            and choose the best recharge plans across all major telecom operators.
            Whether you are looking for prepaid packs, unlimited calling plans, or
            data add-ons, everything is organized for your convenience.
          </p>

          <p>
            Our system provides real-time updates on offers and special deals so that
            you never miss an opportunity to save. You can also view your previous
            recharge transactions, access customer support, and receive personalized
            plan recommendations based on your usage.
          </p>

          <p>
            Enjoy secure payments, instant recharge confirmations, and a smooth overall
            experience—all in one place.
          </p>
        </div>

      </section>
    </div>
  );
}
