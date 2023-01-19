// const paper = {
//     text: "paper",
//     value: 1
// }
// document.getElementById("paper").onclick = battle(paper.text) // paper est une variable, or paper n'existe pas
// document.getElementById("paper").onclick = battle(.paper) // warning de vscode. Mauvaise syntaxe. .paper c'est l'attribut d'un objet 

document.getElementById("paper").onclick = function () {
    battle("paper") // c'est un string
}



document.getElementById("rock").onclick = function () {
    battle("rock") // c'est un string
}



document.getElementById("scissor").onclick = function () {
    battle("scissor") // c'est un string
}



function battle(choice) {
    console.log(choice);
}