import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TransactionStatus from "./components/TransactionStatus";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/check-status" element={<TransactionStatus />} />
    </Routes>
  </Router>
);

export default App;
