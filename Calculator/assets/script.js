/**
 * @project Calculator
 * @name Mohit_Yede
 * @varsion 0.1 (first)
 * @task To perform basic calculation
 */

// Global Variables
var box = document.getElementsByClassName('box');
var display = document.getElementById('sol');
var operand1="";
var numOperand1 =0;
var operand2 = 0;
var str="";

// function to get input data
function app(){
    display.innerText += this.getAttribute('data-value');
    str += this.getAttribute('data-value');
}
box[4].addEventListener('click',app);
box[5].addEventListener('click',app);
box[6].addEventListener('click',app);
box[8].addEventListener('click',app);
box[9].addEventListener('click',app);
box[10].addEventListener('click',app);
box[12].addEventListener('click',app);
box[13].addEventListener('click',app);
box[14].addEventListener('click',app);
box[16].addEventListener('click',app);
box[17].addEventListener('click',app);

// function to delete last digit of number
function del(){
    str = display.innerText;
    str = str.substring(0, str.length-1);
    display.innerText = str;
}
box[1].addEventListener('click',del);

// function to clear screen
function cancel(){
    display.innerText = "";
    str = "";
}
box[0].addEventListener('click', cancel);

// addition
function add(){
    if(display.innerText.includes('+')){
        numOperand1 = parseFloat(display.innerText.substring(0,display.innerText.indexOf('+')));
        operand2= parseFloat(display.innerText.substring(display.innerText.indexOf('+')+1,display.innerText.length));
        numOperand1 = numOperand1+operand2;
    }else{
        numOperand1= display.innerText;
    }
    display.innerText = numOperand1+'+';
    str="";
}
box[3].addEventListener('click',add);

// substraction
function sub(){
    if(display.innerText.includes('-')){
        numOperand1 = parseFloat(display.innerText.substring(0,display.innerText.indexOf('-')));
        operand2= parseFloat(display.innerText.substring(display.innerText.indexOf('-')+1,display.innerText.length));
        numOperand1 = numOperand1-operand2;
    }else{
        numOperand1= display.innerText;
    }
    display.innerText = numOperand1+'-';
    str="";
}
box[11].addEventListener('click',sub);

// Multiplication
function multi(){
    if(display.innerText.includes('*')){
        numOperand1 = parseFloat(display.innerText.substring(0,display.innerText.indexOf('*')));
        operand2= parseFloat(display.innerText.substring(display.innerText.indexOf('*')+1,display.innerText.length));
        numOperand1 = numOperand1*operand2;
    }else{
        numOperand1= display.innerText;
    }
    display.innerText = numOperand1+'*';
    str="";
}
box[7].addEventListener('click',multi);

// Division
function div(){
    if(display.innerText.includes('/')){
        numOperand1 = parseFloat(display.innerText.substring(0,display.innerText.indexOf('/')));
        operand2= parseFloat(display.innerText.substring(display.innerText.indexOf('/')+1,display.innerText.length));
        if(operand2==0){
            display.innerText = "ERROR! Preess C"
        }else{
            numOperand1 = numOperand1/operand2;
            display.innerText = numOperand1;
        }
    }else{
        numOperand1= display.innerText;
    }
    display.innerText = numOperand1+'/';
    str="";
}
box[15].addEventListener('click',div);

// Percentage
function per(){
    if(display.innerText.includes('%')){
        numOperand1 = parseFloat(display.innerText.substring(0,display.innerText.indexOf('%')));
        operand2= parseFloat(display.innerText.substring(display.innerText.indexOf('%')+1,display.innerText.length));
        numOperand1 = (operand2/numOperand1)*100;
    }else{
        numOperand1= display.innerText;
    }
    display.innerText = numOperand1 +'%';
    str="";
}
box[2].addEventListener('click',per);

// function call on equal click
function equal(){
    if(display.innerText.includes('+')){
        numOperand1 = parseFloat(display.innerText.substring(0,display.innerText.indexOf('+')));
        if((display.innerText.substring(display.innerText.indexOf('+')+1,display.innerText.length))==""){
            display.innerText = numOperand1;
        }else{
            operand2= parseFloat(display.innerText.substring(display.innerText.indexOf('+')+1,display.innerText.length));
        numOperand1 = numOperand1+operand2;
        display.innerText = numOperand1;
        }
    }

    else if(display.innerText.includes('-')){
        numOperand1 = parseFloat(display.innerText.substring(0,display.innerText.indexOf('-')));
        if((display.innerText.substring(display.innerText.indexOf('-')+1,display.innerText.length))==""){
            display.innerText = numOperand1;
        }else{
            operand2= parseFloat(display.innerText.substring(display.innerText.indexOf('-')+1,display.innerText.length));
        numOperand1 = numOperand1-operand2;
        display.innerText = numOperand1;
        }
    }

    else if(display.innerText.includes('*')){
        numOperand1 = parseFloat(display.innerText.substring(0,display.innerText.indexOf('*')));
        if((display.innerText.substring(display.innerText.indexOf('*')+1,display.innerText.length))==""){
            display.innerText = numOperand1;
        }else{
            operand2= parseFloat(display.innerText.substring(display.innerText.indexOf('*')+1,display.innerText.length));
        numOperand1 = numOperand1*operand2;
        display.innerText = numOperand1;
        }
    }

    else if(display.innerText.includes('/')){
        numOperand1 = parseFloat(display.innerText.substring(0,display.innerText.indexOf('/')));
        if((display.innerText.substring(display.innerText.indexOf('/')+1,display.innerText.length))==""){
            display.innerText = numOperand1;
        }else{
            operand2= parseFloat(display.innerText.substring(display.innerText.indexOf('/')+1,display.innerText.length));
            if(operand2==0){
                display.innerText = "ERROR! Preess C"
            }else{
                numOperand1 = numOperand1/operand2;
                display.innerText = numOperand1;
            }

        }
    }

    else if(display.innerText.includes('%')){
        numOperand1 = parseFloat(display.innerText.substring(0,display.innerText.indexOf('%')));
        if((display.innerText.substring(display.innerText.indexOf('%')+1,display.innerText.length))==""){
            display.innerText = numOperand1;
        }else{
            operand2= parseFloat(display.innerText.substring(display.innerText.indexOf('%')+1,display.innerText.length));
        numOperand1 = (operand2/numOperand1)*100;
        display.innerText = numOperand1;
        }
    }
}
box[18].addEventListener('click',equal);

/**
 * @bugs :
 *      1. Keyboard typing
 *      2. Multiple operation same time
 *      3. division error
 *      4. float precision
 * @ThankYou from MOHIT_YEDE
 */