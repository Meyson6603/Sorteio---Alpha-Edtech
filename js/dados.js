/* ------- Definição dos dados (faces) ------- */
const diceFaces = {
  1: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="10" fill="black" />
            </svg>`,
  2: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="10" fill="black" />
              <circle cx="75" cy="75" r="10" fill="black" />
            </svg>`,
  3: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="10" fill="black" />
              <circle cx="50" cy="50" r="10" fill="black" />
              <circle cx="75" cy="75" r="10" fill="black" />
            </svg>`,
  4: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="10" fill="black" />
              <circle cx="75" cy="25" r="10" fill="black" />
              <circle cx="25" cy="75" r="10" fill="black" />
              <circle cx="75" cy="75" r="10" fill="black" />
            </svg>`,
  5: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="10" fill="black" />
              <circle cx="75" cy="25" r="10" fill="black" />
              <circle cx="50" cy="50" r="10" fill="black" />
              <circle cx="25" cy="75" r="10" fill="black" />
              <circle cx="75" cy="75" r="10" fill="black" />
            </svg>`,
  6: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="20" r="10" fill="black" />
              <circle cx="75" cy="20" r="10" fill="black" />
              <circle cx="25" cy="50" r="10" fill="black" />
              <circle cx="75" cy="50" r="10" fill="black" />
              <circle cx="25" cy="80" r="10" fill="black" />
              <circle cx="75" cy="80" r="10" fill="black" />
            </svg>`,
};

/* ------- Classe dos Dados ------- */
class Dice {
  constructor() {
    this.side = 1;
    this.svg = diceFaces[this.side];
    this.allsides = 6;
  }

  roll() {
    this.side = Math.floor(Math.random() * this.allsides) + 1;
    this.svg = diceFaces[this.side];
  }

  reset() {
    this.side = 1;
    this.svg = diceFaces[this.side];
  }
}

/* ------- Função Exportada ------- */
export function createDiceContainer(singlePage) {
  let container = document.createElement("div");
  container.id = "Dice";
  container.innerHTML = `
        <label for="value">
          Quantos dados você deseja?
          <input type="number" id="diceCount" max="6" min="1" placeholder="1" value="1"/>
        </label>
        <button id="btnDiceCount">Aplicar</button>
        <div class="cardDice"></div>
      `;

  let dices = Array.from({ length: 6 }, () => new Dice());
  let divDice = container.querySelector(".cardDice");
  let btnDiceCount = container.querySelector("#btnDiceCount");
  let inputValue = container.querySelector("#diceCount");
  let maxDicesInScreen = 1;

  btnDiceCount.addEventListener("click", function () {
    maxDicesInScreen = Number(inputValue.value);
    dices.forEach((d) => d.reset());
    listarDados();
  });

  function listarDados() {
    divDice.innerHTML = "";
    for (let i = 0; i < maxDicesInScreen; i++) {
      let dadoDiv = document.createElement("div");
      dadoDiv.innerHTML = dices[i].svg;
      divDice.appendChild(dadoDiv);
    }
    criarBotaoSortear();
  }

  function criarBotaoSortear() {
    let sortButton = container.querySelector("#sortButton");
    if (!sortButton) {
      sortButton = document.createElement("button");
      sortButton.id = "sortButton";
      sortButton.innerText = "Sortear";
      sortButton.addEventListener("click", sortearDados);
      container.appendChild(sortButton);
    }
  }

  function sortearDados() {
    dices.forEach((d) => d.roll());
    listarDados();
  }

  return container;
}
