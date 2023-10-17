const AddToCart=require('../models/addToCart')
module.exports.createAddTo = async (data) => {
    const result=await AddToCart.create(data)
    return result;
}

module.exports.getAddTo= async () => {
    const result=await AddToCart.find({})
    return result;
}