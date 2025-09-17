// routes/bill.routes.js
const express = require('express');
const auth = require("../MIDDLEWARE/auth.middleware");

const {
    addBill,
    getAllBills,
    getBillById,
    updateBill,
    deleteBill,
} = require("../CONTROLLER/bill.controller");

const router = express.Router();

router.post('/addbill', auth, addBill);
router.get('/allbills', auth, getAllBills);
router.put('/updatebill/:id', auth, updateBill);
router.delete('/deletebill/:id', auth, deleteBill);
module.exports = router;
