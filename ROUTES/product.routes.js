const express = require('express');

const auth=require("../MIDDLEWARE/auth.middleware")

const{
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
}=require("../CONTROLLER/product.controller")

const router=express.Router();
router.post('/addproduct',auth,addProduct);
router.get('/allproducts',auth,getAllProducts);
router.put('/updateproduct/:id',auth,updateProduct);
router.delete('/deleteproduct/:id',auth,deleteProduct);
module.exports=router;

