import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    fetch("https://69327f6ce5a9e342d26f6d83.mockapi.io/Rechargeapp")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch(() => setPlans([]));
  }, []);

  // Normalizing function
  function normalize(str) {
    if (!str) return "";
    return str.toString().trim().toUpperCase().replace(/\s+/g, " ");
  }

  // Filter by Type field (your API)
  const filteredPlans = plans.filter(
    (p) => normalize(p.Type) === normalize(activeTab)
  );

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
                onClick={() => {
                  const login = localStorage.getItem("loggedIn");
                  if (!login) {
                    alert("Please login first!");
                    return;
                  }

                  alert("Plan Applied Successfully!");

                  // ⬇️ Redirect to home page
                  window.location.href = "/";
                }}
              >
                APPLY
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
