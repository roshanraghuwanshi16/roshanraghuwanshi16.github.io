const text="Professional Web Developer";
let i=0;

function typing(){
if(i<text.length){
document.getElementById("typing").textContent+=text.charAt(i);
i++;
setTimeout(typing,50);
}
}

window.onload=function(){
typing();
}

/* scroll animation */

window.addEventListener("scroll",function(){
let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){
let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let visible=100;

if(elementTop<windowHeight-visible){
reveals[i].classList.add("active");
}
}
});

/* mobile menu */

const menuBtn=document.getElementById("menuBtn");
const menu=document.getElementById("menu");

menuBtn.onclick=function(){
menu.classList.toggle("active");
};
const lenis = new Lenis({
duration: 1.2,
smooth: true
});

function raf(time) {
lenis.raf(time);
requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
