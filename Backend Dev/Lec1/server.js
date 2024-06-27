// Creating a Simple Server

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/newDatabase', {
    useNewurlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successful")
}).catch((error)=>{
    console.log(`Recieved an Error: ${error}`)
})  


app.use(bodyParser.json);

app.listen(3000, () => {
  console.log("Server Started at port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/data", (req, res) => {
  const { name, city } = request.body;
  console.log(name, " ", city);
  response.send("Data Submitted Successfully..");
});
