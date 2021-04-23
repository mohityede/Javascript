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

//Syntex to create empty object
var obj1 = {}; // or
var obj2 = new Object();

// Class
class Family {
    constructor(man, woman, child1, child2){
        this.man= man;
        this.woman = woman;
        this.child1 = child1;
        this.child2 = child2;
    }

    getMan(){
        console.log(this.man);
    }
}

var yede = new Family("tilak","kamla","mohit","charu");
var gouta = new Family("Ramesh","guddi","vihan","vira");

// Inharitance using class
class Vahicals {
    constructor(brand,color,price){
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
    getColor(){
        console.log("the color of vahical is ", this.color);
    }
}

class Car extends Vahicals{
    constructor(door,milage,price){
        super("maruti","black",price); // to call properties of parent class
        this.door = door;
        this.milage = milage;
    }
    getCarDetails(){
        console.log("the car brand is ",this.brand,"of price",this.price,"has milage of ", this.milage);
    }
}

var c1 = new Car(4,23,100000);
console.log(c1);