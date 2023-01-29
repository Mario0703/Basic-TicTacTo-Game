let current_player = "x";
LabelArray = [];


for (let i = 0; i<=9; i++){
    const box = document.getElementById("label-"+i.toString());
    LabelArray[i] = box;
}

console.log(LabelArray);
for (let i = 0; i<=9; i++){
    LabelArray[i].addEventListener("click", function(){
        LabelArray[i].innerHTML = "x";
    })
}