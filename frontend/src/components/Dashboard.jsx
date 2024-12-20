import React, { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./Filters";
import Pagination from "./Pagination";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    date: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  // Fetch transactions from the API
  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await axios.get("/transactions");
      setTransactions(response.data);
      setFilteredTransactions(response.data); // Initialize filtered transactions
    };

    fetchTransactions();
  }, []);

  // Update filter values and apply filters
  const onFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  // Apply filters whenever the filter state changes
  useEffect(() => {
    let filteredData = transactions;

    // Filter by search (Order ID)
    if (filters.search) {
      filteredData = filteredData.filter((transaction) =>
        transaction.order_id.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Filter by status
    if (filters.status) {
      filteredData = filteredData.filter(
        (transaction) => transaction.status === filters.status
      );
    }

    // Filter by date
    if (filters.date) {
      filteredData = filteredData.filter(
        (transaction) =>
          new Date(transaction.date_time).toDateString() ===
          new Date(filters.date).toDateString()
      );
    }

    setFilteredTransactions(filteredData);
    setCurrentPage(1); // Reset to the first page when filters are applied
  }, [filters, transactions]);

  // Pagination logic
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);

  // Handle page changes
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <h2>Transaction History</h2>
      <Filters onFilterChange={onFilterChange} />
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Institute Name</th>
            <th>Date & Time</th>
            <th>Order ID</th>
            <th>Order Amt</th>
            <th>Transaction Amt</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Student Name</th>
            <th>Phone No.</th>
            <th>Vendor Amount</th>
          </tr>
        </thead>
        <tbody>
         
          <tr>
            <td>01</td>
            <td>NIT Jalandhar</td>
            <td>20/12/2024</td>
            <td>927480</td>
            <td>$950</td>
            <td>$950</td>
            <td>PhonePay</td>
            <td>pending</td>
            <td>Manish Sharma</td>
            <td>7424961745</td>
            <td>1000</td>
          </tr>
          
          {currentTransactions.map((transaction, index) => (
            <tr key={transaction.id}>
              <td>{indexOfFirstTransaction + index + 1}</td>
              <td>{transaction.institute_name}</td>
              <td>{transaction.date_time}</td>
              <td>{transaction.order_id}</td>
              <td>{transaction.order_amt}</td>
              <td>{transaction.transaction_amt}</td>
              <td>{transaction.payment_method}</td>
              <td>{transaction.status}</td>
              <td>{transaction.student_name || "NA"}</td>
              <td>{transaction.phone_no || "NA"}</td>
              <td>{transaction.vendor_amt || "NA"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default Dashboard;








