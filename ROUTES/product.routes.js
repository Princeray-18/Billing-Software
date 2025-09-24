const express = require('express');

const auth=require("../MIDDLEWARE/auth.middleware")

const{
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
}=require("../CONTROLLER/product.controller")

const router=express.Router();
router.post('/addproduct',addProduct);
router.get('/allproducts',getAllProducts);
router.put('/updateproduct/:id',updateProduct);
router.delete('/deleteproduct/:id',deleteProduct);
module.exports=router;

