import transacModel from "../models/transacModel.js";


// Fetch All Transactions
export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transacModel.find();
    res.status(200).json({message:"data fetch",transactions:transactions});
  } catch (err) {
    res.status(500).json({ message: 'Error fetching transactions', error: err });
  }
};

// Fetch Transactions by School
export const getTransactionsBySchool = async (req, res) => {
  const { school_id } = req.params;
  try {
    const transactions = await transacModel.find({ school_id });
    res.json({transactions:transactions});
  } catch (err) {
    res.status(500).json({ message: 'Error fetching school transactions', error: err });
  }
};

// Check Transaction Status
export const checkTransactionStatus = async (req, res) => {
  const { custom_order_id } = req.query;
  try {
    const transaction = await transacModel.findOne({ custom_order_id });
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.json({ status: transaction.status });
  } catch (err) {
    res.status(500).json({ message: 'Error checking transaction status', error: err });
  }
};

// Webhook for Status Updates
export const updateTransactionStatus = async (req, res) => {
  const { order_info } = req.body;
  try {
    const transaction = await transacModel.findOneAndUpdate(
      { collect_id: order_info.order_id },
      { status: req.body.status },
      { new: true }
    );
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: 'Error updating transaction', error: err });
  }
};

// Manual Status Update
export const manualUpdateStatus = async (req, res) => {
  const { custom_order_id, status } = req.body;
  try {
    const transaction = await transacModel.findOneAndUpdate(
      { custom_order_id },
      { status },
      { new: true }
    );
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: 'Error updating status', error: err });
  }
};
