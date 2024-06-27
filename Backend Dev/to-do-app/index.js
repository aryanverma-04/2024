const express = require('express');
const app = express();

// Load Port Config from ENV file.
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Need a middleware to pass JSON Request Body
app.use(express.json);

// Import Routes for TO-DO API
const todoRoutes = require("./routes/todos");

// Mount the To-DO API Routes
app.use("/api/v1", todoRoutes)

// Now Starting the Server
app.listen(PORT, ()=>{
    console.log(`Server Started at Port: ${PORT}`);
})

// Connecting to DataBase
const dbConnect = require("./config/database")
dbConnect();

// Default Route for Application