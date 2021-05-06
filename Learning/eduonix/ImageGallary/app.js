const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const methondOverride = require('method-override');

// connect to database
mongoose.connect('mongodb://localhost:27017/employees', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Schema for database
let imageSchema = new mongoose.Schema({
    imagUrl : String
});

let Picture = mongoose.model('Picture',imageSchema);

// middlewares
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methondOverride('_method'));

app.get('/',(req,res)=>{
    res.render('home');
});

//set image storage
let storage = multer.diskStorage({
    destination: './public/uploadImg/',
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
    }
});

let upload = multer({
    storage: storage,
});



app.post('/uploadSingle', upload.single('singleFile'),(req,res,next)=>{
    const file = req.file;
    if(!file){
        return console.log("please upload image");
    }
});

// to start server
const port = 3000;
app.listen(port,(err)=>{
    if(err){
        console.log("error in start server..");
        return;
    }
    console.log(`Server started on port ${port}`);
});