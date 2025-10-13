// Add Customer
const customerModel = require('../MODELS/customer.model');
const addCustomer = async (req, res) => {
    try {
        const { name, Number } = req.body;

        // validate
        if (!name || !Number) {
            return res.status(400).json({ message: "Name and Number are required" });
        }

        const newCustomer = new customerModel({
            name,
            Number
        });

        await newCustomer.save();

        res.status(201).json({ 
            message: "Customer added successfully", 
            customer: newCustomer 
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get All Customers
const getAllCustomers = async (req, res) => {
    try {
        const customers = await customerModel.find();
        res.status(200).json({ message: "All customers", customers });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Customer
const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name,  Number } = req.body;

        const customer = await customerModel.findByIdAndUpdate(
            id,
            { name,Number },
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

        const customer = await customerModel.findByIdAndDelete(id);

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json({ message: "Customer deleted successfully", customer });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addCustomer, getAllCustomers, updateCustomer, deleteCustomer };
