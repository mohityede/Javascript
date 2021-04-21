const secHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const sHand = document.querySelector('.sec');
const hHand = document.querySelector('.hour');
const mHand = document.querySelector('.min');

function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    const secDeg = ((sec/60)*360)+90;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    sHand.innerHTML = `${sec}`;

    const min = now.getMinutes();
    const minDeg = ((min/60)*360)+90;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    minHand.style.background = 'yellow';
    mHand.innerHTML = `${min}`;

    const hour = now.getHours();
    const hourDeg = ((hour/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    hHand.innerHTML = `${hour}`;
}
setInterval(setDate,1000);

// const secondHand = document.querySelector('.second-hand');
// const minsHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');

// function setDate() {
//     const now = new Date();

//     const seconds = now.getSeconds();
//     const secondsDegrees = ((seconds / 60) * 360) + 90;
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//     const mins = now.getMinutes();
//     const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
//     minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//     const hour = now.getHours();
//     const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
//     hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(setDate, 1000);

// setDate();