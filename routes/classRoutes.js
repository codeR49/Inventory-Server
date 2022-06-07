const express = require('express');
const classRouter = express.Router();
const classController = require("../controllers/classController");

classRouter.use(express.json());


//To view all class data 
classRouter.get('/',  classController.showAllClass);

//To create class data 
classRouter.post('/',  classController.createClass);

module.exports = classRouter;