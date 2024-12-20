import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDatabase } from "./config/DBconnect.js";
import csvtojson from 'csvtojson';
import fs from 'fs';


dotenv.config({ path: "backend/config/config.env" });

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());

// Connect to MongoDB
connectDatabase();

// // Import CSV data
// const importCSVData = async () => {
//   const csvFiles = ['./data/students.csv', './data/fee.csv'];
//   for (const file of csvFiles) {
//     const jsonData = await csvtojson().fromFile(file);
//     console.log(`Imported ${file}:`, jsonData);
//     // Save to MongoDB if necessary
//   }
// };
// importCSVData();

// Routes
import transacRoute from './routes/transacRoute.js'
app.use('/api/transactions', transacRoute);



if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}
// Start server
app.listen(process.env.PORT, () => {
    console.log(
      `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
    );
  });
