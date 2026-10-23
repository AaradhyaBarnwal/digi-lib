const recButton = document.querySelector(".rec");
const record = document.querySelector(".record-book");
const text = document.querySelector(".txt");
const btn2 = document.querySelector(".btn");
const int = document.querySelector(".int");
const bn = document.querySelector(".bn");
const list = document.querySelector(".list");

let up = true;

recButton.addEventListener("click", () => {
  if (up) {
    record.classList.add("open");
    text.classList.add("none");
    recButton.innerText = "Upload";
    up = false;
  } else {
    btn2.classList.remove("none");
    int.classList.remove("none");
    bn.classList.remove("none");
    recButton.classList.add("none");
  }
});

btn2.addEventListener("click",()=>{
    let ice = 
})