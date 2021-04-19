// Event landling

var h = document.getElementById('btn');
h.addEventListener('click', function () {
    h.style.fontSize = '23px';
})

var even = document.getElementById('eve');
even.addEventListener('mouseover', function () {
    even.style.backgroundColor = 'red';
})
even.addEventListener('mouseout', function () {
    even.style.backgroundColor = 'blue';
})

var ser = document.getElementById('search');
ser.addEventListener('keydown', function (event) {
    even.style.backgroundColor = 'gray';
    if (event.keyCode == 66) {
        even.style.backgroundColor = 'black';
    }
})

ser.addEventListener('keyup', function () {
    even.style.backgroundColor = 'green';
})

var inr = document.getElementById('innerDiv');
var our = document.getElementById('outerDiv');
inr.addEventListener('click', function (ev) {
    console.log("inner clicked");
    ev.stopPropagation();
})
our.addEventListener('click', function () {
    console.log("outer clicked");
})



