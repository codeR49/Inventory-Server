const express = require('express');
const typeRouter = express.Router();
const typeController = require("../controllers/typeController");

typeRouter.use(express.json());


//To view all class data 
typeRouter.get('/',  typeController.showAllType);

//To create type data 
typeRouter.post('/',  typeController.createType);

module.exports = typeRouter;