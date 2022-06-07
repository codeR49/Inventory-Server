const Type = require("../models/type");

const showAllType = (req, res, next) => {
    Type.find({})
        .then((all) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(all);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const createType = (req, res, next) => {
    Type.create(req.body)
        .then((resCreate) => {
            console.log('Type created', resCreate);
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.json(resCreate)
        }, (err) => next(err))
        .catch((err) => next(err))
}

module.exports ={
    showAllType,
    createType
}