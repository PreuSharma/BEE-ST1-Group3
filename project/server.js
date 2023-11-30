const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productCatalog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/products', productRoutes);
app.use('/api/products', reviewRoutes); // Changed from '/api/reviews' to '/api/products'

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
