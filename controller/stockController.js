module.exports.createStock = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data:'ddkd'
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
        res.status(200).json({
            status: "success",
            data:'ddkd'
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to get",
            err:err,
        })
    }
}