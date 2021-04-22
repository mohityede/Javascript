/*
// This keyword

// global context
console.log(this);

// plain function context
function demo(){
    console.log("demo",this);
}

// function within a object
var obj = {
    age : 22,
    walk : function(){
        console.log("walk",this);
    }
}

obj.walk();

'use strict';

function demo2(){
    console.log("demo2",this);
}

var obj2 = {
    num : 22,
    run : function(){
        console.log("run",this);
    }
}
demo2()
demo2.call(obj2)
*/

// OOP
function createStudent (name, rollNo, marks){
    var stu = {}; // OR new object();
    stu.name = name;
    stu.rollNo = rollNo;
    stu.marks = marks;
    return stu;
}

var stu1 = createStudent("mohit",21,99);
var stu2 = createStudent("Rohit",22,97);

// constructor
function createEmployee(name, id, role){
    this.name = name;
    this.id = id;
    this.role = role;
    this.getRole = function(){
        return this.role;
    }
}

var emp1 = new createEmployee("ram",234,"supr");
var emp2 = new createEmployee("shyam",232,"manager");

// Prototype
function Vahical(numWheel, price){
    this.numWheel = numWheel;
    this.price = price;
}

Vahical.prototype.getPrice = function(){
    return this.price;
}

var v1 = new Vahical(4,50000);
var v2 = new Vahical(2,20000);
