const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
require("dotenv").config();
mongoose.connect(process.env.MONGO_DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log(`Database Connected Successfully`.cyan.bold);
});
module.exports = db;