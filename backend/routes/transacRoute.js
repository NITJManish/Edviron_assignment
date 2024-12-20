import express from "express";
import { checkTransactionStatus, 
    getAllTransactions, getTransactionsBySchool, 
    manualUpdateStatus, updateTransactionStatus } from "../controllers/transacController.js";
import { verifyToken } from "../utils/transacMiddleware.js";
const router = express.Router();

router.route('/').get( getAllTransactions);
router.route('/school/:school_id').get(verifyToken, getTransactionsBySchool);
router.route('/check-status').get(verifyToken, checkTransactionStatus);
router.route('/webhook').post(updateTransactionStatus);
router.route('/manual-update').post(verifyToken, manualUpdateStatus);

export default router;
