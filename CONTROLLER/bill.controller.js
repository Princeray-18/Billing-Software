// controllers/bill.controller.js
const Bill = require('../models/Bill');

// Add Bill
const addBill = async (req, res) => {
    try {
        const { customerid, producs, discount, totalamount } = req.body;

        const bill = await Bill.create({ customerid, producs, discount, totalamount });
        res.status(201).json({ message: "Bill created successfully", bill });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Bills (with customer & product populated)
const getAllBills = async (req, res) => {
    try {
        const bills = await Bill.find()
            .populate('customerid', 'name adress age')   // populate customer fields
            .populate('producs', 'productname price stock'); // populate product fields

        res.status(200).json({ message: "All bills", bills });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Single Bill by ID
const getBillById = async (req, res) => {
    try {
        const { id } = req.params;

        const bill = await Bill.findById(id)
            .populate('customerid', 'name adress age')
            .populate('producs', 'productname price stock');

        if (!bill) {
            return res.status(404).json({ message: "Bill not found" });
        }

        res.status(200).json({ message: "Bill details", bill });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Bill
const updateBill = async (req, res) => {
    try {
        const { id } = req.params;
        const { customerid, producs, discount, totalamount } = req.body;

        const bill = await Bill.findByIdAndUpdate(
            id,
            { customerid, producs, discount, totalamount },
            { new: true, runValidators: true }
        ).populate('customerid', 'name adress age')
         .populate('producs', 'productname price stock');

        if (!bill) {
            return res.status(404).json({ message: "Bill not found" });
        }

        res.status(200).json({ message: "Bill updated successfully", bill });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Bill
const deleteBill = async (req, res) => {
    try {
        const { id } = req.params;

        const bill = await Bill.findByIdAndDelete(id);

        if (!bill) {
            return res.status(404).json({ message: "Bill not found" });
        }

        res.status(200).json({ message: "Bill deleted successfully", bill });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addBill, getAllBills, getBillById, updateBill, deleteBill };
