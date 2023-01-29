LabelArray = [];
input = [];
let player = "x";
let turn = 0;
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

for (let i = 0; i<=8; i++){
    const box = document.getElementById("label-"+i.toString());
    LabelArray[i] = box;
}

for (let i in LabelArray){
    LabelArray[i].addEventListener("click", function(){
        LabelArray[i].innerHTML = player;
        options[i] =  player;
        player = Change_player();
        
        for(let i = 0; i < winConditions.length; i++){
            const condition = winConditions[i];
            const cellA = options[condition[0]];
            const cellB = options[condition[1]];
            const cellC = options[condition[2]];
        
            if(cellA == "" || cellB == "" || cellC == ""){
                continue;
            }
            if(cellA == cellB && cellB == cellC){
                console.log("You won!")
         }
        }
    });
}



function Change_player(){
        if (turn == 1){
            turn = 0
            player = "x";
        }
        else{
            turn = 1
            player = "o";
        }
        return player;
}

