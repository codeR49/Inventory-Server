let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let classSchema = new Schema({

    class: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}) 

module.exports = mongoose.model('Class', classSchema);