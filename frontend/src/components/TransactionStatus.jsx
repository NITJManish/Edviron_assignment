import React, { useState } from "react";
import axios from "axios";

const TransactionStatus = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState(null);

  const checkStatus = async () => {
    const response = await axios.get(`/check-status?order_id=${orderId}`);
    setStatus(response.data.status);
  };

  return (
    <div className="container mt-4">
      <h3>Check Transaction Status</h3>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button className="btn btn-primary" onClick={checkStatus}>
        Check Status
      </button>
      {status && <p className="mt-3">Transaction Status: {status}</p>}
    </div>
  );
};

export default TransactionStatus;
