const { get } = require('express/lib/response');
const { createProduct, getAllProducts, deleteProductById, getProductById, updateProductById } = require('./product.controller');
const router = require('express').Router();

router.route('/').post(createProduct).get(getAllProducts)
router.route('/:id').get(getProductById).patch(updateProductById).delete(deleteProductById)

const productsRouter = router;
module.exports = productsRouter;