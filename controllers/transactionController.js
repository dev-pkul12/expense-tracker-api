// Importing enquiry from models
const transactionModel = require("../models/transactionModel");
require("dotenv").config();

// @desc   Get all transaction
// @route  GET api/transaction
// @access Public
const getTransactions = async (req, res) => {
    try {
        const transaction = await transactionModel.find()
        return res.status(200).json(transaction)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

// @desc   Add new transaction
// @route  POST api/transaction
// @access Public
const addTransaction = async (req, res) => {
    const { text, amount } = req.body;
    try {
        const transactionData = await transactionModel.create(req.body)
        res.status(200).json(transactionData)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

// @desc   Delete single transaction
// @route  DELETE api/transaction/:id
// @access Public
const deleteTransaction = async (req, res) => {
    const _id = req.params.id
    try {
        const deleteData = await transactionModel.findByIdAndDelete(_id)
        res.status(200).send("Delete transaction")
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

// exporting the module with variable names
module.exports = {
    getTransactions,
    addTransaction,
    deleteTransaction
};
