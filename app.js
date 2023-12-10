let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-bt")
let play_again=document.querySelector("#play-bt")
let player1=document.querySelector("#pla1")
let player2=document.querySelector("#pla2")
let turn=true;
let player_1_count=0;
let player_2_count=0;

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===true){
            box.innerText=0;
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
   checkWinner(); 
})  ;
});

let disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        turn=true;
    }
}

const checkWinner =()=>{
    for(let pattern of winPattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!=""&&val2!=""&&val3!=""){
            if((val1===val2&&val2===val3)&&val1===val3){
              
            if(val1==="0"){
                player_1_count++
                player1.innerText=player_1_count;
                disableBox();
            }
            else if(val1==="X"){
                player_2_count++
                player2.innerText=player_2_count;
                disableBox();
            }
            
        }
    }
}

reset.addEventListener("click",()=>{
    enableBox();
    player_1_count=0;
    player_2_count=0;
        player1.innerText=0;
        player2.innerText=0;
})

play_again.addEventListener("click",()=>{
    enableBox();
})
}
