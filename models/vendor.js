let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let vendorSchema = new Schema({

    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }

}) 

module.exports = mongoose.model('Vendor', vendorSchema);