let butn = document.querySelector('.btn-primary');

butn.addEventListener('click',function(){
    butn.innerHTML = "Next";
    let xhr = new XMLHttpRequest();
    xhr.onprogress = function(){
        let area = document.getElementById('img-dog');
        area.innerText = "image is loading...";
    }
    xhr.onload = function(){
        let res = JSON.parse(xhr.responseText);
        let imgurl = res.message;
        let area = document.getElementById('img-dog');
        area.setAttribute('src',imgurl);
    }
    xhr.open('GET','https://dog.ceo/api/breeds/image/random');
    xhr.send();
});

// Promise
var userLog = false;
var promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(userLog){
            resolve();
        }else{
            reject();
        }
    },2000);
});

setTimeout(()=>{
    userLog=true;
},1000);

promise.then(()=>{
    console.log("promise sucess");
}).catch(()=>{
    console.log("promise unseccesfull");
})