const express = require('express');
const transactionController = require('../controllers/transactionController');
const transactionRoute = express.Router();

// geting all data of account
transactionRoute.get("/transactions", transactionController.getTransactions);

transactionRoute.post("/transaction", transactionController.addTransaction);

transactionRoute.delete("/transaction/:id", transactionController.deleteTransaction);




// export the enquiry router module
module.exports = transactionRoute