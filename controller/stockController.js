const { createStockS, getStockS } = require("../services/stockS")

module.exports.createStock = async (req, res) => {
    try {
        const result = await createStockS(req.body);
        res.status(200).json({
            status: "success",
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to post",
            err:err,
        })
    }
}
module.exports.getStock = async (req, res) => {
    try {
        const result=await getStockS(req.body)
        res.status(200).json({
            status: "success",
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to get",
            err:err,
        })
    }
}