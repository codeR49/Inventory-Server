const Purchase = require("../models/purchaseOrder");

const showAllPurchase = (req, res, next) => {
    Purchase.find({})
        .populate("type vendor item class")
        .then((all) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(all);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const createPurchase = (req, res, next) => {
    Purchase.create(req.body)
        .then((resPurchase) => {
            console.log('Purchase created', resPurchase);
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.json(resPurchase)
        }, (err) => next(err))
        .catch((err) => next(err))
}

module.exports ={
    showAllPurchase,
    createPurchase
}