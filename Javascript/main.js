const prom= new Promise((res,req)=>{
    setTimeout(() => {
        res("Promise resolved!");
    }, 5000);
})

const prom2= new Promise((res,req)=>{
    setTimeout(() => {
        res("Promise resolved!");
    }, 2000);
})

async function getData(){
    console.log("getData started")
    const d3= await prom2;
    console.log("after d3");
    console.log("d3 value: "+d3);
    
    const d1= await prom;
    console.log("after d1");
    console.log("d1 value: "+d1);


    const d2= await prom;
    console.log("after d2");
    console.log("d2 value: "+d2);

}

const data= getData();