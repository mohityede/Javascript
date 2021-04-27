// const { request, response } = require('express');
const express = require('express');
const path = require('path');

const port =8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/',function(request,response){
    // console.log(__dirname);
    // response.send('its, runnig');
    return response.render('home',{title : "My Contacts"});
});
app.get('/practice',function(request,response){
    // console.log(__dirname);
    // response.send('its, runnig');
    return response.render('practice',{
        title : "Practice EJS"
    });
});
// app.get('/error',function(req,res){
//     res.send('its ,error page');
// });
// app.get('/profile',function(request,response){
//     response.send('its, profile page');
// });

app.listen(port,function(err){
    if(err) {
        console.log("Error : ",err);
    }
    console.log("Express app run sucessfully.");
});