const Vendor = require("../models/vendor");

const showAllVendor = (req, res, next) => {
    Vendor.find({})
        .then((all) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(all);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const createVendor = (req, res, next) => {
    Vendor.create(req.body)
        .then((resVendor) => {
            console.log('Vendor created', resVendor);
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.json(resVendor)
        }, (err) => next(err))
        .catch((err) => next(err))
}

module.exports ={
    showAllVendor,
    createVendor
}