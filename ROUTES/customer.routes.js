const express = require('express');
const auth = require("../MIDDLEWARE/auth.middleware");
const { addCustomer,getAllCustomers,updateCustomer,deleteCustomer } = require('../CONTROLLER/customer.controller');



const router = express.Router();

router.post('/addcustomer',addCustomer);
router.get('/getAllcustomer',getAllCustomers);
router.put('/updatecustomer/:id',updateCustomer);
router.delete('/deletecustomer/:id',deleteCustomer);

module.exports = router;  
