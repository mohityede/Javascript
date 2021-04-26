// Intro

function sayHello(name){
	console.log("hello "+name);
}
sayHello("mohit");

//console.log(module);

// use show function of mod1
const show = require('./mod1.js');

show.show(22);

// Path module
const path = require('path');

const pathObj = path.parse(__filename);
console.log(pathObj);

// OS module
const os = require('os');

const total = os.totalmem();
const free = os.freemem();	

console.log(`total memory is ${total}`);
console.log(`free momory is ${free}`);

// file system
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);
