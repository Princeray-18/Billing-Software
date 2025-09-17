// controllers/customerController.js
const Customer = require('../models/Customer');

// Add Customer
const addCustomer = async (req, res) => {
    try {
        const { name, adress, age } = req.body;

        const customer = await Customer.create({ name, adress, age });
        res.status(201).json({ message: "Customer added successfully", customer });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Customers
const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json({ message: "All customers", customers });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Customer
const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, adress, age } = req.body;

        const customer = await Customer.findByIdAndUpdate(
            id,
            { name, adress, age },
            { new: true, runValidators: true }
        );

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json({ message: "Customer updated successfully", customer });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Customer
const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;

        const customer = await Customer.findByIdAndDelete(id);

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json({ message: "Customer deleted successfully", customer });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addCustomer, getAllCustomers, updateCustomer, deleteCustomer };
