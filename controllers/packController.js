const Pack = require("../models/pack");

const showAllPack = (req, res, next) => {
    Pack.find({})
        .then((all) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(all);
        }, (err) => next(err))
        .catch((err) => next(err));
}

const createPack = (req, res, next) => {
    Pack.create(req.body)
        .then((resPack) => {
            console.log('Pack created', resPack);
            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.json(resPack)
        }, (err) => next(err))
        .catch((err) => next(err))
}

module.exports ={
    showAllPack,
    createPack
}