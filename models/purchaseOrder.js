let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let purchaseorderSchema = new Schema({

    number: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type'
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }

}) 

module.exports = mongoose.model('PurchaseOrder', purchaseorderSchema);
