import React, { useState } from "react";

export default function History() {
  const [history] = useState(() => {
    return JSON.parse(localStorage.getItem("rechargeHistory")) || [];
  });

  return (
    <div className="history-page">
      <h2 className="history-title">Recharge History</h2>

      {history.length === 0 ? (
        <p className="history-empty">No recharge history available.</p>
      ) : (
        <div className="history-list">
          {history.map((item, index) => (
            <div key={index} className="history-card">
              <div className="history-plan">
                <h3>₹{item.price}</h3>
                <p>{item.Validity} • {item.data}</p>
                <p>{item.call}</p>
              </div>

              <div className="history-date">
                <p><strong>Date:</strong> {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
