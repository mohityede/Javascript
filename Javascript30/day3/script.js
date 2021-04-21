let inp = document.querySelectorAll('.controls input');

inp.forEach(input=> input.addEventListener('change',function(){
    let suf = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suf);

}));
inp.forEach(input=> input.addEventListener('mousemove',function(){
    let suf = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suf);
}));

// const inputs = document.querySelectorAll('.controls input');

// function handleUpdate() {
//   const suffix = this.dataset.sizing || '';
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));