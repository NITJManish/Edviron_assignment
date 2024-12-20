import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    collect_id: {
      type: String,
      required: [true, "Please enter collect_id"],
      
    },
    school_id: {
      type: String,
      required: [true, "Please enter school_id"],
    },
    gateway: {
      type: String,
      required: [true, "Please enter gateway"],
    },
    order_amount: {
      type: Number,
      required: [true, "Please enter order amount"],
      
    },
    transaction_amount: {
      type: Number,
      required: [true, "Please enter transaction_amount"],
    },
    status: {
      type: String,
      required: [true, "Please enter status"],
    },
    custom_order_id: {
        type: String,
        required: [true, "Please enter custom_order_id"],
      },
    
  },
);

export default mongoose.model("Transaction", transactionSchema);

