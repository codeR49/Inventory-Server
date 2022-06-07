const express = require('express');
const itemDetailsRouter = express.Router();
const itemDetailsController = require("../controllers/itemdetailsController");

itemDetailsRouter.use(express.json());


//To view all item details data 
itemDetailsRouter.get('/',  itemDetailsController.showAllItemDetails);

//To create item details data 
itemDetailsRouter.post('/',  itemDetailsController.createItemDetails);

module.exports = itemDetailsRouter;