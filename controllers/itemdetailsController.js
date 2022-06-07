const ItemDetails = require("../models/itemDetails");

const showAllItemDetails = (req, res, next) => {
    ItemDetails.find({})
        .populate('pack')
        .then((all) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(all);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const createItemDetails = (req, res, next) => {

    ItemDetails.create(req.body)
        .then((resItem) => {
            console.log('Item created', resItem);
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.json(resItem)
        }, (err) => next(err))
        .catch((err) => next(err))
}
module.exports ={
    showAllItemDetails,
    createItemDetails
}