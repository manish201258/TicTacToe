let body=document.querySelector(".container")
let modes=document.querySelector("#modes")
let mode=true;

modes.addEventListener("click",()=>{
    if(mode===true){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        modes.innerText="Dark";
        mode=false;
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        modes.innerText="Light";
        mode=true;
    }
})
