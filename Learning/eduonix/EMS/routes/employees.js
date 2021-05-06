const express = require('express');
const employee = require('../models/employee');
const route = express.Router();

const Employee = require('../models/employee');

route.get('/', (req, res) => {
    Employee.find({})
        .then(employee => {
            res.render('index', { employ: employee });
        })
        .catch((err) => {
            console.log("error in showing database");
        })
});

route.get('/employee/add', (req, res) => {
    res.render('addEmp');
})

route.get('/employee', (req, res) => {
    let searchQuary = { name: req.query.name };

    Employee.findOne(searchQuary)
        .then(employee => {
            res.render('searchEmp', { semp: employee });
        })
        .catch(err => {
            console.log("error in searching ...");
        });
});

route.get('/employee/update/:id', (req, res) => {
    let searchQuary = { _id: req.params.id };
    Employee.findOne(searchQuary)
        .then(employee => {
            res.render('updateEmp', { uemp: employee });
        })
        .catch(err => {
            console.log("error in upading..");
        })
});

route.put('/employee/update/:id', (req, res) => {
    let seachQuary = { _id: req.params.id };
    Employee.updateOne(seachQuary, {
        $set: {
            name: req.body.name,
            designation: req.body.designation,
            salary: req.body.salary
        }
    })
        .then(employee => {
            req.flash('sucess_msg','Employee ediated sucessfully.');
            res.redirect('/');
        })
        .catch(err => {
            console.log("erron in put..");
        })
});

route.get('/employee/delete', (req,res)=>{
    let empId = req.query.id;

    Employee.findByIdAndDelete(empId, (err) => {
        if(err){
            console.log("error in deleting data");
            return;
        }
        req.flash('sucess_msg','Employee deleted sucessfully.');
        return res.redirect('back'); // back means same page..(/)
    });
});

route.post('/employee/add', (req, res) => {
    let addEmp = {
        name: req.body.name,
        designation: req.body.designation,
        salary: req.body.salary
    }
    Employee.create(addEmp)
        .then(employee => {
            req.flash('sucess_msg','Employee added sucessfully.');
            res.redirect('/');
        })
        .catch(err => {
            console.log("error in create employee");
        })
});

route.get('/employee/search', (req, res) => {
    res.render('searchEmp', { semp: "" });
});

module.exports = route;