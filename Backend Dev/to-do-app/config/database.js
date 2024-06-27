const mongoose = require("mongoose");
// Importing
require("dotenv").config();

// Then we can use it in our code, for example in mongoose
const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewurlParser: true,
    useUnifiedTopology: true,
  }).then(console.log("DB ka Connection lag gya hain..."))
  .catch((error) => {
    console.log(`Koi error aagya hain, woh error hain: ${error}`);
    console.error(error.message);
    process.exit(1);
  })
};

module.exports = dbConnect;
