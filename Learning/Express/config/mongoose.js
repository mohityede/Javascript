const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contact_list_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Erron in connecting to db'));

db.once('open',()=>{
    console.log("succefully concted to db");
});