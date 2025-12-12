import React, { useMemo } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function Admin() {
  // Load recharge history
  const history = JSON.parse(localStorage.getItem("rechargeHistory")) || [];

  // Compute dashboard stats
  const stats = useMemo(() => {
    const today = new Date().toLocaleDateString();

    return {
      totalRecharges: history.length,
      todayRecharges: history.filter((h) => h.date === today).length,
      recent: history.slice(-5).reverse()
    };
  }, [history]);

  // ========= Line Chart Data =========
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Recharges",
        data: [5, 10, 7, 14, 9, 18, 12],
        borderColor: "#d74012",
        backgroundColor: "rgba(215, 64, 18, 0.25)",
        tension: 0.4,
      },
    ],
  };

  // ========= Operator Share Chart =========
  const doughnutData = {
    labels: ["Airtel", "Jio", "VI", "BSNL"],
    datasets: [
      {
        data: [40, 30, 15, 15],
        backgroundColor: ["#ef4444", "#2563eb", "#facc15", "#10b981"],
      },
    ],
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Dashboard</h1>

      {/* ========= STATS CARDS ========= */}
      <div className="admin-stats">
        <div className="stat-card">
          <h3>{stats.totalRecharges}</h3>
          <p>Total Recharges</p>
        </div>

        <div className="stat-card">
          <h3>{stats.todayRecharges}</h3>
          <p>Today's Recharges</p>
        </div>
      </div>

      {/* ========= CHARTS ========= */}
      <div className="charts-row">
        <div className="chart-card">
          <h3>Recharge Trends</h3>
          <Line data={lineData} />
        </div>

        <div className="chart-card">
          <h3>Operator Share</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      {/* ========= RECENT RECHARGES ========= */}
      <div className="recent-card">
        <h2>Recent Recharges</h2>

        {stats.recent.length === 0 ? (
          <p>No recent activity.</p>
        ) : (
          <ul className="recent-list">
            {stats.recent.map((item, index) => (
              <li key={index} className="recent-item">
                
                {/* Price + Operator */}
                <strong>₹{item.price}</strong> — {item.operator}

                {/* Validity + Data + Calls */}
                <p>
                  {item.data} • {item.Validity} • {item.call}
                </p>

                {/* Date */}
                <small>{item.date}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
