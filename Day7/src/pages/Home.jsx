import React from "react";
import homeImg from "../assets/homeimage.png";
import promoImg from "../assets/recimg2.png";


export default function Home() {
  return (
    <div style={{ background: "#f7f8fa", fontFamily: "Arial" }}>

      {/* HEADER */}
      <header
        style={{
          background: "white",
          padding: "15px 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img src={homeImg} style={{ width: "120px" }} alt="" />
          <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
            Recharge App
          </h1>
        </div>

        <span style={{ color: "#ff6600", fontSize: "18px" }}>
          Login / Register
        </span>
      </header>

      <div style={{ display: "flex", padding: "20px", gap: "25px" }}>

        {/* SIDEBAR */}
        <div
          style={{
            width: "230px",
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          <p style={{ fontSize: "20px", marginBottom: "20px" }}>Home</p>
          <p style={{ fontSize: "20px", marginBottom: "20px" }}>Help & Support</p>

          <img
            src={promoImg}
            style={{
              width: "100%",
              borderRadius: "12px",
              marginTop: "20px",
            }}
            alt=""
          />
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              marginBottom: "25px",
            }}
          >
            <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
              Select Plan
            </h2>

            {/* Tabs */}
            <div
              style={{
                display: "flex",
                gap: "30px",
                borderBottom: "2px solid #eee",
                paddingBottom: "10px",
                fontWeight: "bold",
              }}
            >
              <span style={{ color: "#ff6600", borderBottom: "3px solid #ff6600" }}>
                RECOMMENDED
              </span>
              <span style={{ color: "gray" }}>TRULY UNLIMITED</span>
              <span style={{ color: "gray" }}>SMART RECHARGE</span>
              <span style={{ color: "gray" }}>DATA</span>
              <span style={{ color: "gray" }}>UNLIMITED 5G</span>
            </div>

            {/* STATIC PLANS */}
            <div style={{ marginTop: "20px" }}>

              {/* Plan 1 */}
              <div
                style={{
                  background: "white",
                  border: "1px solid #ddd",
                  padding: "15px",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <div>
                  <h3>₹219</h3>
                  <p>28 Days • 1 GB/day</p>
                  <p>Unlimited Calls</p>
                </div>
                <button
                  style={{
                    background: "#ff6600",
                    color: "white",
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "default",
                  }}
                >
                  APPLY
                </button>
              </div>

              {/* Plan 2 */}
              <div
                style={{
                  background: "white",
                  border: "1px solid #ddd",
                  padding: "15px",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <div>
                  <h3>₹299</h3>
                  <p>28 Days • 1.5 GB/day</p>
                  <p>Unlimited Calls</p>
                </div>
                <button
                  style={{
                    background: "#ff6600",
                    color: "white",
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "default",
                  }}
                >
                  APPLY
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
