let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset-bt")
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

const checkWinner =()=>{
    for(let pattern of winPattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!=""&&val2!=""&&val3!=""){
            if(val1==="0"&&val2==="0"&&val3==="0"){
                player_1_count++
                player1.innerText=player_1_count;
                boxes.forEach((box)=>{
                    box.innerText=''
                    box.disabled=false;
            })
            }
            else if(val1==="X"&&val2==="X"&&val3==="X"){
                player_2_count++
                player2.innerText=player_2_count;
                boxes.forEach((box)=>{
                    box.innerText=''
                    box.disabled=false;
            })
            }
            
        }
    }
}

reset.addEventListener("click",()=>{
        boxes.forEach((box)=>{
            box.innerText=''
            box.disabled=false;
            turn=true;
    })
        player1.innerText=0;
        player2.innerText=0;
})

