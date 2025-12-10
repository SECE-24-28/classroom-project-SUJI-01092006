import React from "react";

export default function Apply() {
  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f7f8fa",
        padding: "40px",
      }}
    >
      <div
        style={{
          background: "white",
          width: "450px",
          margin: "auto",
          padding: "35px",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Confirm Your Recharge</h2>

        <p>
          <b>Plan Type:</b> Recommended
        </p>
        <p>
          <b>Price:</b> ₹199
        </p>

        <label>
          <b>Select Operator</b>
        </label>
        <select
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <option>-- Select Operator --</option>
          <option>Airtel</option>
          <option>Jio</option>
          <option>VI</option>
          <option>BSNL</option>
        </select>

        <label>
          <b>Enter Mobile Number</b>
        </label>
        <input
          type="text"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
          placeholder="Enter 10-digit number"
        />

        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "#ff6600",
            border: "none",
            color: "white",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}
