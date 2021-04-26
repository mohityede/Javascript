// module 1
var a = 10;

function printVal(x){
	console.log("your value is "+x);
}

// to make function public
module.exports.show = printVal;
