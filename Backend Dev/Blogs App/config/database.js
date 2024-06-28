const mongoose = require("mongoose");
// Importing
require("dotenv").config();

// Then we can use it in our code, for example in mongoose
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Database Connected Successfully.."))
    .catch((error) => {
      console.log(`Getting Error in Connecting Database: ${error}`);
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
