# This keyword
- <i>this</i> keyword is refers to the current context object in which current code is running.
- global contaxt is not bound or written in any function its globally available for all. the function contaxt the data is bound within the that function only where is declere.
- when we call any function there is lexical environment created for that function
- In that lexical environment there are <b> "variable inside function", "reference to outer environment" and "<i>this</i> keyword" </b>
- value of <i>this</i> is depends on the way on which we call function. in the simple plain call of function <i>this</i> is reffering to the window object. but it may change with way of function calling.
- if we call the function which is within a object than <i>this</i> will return object of that function.
## this in strict mode
- calling of <i>this</i> via plain function is undefined in strict mode.
- calling of <i>this</i> via a object has no change. it is same as normal mode.
- we can bind plain function to any object using call() function on that plian function.

# Object Oriented Programming
- javascript does not have typical class concept for OOP like any other programming language.
- in javascript we have all things as object. in js function is also object.

# Prototyping
- when we create multiple object for they has has saparate function copy for all. due to this lots of memory get wested. that's why something called prototype is comes into picture.
-