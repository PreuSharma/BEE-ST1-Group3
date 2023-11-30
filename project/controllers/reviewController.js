const Product = require('../models/product');

// Update a review by ID within a product
exports.updateReview = async (req, res) => {
  try {
    const { productId, reviewId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const review = product.reviews.id(reviewId);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    Object.assign(review, req.body);
    await product.save();
    res.json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a review by ID within a product
exports.deleteReview = async (req, res) => {
  try {
    const { productId, reviewId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const review = product.reviews.id(reviewId);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    review.remove();
    await product.save();
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = exports;
