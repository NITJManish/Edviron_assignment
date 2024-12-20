import React from "react";

const Filters = ({ onFilterChange }) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search (Order ID)"
          onChange={(e) => onFilterChange("search", e.target.value)}
        />
      </div>
      <div className="col-md-3">
        <select
          className="form-control"
          onChange={(e) => onFilterChange("status", e.target.value)}
        >
          <option value="">Filter by Status</option>
          <option value="Success">Success</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>
      <div className="col-md-3">
        <input
          type="date"
          className="form-control"
          onChange={(e) => onFilterChange("date", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filters;
