const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")
API_URL = process.env.API_URL

// cors
app.use(cors())
app.options("*", cors())

// middlewares
app.use(express.json())
app.use(morgan("tiny"))

// router
app.use(`${API_URL}/products`, require("./routers/products"))

// database connection
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "testDB" })
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