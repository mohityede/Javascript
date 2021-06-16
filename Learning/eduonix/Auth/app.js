const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const session = require('express-session');
// const passport = require('passport');
// const nodeMailer = require('nodemailer');
// const async = require('async');

dotenv.config({path:'./config.env'});

// to connect database
mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// middleware for session
app.use(session({
    secret:'login app',
    resave: true,
    saveUninitialized:true
}));

// middleware for flash massages
app.use(flash())

// setting global middleware
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash(('success_msg'));
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// common middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// to run server..
const port = process.env.PORT;
app.listen(port,()=>{
    console.log("server is started at port "+port);
})
