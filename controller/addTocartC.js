const { createAddTo, getAddTo } = require("../services/addTocartS")
const AddToCart =require('../models/addToCart')
module.exports.creatAddToCart = async (req, res) => {
    try {
      const { name, price, email, image, quantity } = req.body;
  
      // Check if a product with the same name and email already exists
      const existingProduct = await AddToCart.findOne({ name, email });
  
      if (existingProduct) {
        // Update the quantity of the existing product
        existingProduct.quantity += quantity;
        await existingProduct.save();
  
        return res.json({ message: 'Product quantity updated successfully', updatedProduct: existingProduct });
      } else {
        // Create a new product and add it to the database
        const newProduct = new AddToCart({ name, price, email, image, quantity });
        await newProduct.save();
  
        return res.json({ message: 'Product added to cart successfully', newProduct });
      }
    } catch (error) {
      console.error('Error adding/updating cart item:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  

module.exports.getAddTo = async (req, res) => {
    try {
        const brand=await getAddTo(req.body)
        res.status(200).json({
            status: "success",
            data:brand
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to get",
            err:err,
        })
    }
}
module.exports.updateAddToCart = async (req, res) => {
    const itemId = req.params.id;
  const { quantity } = req.body;

  try {
    // Find the cart item by ID and update its quantity
    const updatedItem = await AddToCart.findByIdAndUpdate(itemId, { quantity }, { new: true });

    if (!updatedItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    return res.json({ message: 'Cart item quantity updated successfully', updatedItem });
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
