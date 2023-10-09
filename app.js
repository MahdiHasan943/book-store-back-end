const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const category = require('./routes/v1/category.route')
const  store= require('./routes/v1/store.route')
const  brand= require('./routes/v1/brandrouter')
const  stock= require('./routes/v1/stockroute')
const  products= require('./routes/v1/productroute')


app.use(express.json());
app.use(cors());
app.use("/api/v1/category", category)
app.use("/api/v1/store", store)
app.use("/api/v1/brand",brand)
app.use("/api/v1/stock",stock)
app.use("/api/v1/products",products)



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});



module.exports = app;