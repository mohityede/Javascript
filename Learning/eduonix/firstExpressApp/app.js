const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

// middleware for parse body
app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname,'views'))  ;
// Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('<a href = "/contact"> contact </a> <br> <a href = "/about"> about </a> <br> <a href = "/Demo">ejsDemo</a><br> <a href = "/login">Login</a>');
});

app.get('/Demo',(req,res) =>{
    let arr = [
        {name : "mohit", age : 21, gender: "male"},
        {name : "rohit", age : 21, gender: "male"},
        {name : "manish", age : 20, gender: "female"},
        {name : "pankaj", age : 26, gender: "male"}
    ];

    res.render('index.ejs',{data : arr})    ;
})

app.get('/Demo/:id/:user', (req,res) => {
    let userId = req.params.id;
    let name = req.params.user;

    res.render('index.ejs',{
        id : userId,
        userName : name,
    });
})

app.get('/contact', (req, res) => {
    res.send("<h1>this is contact page</h1>");
});

app.get('/about', (req, res) => {
    res.send('<h1>this is about page</h1>');
});

// Question..
app.get('/question/:id/:title',(req,res) => {
    let id = req.params.id;
    let title = req.params.title;
    res.send("question id is "+id+"and question is "+title);
});

app.get('/user/:id/:username',(req,res) => {
    let id = req.params.id;
    let title = req.params.username;
    res.send("user id is "+id+" and name is "+title);
});

// Login page
app.get('/dashboard',(req,res)=>{
   res.render('dash.ejs');
});

app.get('/login',(req,res) => {
    res.render('login.ejs');
});

app.post('/login',(req,res) =>{
    let user = req.body.username;
    let pass = req.body.password;

    if(user === "Mohit" && pass === "Yede1234"){
        res.redirect('/dashboard');
    }else{
        res.send("invalid pass");
    }
})

// default route
app.get('*',(req,res) => {
    res.send('404, page not exits </br> <a href = "/"> Home </a>');
});

app.listen(3000, () => {
    console.log("server started at 3000");
})