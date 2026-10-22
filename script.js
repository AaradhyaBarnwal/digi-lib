let recButton = document.querySelector(".rec");
let record = document.querySelector('.record-book');
let text = document.querySelector(".txt");
let btn = document.querySelector(".rec");

recButton.addEventListener("click",()=>{
    record.classList.add("open");
    text.classList.add("none");
    btn.classList.add("none");
})