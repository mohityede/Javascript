/* Count click*/
var textCount = document.getElementById('text-count');
var box1 = document.getElementById('box1');

var count= 0;

box1.addEventListener('click', function () {
    count++;
    textCount.innerHTML = "box is clicked "+ count+ " times";
})

/*Toggle mode*/

var tog = document.getElementById('toggle');
var circle = document.getElementById('circle');
var togSec = document.getElementById('toggle-mode');

var clickTime =0;

tog.addEventListener('click',function(e){
    if(clickTime%2==0){
    togSec.style.backgroundColor = 'black';
    togSec.style.color = 'white';
    circle.style.float = 'right';
    circle.style.borderColor = 'white';
    }
    else{
        togSec.style = 'toggle';
        circle.style = 'circle';
    }
    clickTime++;
    e.stopPropagation();
})