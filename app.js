// const paper = {
//     text: "paper",
//     value: 1
// }
// document.getElementById("paper").onclick = battle(paper.text) // paper est une variable, or paper n'existe pas
// document.getElementById("paper").onclick = battle(.paper) // warning de vscode. Mauvaise syntaxe. .paper c'est l'attribut d'un objet 


document.getElementById("rock").onclick = function () {
    battle({
        text: "rock", // c'est un string
        value: 0, // c'est un int
    }) 
}

document.getElementById("paper").onclick = function () {
    battle({
        text: "paper", // c'est un string
        value: 1, // c'est un int
})
}

document.getElementById("scissor").onclick = function () {
    battle({
        text: "scissor", // c'est un string
        value: 2, // c'est un int
})
}


// Rock vs paper = Paper 
// 0 vs 1 = 1
// Paper vs scissor = Scissor
// 1 vs 2 = 2
// Scissor vs rock = Rock
// 2 vs 0 = 0
// Lose c'est un ligne
// Egal c'est une ligne
// Rock : 0
// Paper : 1
// Scissor : 2
function battle(choice) {
    console.log(choice);
    let computerChoice = getRandomInt();
    console.log(computerChoice);

    // if choice(value) = 1 and computerChoice = 0 then 1="paper won vs rock" 
    // if choice(value) = computerChoice then result="draw"
    // else result="defeat"

    if(choice.value === computerChoice) {
        console.log("draw");
    } else if(choice.value === 1 && computerChoice === 0) {
        console.log("paper won vs rock");
    } else if(choice.value === 2 && computerChoice === 1) {
        console.log("scissor won vs paper");
    } else if(choice.value === 0 && computerChoice === 2) {
        console.log("rock won vs scissor");
    } else {
        console.log("defeat");
    }
    // if choice(value) = computerChoice then result="draw"
    // else result="defeat"

    // if(condition) {
        
    // }
    
    // if(condition && condition) {
        
    // } else if(condition) {

    // } else {

    // }

    // if(condition || condition) {
        
    // } else {

    // }
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}
