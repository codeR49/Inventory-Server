const express = require('express');
const purchaseRouter = express.Router();
const purchaseController = require("../controllers/purchaseController");

purchaseRouter.use(express.json());


//To view all class data 
purchaseRouter.get('/',  purchaseController.showAllPurchase);

//To create purchase data 
purchaseRouter.post('/',  purchaseController.createPurchase);

module.exports = purchaseRouter;