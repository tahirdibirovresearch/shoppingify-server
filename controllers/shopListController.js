const shopListModel = require("../models/shopListModel")

class ShopListController{

    setList = async (req, res) =>{
        const user = req.user
        const { name, products, status } = req.body
        const shopList = await shopListModel.create({name, products, status, createdBy: user.id})
        res.send(shopList)
    }
    getWaitingList = async (req, res) =>{
        const list = await shopListModel.findOne({status: 'waiting'}).sort({ _id : -1 }).populate('products.product')
        res.status(200).json(list)
    }
    getLists = async (req, res) =>{
        const user = req.user
        const shopLists = await shopListModel.find({createdBy: user.id}).populate('products.product')
        res.status(200).json(shopLists)
    }

}

module.exports = new ShopListController()