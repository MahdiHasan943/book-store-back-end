const express = require('express');
const router = express.Router();
const addTocartC=require('../../../controller/addTocartC')
router
    .route('/')
    .get(addTocartC.getAddTo)
    .post(addTocartC.creatAddToCart)

router.route('/:id')
    .put(addTocartC.updateAddToCart) 
    .delete(addTocartC.deleteAddToCart) 

    // .patch(addTocartC.updateCartItemQuantity)
module.exports = router;