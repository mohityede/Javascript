const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const methondOverride = require('method-override');
const fs = require('fs')

// connect to database
mongoose.connect('mongodb://localhost:27017/employees', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Schema for database
let imageSchema = new mongoose.Schema({
    imgUrl: String
});

let Picture = mongoose.model('Picture', imageSchema);

// middlewares
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methondOverride('_method'));

app.get('/', (req, res) => {
    Picture.find({})
        .then(img => {
            res.render('home', { imgs: img });
        })
});

//set image storage
let storage = multer.diskStorage({
    destination: './public/uploadImg/',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

function checkFileType(file, cb) {
    const fileType = /jpeg|jpg|png|gif/;
    const extName = fileType.test(path.extname(file.originalname).toLowerCase());
    if (extName) {
        return cb(null, true);
    } else {
        cb('Eroor : please select valid image format');
    }
}

let upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
});

// action on single upload
app.post('/uploadSingle', upload.single('singleFile'), (req, res, next) => {
    const file = req.file;
    if (!file) {
        return console.log("please upload image");
    }

    let url = file.path.replace('public', '');

    Picture.findOne({ imgUrl: url })
        .then(img => {
            if (img) {
                console.log('Duplicate Image..');
                return res.redirect('/');
            }
            Picture.create({ imgUrl: url })
                .then(img => {
                    console.log('img save to DB');
                    res.redirect('/');
                })
        })
        .catch(err => {
            return console.log('Error..' + err);
        });

});

// action on multiple upload
app.post('/uploadMultiple', upload.array('multiFile'), (req, res, next) => {
    const files = req.files;
    if (!files) {
        return console.log("please upload images");
    }

    files.forEach(file => {
        let url = file.path.replace('public', '');
        Picture.findOne({ imgUrl: url })
            .then(async img => {
                if (img) {
                    return console.log('Duplicated imgs..')
                }
                await Picture.create({ imgUrl: url });
            })
            .catch(err => {
                return console.log('error : ' + err);
            })
    });
    res.redirect('/');
});

// to delete img
app.delete('/delete/:id', (req, res) => {
    let searchQuery = { _id: req.params.id };
    Picture.findOne(searchQuery)
        .then(img => {
            fs.unlink(__dirname + '/public/' + img.imgUrl, (err) => {
                if (err) {
                    return console.log("error in deleting img.." + err);
                }
                Picture.deleteOne(searchQuery)
                    .then(img => {
                        res.redirect('/');
                    })
            })
        })
        .catch(err => {
            console.log("error" + err);
        });
});

// to start server
const port = 3000;
app.listen(port, (err) => {
    if (err) {
        console.log("error in start server..");
        return;
    }
    console.log(`Server started on port ${port}`);
});