const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Routes for products
router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

// Routes for reviews within a product
router.post('/:productId/reviews', productController.addReview);
router.get('/:productId/reviews', productController.getAllReviews);
router.put('/:productId/reviews/:reviewId', productController.updateReview);
router.delete('/:productId/reviews/:reviewId', productController.deleteReview);

module.exports = router;
