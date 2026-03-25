// Desafio: Calculadora de partidas rankeadas

// Variáveis, Vetores e Matrizes:
let players = [
  ["Gabi", "F", 12, 19],
  ["Maria", "F", 9, 1],
  ["João", "M", 19, 5],
  ["Pedro", "M", 60, 13],
  ["Ana", "F", 77, 11],
  ["Marcos", "M", 95, 10],
  ["Fernanda", "F", 101, 5],
  ["Aline", "F", 175, 38],
];

let playerName = players[3][0];
let playerGander = players[3][1];
let playerVictories = players[3][2];
let playerDefeats = players[3][3];
let playerLevel = "";

// Função com retorno:
function calculateBalance (victories, defeats) {
  let playerBalance = victories - defeats;
  return playerBalance;
}

let calculateBalanceResult = calculateBalance(playerVictories, playerDefeats);

// Estrutura de decisão - if, else if e else:
if (calculateBalanceResult === 0) {
  playerLevel = "Iniciante";
} else if (calculateBalanceResult > 0 && calculateBalanceResult < 11) {
  playerLevel = "Ferro";
} else if (calculateBalanceResult > 10 && calculateBalanceResult < 21) {
  playerLevel = "Bronze";
} else if (calculateBalanceResult > 20 && calculateBalanceResult < 51) {
  playerLevel = "Prata";
} else if (calculateBalanceResult > 50 && calculateBalanceResult < 81) {
  playerLevel = "Ouro";
} else if (calculateBalanceResult > 80 && calculateBalanceResult < 91) {
  playerLevel = "Diamante";
} else if (calculateBalanceResult > 90 && calculateBalanceResult < 101) {
  playerLevel = "Lendário";
} else if (calculateBalanceResult >= 101) {
  playerLevel = "Imortal";
} else {
  playerLevel = "Negativo";
}

// Mensagens de saída:
if (playerGander === "M") {
  console.log(`O jogador ${playerName} venceu ${playerVictories} partidas e perdeu ${playerDefeats}.`)
} else {
  console.log(`A jogadora ${playerName} venceu ${playerVictories} partidas e perdeu ${playerDefeats}.`)
}

console.log(`O saldo atual é ${calculateBalanceResult}, Nível ${playerLevel}.`)
