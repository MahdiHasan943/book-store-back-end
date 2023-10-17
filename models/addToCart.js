const mongoose = require('mongoose');

const addToCartSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
    description: "The price of the product in the cart."
  },
  image: {
    type: String,
    required: true,
    match: /^https?:\/\//, // URL format validation
    description: "The URL of the product image."
  },
  name: {
    type: String,
    required: true,
    description: "The name of the product."
    },
    email: {
        type: String,
        required: true,
        description: "The email of the user is required."
      },
  quantity: {
    type: Number,
    required: true,
    description: "The quantity of the product in the cart."
  }
});

// Create a Mongoose model
const AddToCart = mongoose.model('AddToCart', addToCartSchema);

module.exports = AddToCart;
