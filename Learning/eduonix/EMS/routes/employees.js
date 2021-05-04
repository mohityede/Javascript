const express = require('express');
const employee = require('../models/employee');
const route = express.Router();

const Employee = require('../models/employee');

route.get('/', (req,res) =>{
    Employee.find({})
        .then(employee =>{
            res.render('index',{employ: employee});
        })
        .catch((err) =>{
            console.log("error in showing database");
        })
});

route.get('/employee/add',(req,res) =>{
    res.render('addEmp');
})

route.get('/employee',(req,res) =>{
    let searchQuary = {name : req.query.name};

    Employee.findOne(searchQuary)
        .then(employee =>{
            res.render('searchEmp',{semp : employee});
        })
        .catch(err =>{
            console.log("error in searching ...");
        });
});

route.post('/employee/add',(req,res) =>{
    let addEmp = {
        name : req.body.name,
        designation : req.body.designation,
        salary : req.body.salary
    }
    Employee.create(addEmp)
        .then(employee =>{
            res.redirect('/');
        })
        .catch(err =>{
            console.log("error in create employee");
        })
});

route.get('/employee/search',(req,res) =>{
    res.render('searchEmp', {semp : ""});
});

module.exports = route;