const Product = require('./product.modal');

// create a single product 
exports.createProduct = async(req, res)  => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({product})
        
    } catch (error) {
        res.status(401).json({error})
    }
}

// get all products
exports.getAllProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({products})
    } catch (error) {
        res.status(404).json({error})
    }
}

// get a single product by id
exports.getProductById = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({product})
    } catch (error) {
        res.status(404).json({error})
    } 
}

// update product by id
exports.updateProductById = async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        })
        res.status(200).json({product})
    } catch (error) {
        res.status(404).json({error})
    }
}

// delete product by id
exports.deleteProductById = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(204).json({product})
    } catch (error) {
        res.status(404).json({error})
    }
}