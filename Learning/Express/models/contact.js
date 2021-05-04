const mongoose = require('mongoose');

let contactScema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    phone :{
        type : String,
        required : true
    }
});

const Contact = mongoose.model('Contact', contactScema);

module.exports = Contact;