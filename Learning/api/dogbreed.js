let butn = document.querySelector('.btn-primary');
console.log(butn);


butn.addEventListener('click',function(){
    butn.innerHTML = "Next";
    let xhr = new XMLHttpRequest();
    xhr.onprogress = function(){
        let area = document.getElementById('img-dog');
        area.innerText = "image is loading...";
    }
    xhr.onload = function(){
        console.log(xhr.responseText);
        let res = JSON.parse(xhr.responseText);
        let imgurl = res.message;
        let area = document.getElementById('img-dog');
        area.setAttribute('src',imgurl);
        console.log(imgurl);
    }
    xhr.open('GET','https://dog.ceo/api/breeds/image/random');
    xhr.send();
});