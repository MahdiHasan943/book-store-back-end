const express = require("express");

const dotenv = require("dotenv").config();
const colors = require("colors");
const app = express();
const cors = require("cors");
const { connectDB } = require("./utils/dbConnect");
const category = require('./routes/api/v1/category.route')
const  store= require('./routes/api/v1/store.route')
const  brand= require('./routes/api/v1/brandrouter')
const  stock= require('./routes/api/v1/stockroute')
const products = require('./routes/api/v1/productroute')
const addToCart = require('./routes/api/v1/addToCart.route')


const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

connectDB()
app.use("/api/v1/category", category)
app.use("/api/v1/store", store)
app.use("/api/v1/brand",brand)
app.use("/api/v1/stock",stock)
app.use("/api/v1/products", products)
app.use("/api/v1/addToCart",addToCart)



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});


app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});

module.exports = app;