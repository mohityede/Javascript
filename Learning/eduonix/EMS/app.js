const express = require('express');
const app = express();

const path = require('path');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const sassion = require('express-session');
const flash = require('connect-flash');

const bodyParser = require('body-parser');

// for use route file
const employeeRoutes = require('./routes/employees');
const { urlencoded } = require('express');
const session = require('express-session');
dotenv.config({ path: './config.env' });

// to connect mongodb database
mongoose.connect('mongodb://localhost:27017/employees', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// middlewares used
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'nodejs',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
// setting massages variable globally
app.use((req,res,next) =>{
    res.locals.sucess_msg = req.flash(('sucess_msg'))
    res.locals.error_msg = req.flash(('error_msg'))
    next();
})
app.use(employeeRoutes);



const port = process.env.PORT;
app.listen(port, () => {
    console.log("server started at port 3000");
});