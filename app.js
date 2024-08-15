const redbtn=document.querySelector(".red");

const greenbtn= document.querySelector(".green");

const bluebtn= document.querySelector(".blue");

const randombtn= document.querySelector(".random");

const body=document.querySelector("body");
  const h1=document.querySelector("h1");

//tawana ka nasandetm aw battnana ka range body agorn


//awash nasandne zyad krdne zhmarakana 

const btnadd=document.querySelector(".btn1");
const btndown=document.querySelector(".btn2");
const addnumber=document.querySelector(".addnumber");

let NumberAdd=0;

redbtn.addEventListener("click" , ()=>{
h1.style.color="red";
body.style.background="red";
});

greenbtn.addEventListener("click" , ()=>{
    h1.style.color='green';
    body.style.background="green";
});

bluebtn.addEventListener("click", ()=>{
    h1.style.color='blue';
    body.style.background="blue";
});

randombtn.addEventListener("click", ()=>{
    let r=Math.floor(Math.random() * 255);
    let g=Math.floor(Math.random() * 255)
    let b=Math.floor(Math.random() *255)
   body.style.background=`rgb(${r} , ${g} , ${b})`
    h1.style.color=`rgb(${r} , ${g} , ${b})`
 
});


btnadd.addEventListener("click" , ()=>{
    NumberAdd++;
    addnumber.textContent=NumberAdd;

});

btndown.addEventListener("click" , ()=>{
    if(NumberAdd!=0){
NumberAdd--;
addnumber.textContent=NumberAdd;
    }
})