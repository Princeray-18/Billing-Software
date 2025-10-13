// routes/bill.routes.js
const express = require('express');
const auth = require("../MIDDLEWARE/auth.middleware");

const {

    getAllBills,
    deleteBill,
    addBill,
} = require("../CONTROLLER/bill.controller");

const router = express.Router();

router.post('/addbill',addBill);
router.get('/allbills',getAllBills);
router.delete('/deletebill/:id', deleteBill);
module.exports = router;
