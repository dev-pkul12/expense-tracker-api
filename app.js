const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const app = express()

require('./db/conn')
require("dotenv").config();
const port = process.env.PORT || 8000

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("images"));

// Import Router file
var transactionRoute = require("./routes/transactionRoutes");

// All rountes
app.use("/api", transactionRoute);

// server is running on
app.listen(port, () => {
  console.log(`server is running on : ${port}`.yellow.bold);
});