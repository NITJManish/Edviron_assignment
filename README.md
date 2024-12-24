Project Overview

This project is built using the following technologies:

Backend: Node.js with Express

Frontend: React.js with Bootstrap

Database: MongoDB

Steps to Run the Project

1. Setup the Backend

Navigate to the parent directory of both the frontend and backend folders in your terminal.

Enter the backend folder using the following command:

cd project-root

Install the required dependencies:

npm install

Run the backend code:

For development mode:

npm run dev

For production mode:

npm run prod

2. Setup the Frontend

Navigate to the frontend folder using the following command:

cd frontend

Install the required dependencies:

npm install

Start the frontend server:

npm start

Notes:

Ensure that MongoDB is running and properly connected to the backend.

The terminal paths should reflect the correct project structure, where both the frontend and backend folders are at the same level in the directory tree.

Project Structure

project-root/
  |- backend/
  |- frontend/

Follow these steps to successfully run the project and access the application.

## explain API endpoint
1. Fetch All Transactions
Endpoint: GET /transactions
Description: Fetches all transaction records from the database.
Response:
Status 200: Returns all transactions in an array.
Status 500: Returns an error if fetching fails.
Postman Test:
Method: GET
URL: http://localhost:4000/api/transactions

2. Fetch Transactions by School
Endpoint: GET /transactions/school/:school_id
Description: Fetches all transactions associated with a specific school based on school_id.
Parameters:
school_id (in URL): ID of the school.
Response:
Status 200: Returns an array of transactions for the given school.
Status 500: Returns an error if fetching fails.
Postman Test:
Method: GET
URL: http://localhost:4000/api/transactions/school/school_id

3. Check Transaction Status
Endpoint: GET /transactions/status
Description: Checks the status of a transaction using custom_order_id.
Query Parameters:
custom_order_id (in query): Custom order ID of the transaction.
Response:
Status 200: Returns the status of the transaction.
Status 404: Returns a "Transaction not found" message if no matching transaction exists.
Status 500: Returns an error if checking fails.
Postman Test:
Method: GET
URL: http://localhost:4000/api/transactions/status?custom_order_id=<custom_order_id>

4. Webhook for Status Updates
Endpoint: POST /transactions/update-status
Description: Updates the status of a transaction based on webhook data.
Response:
Status 200: Returns the updated transaction object.
Status 500: Returns an error if the update fails.
Postman Test:
Method: POST
URL: http://localhost:4000/api/transactions/webhook

5. Manual Status Update
Endpoint: POST /transactions/manual-update-status
Description: Updates the status of a transaction manually using custom_order_id and the new status.

Response:
Status 200: Returns the updated transaction object.
Status 500: Returns an error if the update fails.
Postman Test:
Method: POST
URL: http://localhost:4000/api/transactions/manual-update

## frontend Design

## Dashboard
![image](https://github.com/user-attachments/assets/c2617131-b5ee-4af1-959d-d2532279d64a)

## page for check transaction status
![image](https://github.com/user-attachments/assets/46beee22-3f38-4470-a2e1-e1b58ca0c49f)






