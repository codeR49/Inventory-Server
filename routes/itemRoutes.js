const express = require('express');
const itemRouter = express.Router();
const itemController = require("../controllers/itemController");

itemRouter.use(express.json());


//To view all class data 
itemRouter.get('/',  itemController.showAllItem);

//To create class data 
itemRouter.post('/',  itemController.createItem);

module.exports = itemRouter;