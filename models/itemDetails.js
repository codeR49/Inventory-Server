let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let itemdetailsSchema = new Schema({
    purchaseordernumber: {
        type: String,
        required: true
    },
    purchasedate: {
        type: String,
        required: true
    },
    amendmentnumber: {
        type: String
    },
    amendmentdate: {
        type: String
    },
    lastremindernumber: {
        type: String
    },
    lastreminderdate: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        default: "BWP"
    },
    datefrom: {
        type: String,
        required: true
    },
    dateto: {
        type: String,
        required: true
    },
    vendor: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        validate: {
            validator: function (v) {
                return /d{10}/.test(v);
            }
        }
    },
    vendorreference: {
        type: String
    },
    lcnumber: {
        type: String
    },
    lcdate: {
        type: String
    },
    itemdetails: [{
        item: {
            type: String,
            required: true
        },
        itemdescription: {
            type: String,
            required: true
        },
        pack: {
            type: String
        },
        unit: {
            type: String,
            required: true
        },
        quantityordered: {
            type: Number,
            required: true
        },
        calculate: {
            type: String,
            enum: ["Amount", "Rate"],
            required: true
        },
        rate: {
            type: Schema.Types.Decimal128,
            required: true
        },
        itemamount: {
            type: Schema.Types.Decimal128,
            required: true
        },
        totalamount: {
            type: Schema.Types.Decimal128,
            required: true
        },
        defaultcharge: {
            type: Boolean,
            default: false
        },
        vatapplicable: {
            type: Boolean,
            default: false
        },
        vatincluded: {
            type: Boolean,
            default: false
        },
        itemtaxclass: {
            type: String
        },
        group: {
            type: String
        },
        justification: {
            type: String
        },
        maxquantityjustification: {
            type: String
        },
        brandid: {
            type: String
        },
        brandname: {
            type: String
        },
        unitdescription: {
            type: String,
            required: true
        },
        schedule: {
            type: String
        },
        lastdatereceived: {
            type: String
        },
        freeofcost: {
            type: Boolean,
            default: false
        },
        quantityreceived: {
            type: Number,
        },
        lowestreceivedrate: {
            type: Schema.Types.Decimal128,
        },
        lowestreceiveddate: {
            type: Date
        },
        lowestreceivedproperty: {
            type: String
        }
    }]
})

module.exports = mongoose.model('ItemDetail', itemdetailsSchema);