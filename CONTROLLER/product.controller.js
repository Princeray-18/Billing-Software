


const addProduct = async(req, res) => {
    try {   
        const { productname, price,stock } = req.body;

        //constbarcode=generateBaecode();

        const product =newproductmodel.create({productname,price,stock});
        res.status(201).json({ message: "Product added successfully", product });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };
    
 // Closing brace for updateProduct function
const getAllProducts = async (req, res) => {
    try {
        const products = await productmodel.find();
        res.status(200).json({ message: "All products", products });

    } catch (error) {
        res.status(500).json({ message: error.message });
    };
    }

    const updateProduct = async (req, res) => {
        try {
            const { id } = req.params;  
            const { productname, price, stock } = req.body;
            const product = await productmodel.findByIdAndUpdate(id, { productname, price, stock }, { new: true });
            if (!product) {
                return res.status(404).json({ message: "Product update succesfully" });
            }
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        };
    }


   const deleteProduct = async (req, res) => {
        try {
            const { id } = req.params;  
            const product = await productmodel.findByIdAndDelete(id);
            
            res.status(200).json({ message: "Product deleted successfully", product });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

module.exports = { addProduct, getAllProducts, updateProduct,  deleteProduct };
    

