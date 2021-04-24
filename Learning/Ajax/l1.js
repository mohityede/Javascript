console.log("hello ajax")

let fetch = document.getElementById("fetch");
let backup = document.getElementById("backup");

// for Get Request
function bak(){
    console.log("clicked");
    // initalize xhr object
    let xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET','mhit.txt',true);

    // what to do when progress
    xhr.onprogress = () => console.log("ON progress..."); // optional

    // when response is ready
    xhr.onload = () =>{
        if(xhr.status == 200){
            console.log(xhr.responseText);
        }
        else {
            console.log("Something is wrong");
        }
    }

    // send the request
    xhr.send();
}
fetch.addEventListener('click',bak);

// for POST request
backup.addEventListener('click', ()=>{
    console.log("post request");
    // initalize xhr object
    let xhr = new XMLHttpRequest();

    // open the object
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getAllResponseHeaders('Content-type','application/json');

    // what to do when progress
    xhr.onprogress = () => console.log("ON progress..."); // optional

    // when response is ready
    xhr.onload = () =>{
        if(xhr.status == 200){
            console.log(xhr.responseText);
        }
        else {
            console.log("Something is wrong");
        }
    }

    parameters = `{"name":"dhoni","salary":"1000200","age":"30"}`;

    // send the request
    xhr.send(parameters);
})


let pop = document.getElementById("pop");
pop.addEventListener('click',function(){
    console.log("pop clicked");

    // initalize xhr object
    let xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

    // what to do when progress
    xhr.onprogress = () => console.log("ON progress..."); // optional

    // when response is ready
    xhr.onload = () =>{
        if(xhr.status == 200){
            let obj = JSON.parse(xhr.responseText);
            console.log(obj.data[0])
            let lst = document.getElementById("lst");
            let str = "";
            for(i in obj.data){
                str += `<li>${obj.data[i].id} ${obj.data[i].employee_name}</li>`;
            }
            lst.innerHTML = str;
        }
        else {
            console.log("Something is wrong");
        }
    }

    // send the request
    xhr.send();
    console.log("done");

})