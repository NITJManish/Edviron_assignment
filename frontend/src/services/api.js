import axios from "axios";

export const fetchTransactions = () => axios.get("/transactions");
export const checkTransactionStatus = (orderId) =>
  axios.get(`/check-status?order_id=${orderId}`);
