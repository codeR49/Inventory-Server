const Item = require("../models/item");

const showAllItem = (req, res, next) => {
    Item.find({})
        .populate('pack')
        .then((all) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(all);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const createItem = (req, res, next) => {
    Item.create(req.body)
        .then((resItem) => {
            console.log('Item created', resItem);
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.json(resItem)
        }, (err) => next(err))
        .catch((err) => next(err))
}
module.exports ={
    showAllItem,
    createItem
}