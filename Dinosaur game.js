let outer_div=document.querySelectorAll(".outer-div");
let bikash=document.querySelector(".bikash");

let jump=document.querySelector(".jump");
let stylee=getComputedStyle(bikash);



jump.addEventListener("click",()=>{
     console.log("bikash_jump_class");
    bikash.classList.add("bikash_jump_class");
    jump.style.possition="absolute"
    console.log("clicked");
    setTimeout(()=>{
        console.log("clicked time");
        bikash.classList.remove("bikash_jump_class");
    },400);


    
 });
 
