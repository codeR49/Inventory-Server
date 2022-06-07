let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let itemSchema = new Schema({

    item: {
        type: String,
        required: true
    },
    pack: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pack'
    },
    description: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    departmenttype: {
        type: Number,
        required: true
    }

}) 

module.exports = mongoose.model('Item', itemSchema);