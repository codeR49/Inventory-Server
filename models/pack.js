let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let packSchema = new Schema({

    pack: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}) 

module.exports = mongoose.model('Pack', packSchema);