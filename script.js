const recButton = document.querySelector(".rec");
const record = document.querySelector(".record-book");
const text = document.querySelector(".txt");
const btn2 = document.querySelector(".btn");
const int = document.querySelector(".int");
const bn = document.querySelector(".bn");
const list = document.querySelector(".list");
let up = true;

let items = [];
try {
    items = JSON.parse(localStorage.getItem("ht")) || []
} catch (e) {
    items = [];
}

function render() {

       

    list.innerHTML = "";
        const head = document.createElement("h2");
        head.innerText = "Records";
        list.appendChild(head);
    items.forEach((item,index) => {
        const li = document.createElement("li");

        li.textContent = item;
        
    li.addEventListener("click",()=>{
        items.splice(index,1);
        localStorage.setItem("ht", JSON.stringify(items));
        render();
    })
        list.appendChild(li);

    });

    head.addEventListener("click",()=>{
        li.style.color = "pink";
        localStorage.setItem("ht", JSON.stringify(items));
        render();
    })
    
}

render();

recButton.addEventListener("click", () => {
  if (up) {
    record.classList.add("open");
    text.classList.add("none");
    recButton.innerText = "Upload";
    up = false;
  } else {
    const head = document.querySelector("reco");
    btn2.classList.remove("none");
    int.classList.remove("none");
    bn.classList.remove("none");
    recButton.classList.add("none");
  }
});

btn2.addEventListener("click",()=>{
    btn2.classList.add("none");
    int.classList.add("none");
    bn.classList.add("none");
    list.classList.remove("none");
    list.classList.add("flex");

    const value = int.value.trim();
    if (value) {
        items.push(value);
        localStorage.setItem("ht", JSON.stringify(items))
        render();
    }
    int.value = "";
})
