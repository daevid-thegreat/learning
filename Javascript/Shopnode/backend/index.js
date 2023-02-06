const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv/config")

API_URL = process.env.API_URL

// middlewares
app.use(express.json())
app.use(morgan("tiny"))

// routes
app.get(`/`, (req, res)=>{
    res.send("Hello World")
})

app.get(`${API_URL}/products`, (req, res) => {
    const products = {
        id: 1,
        name : "Product 1",
        price: 100
    }
    res.send(products)
})

app.post(`${API_URL}/products`, (req, res) => {
    const newProduct = req.body
    res.send(newProduct)
})


mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "shopnodeDB" })
    .then(() => {
        console.log("Database connection is ready...")
    })
    .catch((err) => {
        console.log(err)
    })
// start server and listen
app.listen(3000, () => {
  console.log("Server is running on port 3000...")
})