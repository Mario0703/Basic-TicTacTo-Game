LabelArray = [];
input = [];
let player = "X";
let row = 0;
let col = 0;
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let btn = document.getElementById("rest-btn");
let turen_field = document.getElementById("turn-field");
let win = document.getElementById("win-field");



for (let i = 0; i<=8; i++){
    const box = document.getElementById("label-"+i.toString());
    LabelArray[i] = box;
}

for (let i in LabelArray){
    LabelArray[i].addEventListener("click", function(){
        LabelArray[i].innerHTML = player;
        options[i] =  player;
        Change_player();
        Clear_board()
        Check_winnner();
        Check_playerr_turn();
        });
}

function Clear_board(){
    btn.onclick = function(){
        for( let i in options){
            options[i] = "";
            LabelArray[i].innerHTML = "";
        }
    
    }
}


function Check_winnner(){
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            win.innerHTML = (cellA+" Won the game!");
     }
    }
}

let Change_player  = () =>{
    player = (player == "X") ? player ="O":  player ="X";
    return player;
}

let Check_playerr_turn = () =>{
    (player == "X") ? turen_field.innerHTML = "Its X's turn":  turen_field.innerHTML = "Its O's turn";
    return turen_field.innerHTML;
}
