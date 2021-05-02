const express = require('express');
const app = express();
const path = require('path');
const request = require('request');

app.set('views', path.join(__dirname,'views'));
app.use(express.static('public'));

app.get('/results',(req,res)=>{
    let quer = req.query.search;
    request('https://api.themoviedb.org/3/search/movie?api_key=f765f71c549004f57543d7cfa86b4e06&query='+quer,(err,resp,body)=>{
        if(err) {
            console.log("its error");
            return;
        }
        let data = JSON.parse(body);
        res.render('movies.ejs',{data : data, q: quer});
    });
});

app.get('/',(req,res)=>{
    res.render('search.ejs');
});

app.listen(3000,() =>{
    console.log("server started");
});