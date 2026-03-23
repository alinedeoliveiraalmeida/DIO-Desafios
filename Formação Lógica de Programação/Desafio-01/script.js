// Desafio: Classificador de nível de herói

// Variáveis, Vetores e Matrizes:
let heroes = [
  ["Mulher Gato", "F", 0],
  ["Homem Aranha", "M", 500],
  ["Viúva Negra", "F", 1400],
  ["Pantera Negra", "M", 3100],
  ["Superman", "M", 6900],
  ["Homem de Ferro", "M", 7500],
  ["Capitã Marvel", "F", 8200],
  ["Supergirl", "F", 9130],
  ["Aquaman", "M", 10150],
];

let heroName = heroes[0][0];
let heroGander = heroes[0][1];
let heroXP = heroes[0][2];
let heroLevel = "";

const message = "A pontuação atual é de ";

// Estrutura de decisão - if, else if e else:
if (heroXP >= 1 && heroXP <= 1000) {
  heroLevel = "Ferro";
} else if (heroXP >= 1001 && heroXP <= 2000) {
  heroLevel = "Bronze";
} else if (heroXP >= 2001 && heroXP <= 5000) {
  heroLevel = "Prata";
} else if (heroXP >= 5001 && heroXP <= 7000) {
  heroLevel = "Ouro";
} else if (heroXP >= 7001 && heroXP <= 8000) {
  heroLevel = "Platina";
} else if (heroXP >= 8001 && heroXP <= 9000) {
  heroLevel = "Ascendente";
} else if (heroXP >= 9001 && heroXP <= 10000) {
  heroLevel = "Imortal";
} else if (heroXP >= 10001) {
  heroLevel = "Radiante";
} else {
  heroLevel = "Iniciante";
}

if (heroGander === "M") {
  console.log("O super herói " + heroName + " está no nível " + heroLevel + ".");
} else {
  console.log("A super heroína " + heroName + " está no nível " + heroLevel + ".");
}

// Estrutura de decisão - Switch Case:
switch (heroLevel) {
  case "Iniciante":
    console.log(message + heroXP + " XP. Comece agora!");
    break;
  case "Ferro":
  case "Bronze":
  case "Prata":
  case "Ouro":
  case "Platina":
  case "Ascendente":
  case "Imortal":
    console.log(message + heroXP + " XP. Foco no próximo nível!");
    break;
  case "Radiante":
    console.log(message + heroXP + " XP. Parabéns! " + heroName + " Atingiu o nível máximo.");
    break;
  default:
    console.log("O nível " + heroLevel + " não existe!");
}
