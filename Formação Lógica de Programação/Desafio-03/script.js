// Desafio: Escrevendo as classes de um Jogo

// JSON - JavaScript Object Notation:
const dataHeroes = [
  {
    "name": "Merlin",
    "age": 150,
    "type": "mago"
  },
  {
    "name": "Leonidas",
    "age": 35,
    "type": "guerreiro"
  },
  {
    "name": "Shifu",
    "age": 80,
    "type": "monge"
  },
  {
    "name": "Hanzo",
    "age": 28,
    "type": "ninja"
  }
];

// Classe:
class Hero {
  constructor (name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  // Método que retorna o tipo de ataque:
  getAttack () {
    let attacks;

    switch (this.type.toLowerCase()) {
      case "mago":
        attacks = "magia";
        break;
      case "guerreiro":
        attacks = "espada";
        break;
      case "monge":
        attacks = "artes marciais";
        break;
      case "ninja":
        attacks = "shuriken";
        break;
      default:
        attacks = "ataque genérico";
    }

    return attacks;
  }

  // Método para exibir mensagem:
  displayMessage () {
    const attack = this.getAttack();
    console.log(`O herói ${this.name} de ${this.age} anos, é um ${this.type} e luta usando ${attack}.`);
  }
}

// Processando os dados do JSON:
dataHeroes.forEach(h => {
  const newHero = new Hero(h.name, h.age, h.type);
  newHero.displayMessage();
})
