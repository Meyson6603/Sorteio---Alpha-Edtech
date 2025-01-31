const desenharRoleta = (svg, itens) => {
  // Limpar o SVG
  svg.innerHTML = "";
  const coresHarmonicas = [
    "dodgerblue",
    "crimson",
    "forestgreen",
    "goldenrod",
    "rebeccapurple",
    "darkorange",
    "darkcyan",
    "darkmagenta",
    "darkolivegreen",
    "deeppink",
    "darkslategray",
    "saddlebrown"
  ];


  const total = itens.length;
  const centro = 200; // Centro do SVG (400x400)
  const raio = 200; // Raio do círculo
  const anguloIncremento = 360 / total;
  // const tamanhoFonte = Math.max(10, 30 - total); // Mantém legível mesmo com muitos itens

  itens.forEach((item, index) => {
    const anguloInicio = index * anguloIncremento;
    const anguloFim = anguloInicio + anguloIncremento;

    // Criar o setor
    const x1 = centro + raio * Math.cos(-(Math.PI / 180) * anguloInicio);
    const y1 = centro + raio * Math.sin(-(Math.PI / 180) * anguloInicio);
    const x2 = centro + raio * Math.cos(-(Math.PI / 180) * anguloFim);
    const y2 = centro + raio * Math.sin(-(Math.PI / 180) * anguloFim);

    let pathData;
    if (total === 1) {
      // Caso especial para um único item
      pathData = `
                  M ${centro},${centro} 
                  m -${raio}, 0
                  a ${raio},${raio} 0 1,0 ${raio * 2},0
                  a ${raio},${raio} 0 1,0 -${raio * 2},0
              `;
    } else {
      pathData = `
                  M ${centro},${centro} 
                  L ${x1},${y1} 
                  A ${raio},${raio} 0 ${anguloFim - anguloInicio > 180 ? 1 : 0
        },0 ${x2},${y2} 
                  Z
              `;
    }

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("fill", coresHarmonicas[index % coresHarmonicas.length]);
    path.setAttribute("stroke", "black");
    path.setAttribute("stroke-width", "0");
    svg.appendChild(path);

    // Adicionar texto
    const anguloTexto = anguloInicio + anguloIncremento / 2;
    const textoRaio = Math.min(raio - 35, 50 + total * 5);
    const textoX =
      centro + textoRaio * Math.cos(-(Math.PI / 180) * anguloTexto);
    const textoY =
      centro + textoRaio * Math.sin(-(Math.PI / 180) * anguloTexto);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", textoX);
    text.setAttribute("y", textoY);
    text.setAttribute("font-size", `${Math.max(8, 30 - total * 2)}`);
    text.setAttribute("dominant-baseline", "middle")
    text.setAttribute(
      "transform",
      `rotate(${-anguloTexto}, ${textoX}, ${textoY})`
    ); // Rotacionar texto
    text.setAttribute("fill", "white");
    text.textContent = item.trim().length > 8 ? item.trim().substring(0, 7) + "..." : item.trim();
    svg.appendChild(text);
  });
};

let anguloTotal = 0;

const girarRoleta = (svg, lista) => {
  const duracao = 10000; // Duração da rotação em milissegundos
  const rotacoes = 15 + Math.random() * 10;
  const anguloSorteado = Math.floor(Math.random() * 360);

  const anguloFinal = 360 * rotacoes + anguloSorteado;

  anguloTotal += 0 * 360 + anguloFinal; // Ângulo total de rotação
  const ganhador = lista[Math.floor((anguloTotal % 360) / (360 / lista.length))];

  svg.style.transition = `transform ${duracao}ms ease`;
  svg.style.transform = `rotate(${anguloTotal}deg)`;
  setTimeout(() => {
    showModal(lista[Math.floor((anguloTotal % 360) / (360 / lista.length))]);
  }, duracao);


  return ganhador;
};
function showModal(ganhador) {
  console.log(ganhador);
}
export default function Roleta() {
  const roletaConteiner = document.createElement("div");
  roletaConteiner.setAttribute("class", "roleta-container");
  let lista = ["Exemplo 1", "Exemplo 2", "Exemplo 3", "Exemplo 4"];
  roletaConteiner.id = 'inicio'
  roletaConteiner.innerHTML = `
    <div class="inicio__apresentacao">
    <div class="inicio__apresentacao_header">
                  <img class="inicio__apresentacao_header_img" src="img/trevo.png" alt="Imagem">
                  <h1 class="inicio__apresentacao_header_text">Alpha Sorte</h1>
              </div>
                  <textarea id="entrada" rows="5" cols="30" placeholder="Digite os nomes separados por vírgulas"></textarea>
          <button id="girar" style="z-index=2">Girar Roleta</button>
          </div>
          <div class="inicio__opcao">
              <div class="roleta">
              <svg id="svg" viewBox="0 0 400 400"></svg>
              <svg id="seta" width="20" height="30"><polygon class="seta" points="2,15 12,25, 12,5" stroke="black" fill="black"/></svg>
          </div>
          </div>
          
          
      `;

  const roleta = roletaConteiner.querySelector(".roleta");
  const svg = roletaConteiner.querySelector("#svg");
  const entrada = roletaConteiner.querySelector("#entrada");
  entrada.style.paddingLeft = '5px'
  desenharRoleta(svg, lista);

  entrada.addEventListener("input", () => {
    lista = entrada.value
      .split(/[\n,]+/)
      .filter((palavra) => palavra.trim().length > 0);
    if (lista.length > 0) {
      desenharRoleta(svg, lista);
    }
  });

  const botao = roletaConteiner.querySelector("#girar");


  console.log(botao);
  botao.addEventListener("click", function () {
    const duracao = 10000; // Duração da rotação em milissegundos

    botao.disabled = true;
    botao.style.background = 'gray'
    let nomeDoGanhador = loadingModal.querySelector('.loader')

    const ganhador = girarRoleta(svg, lista)
    setTimeout(() => {
      const data = new Date();

      const novoDado = { "data": data.toISOString(), "ganhador": ganhador }
      const dados = localStorage.getItem("historico") || "[]"

      const novohistorico = JSON.parse(dados)
      novohistorico.push(novoDado)
      localStorage.setItem("historico", JSON.stringify(novohistorico))

      botao.style.background = '#2DACE2'

      botao.disabled = false
      loadingModal.style.display = 'flex';
      roleta.style.zIndex = -1
      window.addEventListener('click', () => {
        loadingModal.style.display = 'none'
        roleta.style.zIndex = 0
      })
    }, duracao);
    nomeDoGanhador.innerHTML = `Ganhador:<spam style = 'color: gold'>${ganhador}</spam>`
    nomeDoGanhador.style.display = 'flex'
    nomeDoGanhador.style.flexDirection = 'column'
    // console.log(indexGanhador);
  });

  return roletaConteiner;
}

