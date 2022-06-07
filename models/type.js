let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let typeSchema = new Schema({

    documentId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}) 

module.exports = mongoose.model('Type', typeSchema);
