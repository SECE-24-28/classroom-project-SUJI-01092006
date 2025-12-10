import React from "react";

export default function Support() {
  return (
    <div className="bg-gray-100 p-10">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4 text-orange-600">Help & Support</h1>

        <p className="text-gray-700 mb-6">
          If you face any issue with recharge, payment, login, refunds or plans,
          feel free to contact us.
        </p>

        <h2 className="text-xl font-semibold mt-4">📞 Customer Support</h2>
        <p className="text-gray-700">Phone: <b>1800-123-456</b></p>

        <h2 className="text-xl font-semibold mt-6">📧 Email Support</h2>
        <p className="text-gray-700">support@rechargeapp.com</p>

        <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg">
          Back
        </button>
      </div>
    </div>
  );
}
