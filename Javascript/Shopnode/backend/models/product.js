const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    image : String,
    quantity: Number
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product