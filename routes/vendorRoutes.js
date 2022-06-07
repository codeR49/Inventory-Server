const express = require('express');
const vendorRouter = express.Router();
const vendorController = require("../controllers/vendorController");

vendorRouter.use(express.json());


//To view all class data 
vendorRouter.get('/',  vendorController.showAllVendor);

//To create vendor data 
vendorRouter.post('/',  vendorController.createVendor);

module.exports = vendorRouter;