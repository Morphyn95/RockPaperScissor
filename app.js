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
    logBattle();
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function logBattle() {
    let history = document.getElementById('history');
    console.log('history', history);
    let htmlElement = document.createElement('div');
    htmlElement.innerHTML = "Je suis dans l'historique";
    history.append(htmlElement);
}
