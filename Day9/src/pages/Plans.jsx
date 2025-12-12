import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Tabs you want
const FIXED_TABS = [
  "RECOMMENDED",
  "TRULY UNLIMITED",
  "SMART RECHARGE",
  "DATA",
  "UNLIMITED 5G"
];

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [activeTab, setActiveTab] = useState("RECOMMENDED");

  const navigate = useNavigate();

  // Load plans from API
  useEffect(() => {
    axios
      .get("https://69327f6ce5a9e342d26f6d83.mockapi.io/Rechargeapp")
      .then((res) => setPlans(res.data))
      .catch(() => setPlans([]));
  }, []);

  // Normalize for matching text
  function normalize(str) {
    if (!str) return "";
    return str.toString().trim().toUpperCase().replace(/\s+/g, " ");
  }

  // Filter plans by Type
  const filteredPlans = plans.filter(
    (p) => normalize(p.Type) === normalize(activeTab)
  );

  // Recharge Handler
  function handleRecharge(p) {
    const login = localStorage.getItem("loggedIn");
    if (!login) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    alert("Plan Applied Successfully!");

    const currentHistory =
      JSON.parse(localStorage.getItem("rechargeHistory")) || [];

    // SAVE FULL DETAILS
    const newEntry = {
      price: p.price,
      Validity: p.Validity,
      data: p.data,
      call: p.call,
      operator: "Airtel", // change if needed
      Type: p.Type,
      date: new Date().toLocaleDateString()
    };

    // Add to history
    currentHistory.push(newEntry);

    // Save back
    localStorage.setItem(
      "rechargeHistory",
      JSON.stringify(currentHistory)
    );

    // Redirect using React Router (NO ERROR)
    navigate("/history");
  }

  return (
    <div className="plans-page">
      <h2 className="plans-title">Select Plan</h2>

      {/* Tabs */}
      <div className="plans-tabs">
        {FIXED_TABS.map((tab) => (
          <button
            key={tab}
            className={`plan-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <hr />

      {/* Plans List */}
      <div className="plans-list">
        {filteredPlans.length === 0 ? (
          <p>No plans available in this category</p>
        ) : (
          filteredPlans.map((p) => (
            <div className="plan-box" key={p.id}>
              <div className="plan-info">
                <h3 className="plan-price">₹{p.price}</h3>
                <p className="plan-validity">
                  {p.Validity} • {p.data}
                </p>
                <p className="plan-calls">{p.call}</p>
              </div>

              <button
                className="apply-btn"
                onClick={() => handleRecharge(p)}
              >
                Recharge
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
