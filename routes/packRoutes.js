const express = require('express');
const packRouter = express.Router();
const packController = require("../controllers/packController");

packRouter.use(express.json());


//To view all class data 
packRouter.get('/',  packController.showAllPack);

//To create pack data
packRouter.post('/',  packController.createPack);

module.exports = packRouter;