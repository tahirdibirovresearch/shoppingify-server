const { Router } = require("express");
const productController = require("../controllers/productController");


const productRoute = Router()

productRoute.get('/products', productController.getProducts)
productRoute.post('/products', productController.setProduct)
productRoute.delete('/products/:id')

module.exports = productRoute