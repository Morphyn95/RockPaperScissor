// TODO:
// Faire une classe Weapon avec les attributs text, value & class
// Et instancier des objets rock, paper, scissor, spock, lizard

document.getElementById("rock").onclick = function () {
  battle({
    text: "rock",
    value: 0,
    class: ["fa-solid", "fa-hand-back-fist"],
  });
};

document.getElementById("paper").onclick = function () {
  battle({
    text: "paper",
    value: 1,
    class: ["fa-solid", "fa-hand"],
  });
};

document.getElementById("scissor").onclick = function () {
  battle({
    text: "scissor",
    value: 2,
    class: ["fa-solid", "fa-hand-scissors"],
  });
};

function battle(choice) {
  let resultat;
  let computerChoice = buildComputerChoice();
  if (choice.value === computerChoice.value) {
    resultat = "Draw";
  } else if (choice.value === 1 && computerChoice.value === 0) {
    resultat = "Paper won vs Rock";
  } else if (choice.value === 2 && computerChoice.value === 1) {
    resultat = "Scissor won vs Paper";
  } else if (choice.value === 0 && computerChoice.value === 2) {
    resultat = "Rock won vs Scissor";
  } else {
    resultat = "Defeat";
  }
  logBattle(resultat, choice, computerChoice);
}

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function buildComputerChoice() {
  let value = getRandomInt();
  let computerChoice = {
    value: value,
    class: ["fa-solid", "fa-hand"],
  };
  if (!value) {
    computerChoice.text = "rock";
    computerChoice.class[1] += "-back-fist";
  } else if (value === 1) {
    computerChoice.text = "paper";
  } else {
    computerChoice.text = "scissor";
    computerChoice.class[1] += "-scissors";
  }
  return computerChoice;
}

// TODO:
// Compte le nombre de points pour le joueur et l'ordi
function logBattle(resultat, player, computer) {
  let color;
  switch (resultat) {
    case "Draw":
      color = "orange";
      break;
    case "Defeat":
      color = "red";
      break;
    default:
      color = "green";
      resultat = "Win";
      break;
  }
  let history = document.getElementById("history");
  let resultContainer = document.createElement("div");
  resultContainer.style.display = "flex";
  resultContainer.style.justifyContent = "space-around";
  let htmlElement = document.createElement("div");
  let playerIcon = document.createElement("i");
  playerIcon.classList.add(player.class[0]);
  playerIcon.classList.add(player.class[1]);
  let computerIcon = document.createElement("i");
  computerIcon.classList.add(computer.class[0]);
  computerIcon.classList.add(computer.class[1]);
  htmlElement.style.color = color;
  htmlElement.innerHTML = resultat;
  resultContainer.append(playerIcon);
  resultContainer.append(htmlElement);
  resultContainer.append(computerIcon);
  history.prepend(resultContainer);
}
