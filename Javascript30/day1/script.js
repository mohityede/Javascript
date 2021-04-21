window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    console.log(key);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
})

const k = document.querySelectorAll('.key');
for(let i=0;i<k.length;i++){
    // event when transition end:
    k[i].addEventListener('transitionend',function(e){
        if(e.propertyName !== 'transform') return;
        console.log(this);
        this.classList.remove('playing');
    })
    // event when user click :
    k[i].addEventListener('click',function(e){
        const audio = document.querySelector(`audio[data-key="${k[i].getAttribute('data-key')}"]`);
        const key = document.querySelector(`.key[data-key="${k[i].getAttribute('data-key')}"]`);
        console.log(audio);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    })
}




// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
//   }

//   function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
//   }

//   const keys = Array.from(document.querySelectorAll('.key'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);
