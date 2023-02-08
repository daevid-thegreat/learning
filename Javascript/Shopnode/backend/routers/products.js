const express = require("express")
const router = express.Router()
const Product = require("../models/product")

router.post(`/`, (req, res) => {
    const product = new Product({
        name : req.body.name,
        price : req.body.price,
        image : req.body.image,
        quantity : req.body.quantity
    })

    product.save().then((createdProduct) => {
        res.status(201).json(createdProduct)
    }).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
})
})

router.get(`/`, async (req, res) => {
    const  getProducts = await Product.find().then((products) => {
        res.status(200).json(products)
    }).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    res.send(getProducts)
})
})

module.exports = router