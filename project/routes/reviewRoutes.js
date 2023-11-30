const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Routes for reviews within a product
router.put('/:productId/reviews/:reviewId', reviewController.updateReview);
router.delete('/:productId/reviews/:reviewId', reviewController.deleteReview);

module.exports = router;
