
let xp=0;
let health=100;
let gold=50;

const btn=document.querySelector(".btn");
const text=document.querySelector(".col-2");

const location=[
    { 
    name:"town squre",
    "button text":["go to store"],
    "button functions":[goStore],
    text:"you Enter the store"
}
{ 
    name:"Store",
    "button text":["buy this"],
    "button functions":[goStore],
    text:"you Enter the store"
}
]

btn.onclick=goStore;


function goStore(){ 
 btn.innerText="Nothing";
 text.innerText="there are nothing but you are so what should i do";
}
function goTown(){ 
     
    console.log("None with what");
    btn.onclick=goStore;

}





