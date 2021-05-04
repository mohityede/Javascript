const express = require('express');
const app = express();

const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// for use route file
const employeeRoutes = require('./routes/employees');
const { urlencoded } = require('express');

dotenv.config({path : './config.env'});

// to connect mongodb database
mongoose.connect('mongodb://localhost:27017/employees' , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
});

// middlewares used
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(employeeRoutes);


const port = process.env.PORT;
app.listen(port,()=>{
    console.log("server started at port ${port}");
});