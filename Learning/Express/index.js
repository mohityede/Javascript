// const { request, response } = require('express');
const express = require('express');
const path = require('path');

const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded()); // middleware

app.use(express.static('assets'));

/*
// creating middleware1
app.use(function (req, res, next) {
    req.name = "Rohit";
    // console.log("middleware 1 is called.");
    next();
})
// creating middleware2
app.use(function (req, res, next) {
    console.log("middleware 2 is name is ", req.name);
    next();
});
*/


// Contact project started
var contactList = [
    {
        name: "Mohit",
        phone: 9284973037,
    },
    {
        name: "Sachin",
        phone: 7289121590,
    },
    {
        name: "Kamla",
        phone: 8087077953,
    }
]


// rout cotroller function
app.get('/', function (request, response) {
    console.log("form root ", request.name);
    // console.log(__dirname);
    // response.send('its, runnig');
    return response.render('home', {
        title: "My Contacts",
        contact_list: contactList,
    });
});

// controller to create contact
app.post('/create-contact', function (request, response) {
    // return response.redirect('practice');
    contactList.push(request.body);
    return response.redirect('/');
})

// controller to delete contacts
app.get('/delete-contact', function (req, res) {
    console.log(req.query);
    let contactIndex = req.query.index;

    // OR find contactIndex....
    // let phone = req.query.phone;
    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    if (contactIndex != -1) {
        contactList.splice(contactIndex, 1);
    }

    return res.redirect('back'); // back means same page..(/)
})

app.get('/practice', function (request, response) {
    // console.log(__dirname);
    // response.send('its, runnig');
    return response.render('practice', {
        title: "Practice EJS"
    });
});
// app.get('/error',function(req,res){
//     res.send('its ,error page');
// });
// app.get('/profile',function(request,response){
//     response.send('its, profile page');
// });

app.listen(port, function (err) {
    if (err) {
        console.log("Error : ", err);
    }
    console.log("Express app run sucessfully.");
});