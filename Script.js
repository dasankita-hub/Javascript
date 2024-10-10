let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector(".new");
let msgconatiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        if(turno){
            box.innerText="o";
            turno=false;
        }
        else{
            box.innerText="x";
            turno=true;
        }
      box.disabled=true;
      checkWinner();
      checkDraw();
     })
      
});
const resetgame=()=>{
    turno=true;
     enable();
     msgconatiner.classList.add("hide") ;
}
const enable=()=>{
    for(box of boxes){
         box.disabled=false;
         box.innerText="";
    }
}
const disable=()=>{
    for(box of boxes){
         box.disabled=true;
    }
}
 const showWinner =(winner) =>{
        msg.innerText=`Congratulations winner is ${winner}`;
        msgconatiner.classList.remove("hide");
        disable();
 }
 const showDraw=()=>{
   msg.innerText="Game Draw";
   msgconatiner.classList.remove("hide");
 }
const checkWinner =()=>{
   for (let patterns of winpatterns){
     let pos1val=boxes[patterns[0]].innerText;
     let pos2val=boxes[patterns[1]].innerText;
     let pos3val=boxes[patterns[2]].innerText;
     if(pos1val !=""&& pos2val !=""&& pos3val !=""){
      if(pos1val ===pos2val && pos2val===pos3val){
        showWinner(pos1val);
      }
     }
   }
}


newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
