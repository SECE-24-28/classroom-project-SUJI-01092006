import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PlanDetails() {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    fetch(`https://69327f6ce5a9e342d26f6d83.mockapi.io/Rechargeapp/${id}`)
      .then((res) => res.json())
      .then((data) => setPlan(data));
  }, [id]);

  if (!plan) return <div>Loading...</div>;

  return (
    <div className="detail-container">
      <div className="tabs">
        <div className="tab active">RECOMMENDED</div>
        <div className="tab">UNLIMITED</div>
        <div className="tab">DATA</div>
        <div className="tab">SMART</div>
      </div>

      <div className="big-plan-card">
        <div className="big-price">₹{plan.Amount}</div>
        <div className="big-validity">{plan.Validity} • {plan.Description}</div>
        <p className="big-desc">Unlimited Calls</p>

        <button className="apply-btn">APPLY</button>
      </div>
    </div>
  );
}
