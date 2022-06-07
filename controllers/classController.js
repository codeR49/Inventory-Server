const Class = require("../models/class");

const showAllClass = (req, res, next) => {
    Class.find({})
        .then((all) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(all);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const createClass = (req, res, next) => {
    Class.create(req.body)
        .then((resClass) => {
            console.log('Class created', resClass);
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.json(resClass)
        }, (err) => next(err))
        .catch((err) => next(err))
}

module.exports = {
    showAllClass,
    createClass
}