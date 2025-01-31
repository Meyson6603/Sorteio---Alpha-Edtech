const desenharRoleta = (svg, itens) => {
    // Limpar o SVG
    svg.innerHTML = "";
    const coresHarmonicas = [
      "blue",
      "red",
      "green",
      "yellow",
      "purple",
      "orange",
      "cyan",
      "magenta",
      "lime",
      "pink",
      "teal",
      "brown",
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
      const textoRaio = raio - 150;
      const textoX =
        centro + textoRaio * Math.cos(-(Math.PI / 180) * anguloTexto);
      const textoY =
        centro + textoRaio * Math.sin(-(Math.PI / 180) * anguloTexto);
  
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", textoX);
      text.setAttribute("y", textoY);
      text.setAttribute("font-size", "30");
      text.setAttribute(
        "transform",
        `rotate(${-anguloTexto}, ${textoX}, ${textoY})`
      ); // Rotacionar texto
      text.setAttribute("fill", "black");
      text.textContent = item.trim();
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
              <svg id="svg" width="200" height="200" viewBox="0 0 400 400"></svg>
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
  
    botao.style.marginTop = '30px'
    botao.style.background = 'black'
    botao.style.color = 'white'
    botao.style.width = '80%'
    botao.style.height = '15%'
    botao.style.borderRadius = '30px'
    botao.style.fontSize = '30px'
    console.log(botao);
    botao.addEventListener("click", function () {
      // console.log("Gira gira, vai pomba gira")
      const duracao = 10000; // Duração da rotação em milissegundos
  
      botao.disabled = true;
      botao.style.background = 'gray'
      let nomeDoGanhador = loadingModal.querySelector('.loader')

      setTimeout(() => {
        botao.style.background = 'black'
  
        botao.disabled = false
        loadingModal.style.display = 'flex';
        roleta.style.zIndex = -1
        window.addEventListener('click', () => {
            loadingModal.style.display = 'none'
            roleta.style.zIndex = 0
        })
      }, duracao);
      nomeDoGanhador.innerHTML = `Ganhador: <br> ${girarRoleta(svg, lista)}`
      // console.log(indexGanhador);
    });
  
    return roletaConteiner;
  }
  
  // const entrada = document.getElementById("entrada");
  // const atualizar = document.getElementById("atualizar");
  // const girar = document.getElementById("girar");
  // const svg = document.getElementById("roleta");
  // const coresHarmonicas = ["blue", "red", "green", "yellow", "purple", "orange", "cyan", "magenta", "lime", "pink", "teal", "brown"];
  
  // let lista = ["Exemplo 1", "Exemplo 2", "Exemplo 3", "Exemplo 4"];
  
  // entrada.addEventListener("input", () => {
  //     lista = entrada.value.split(/[\n,]+/).filter(palavra => palavra.trim().length > 0);
  //     if (lista.length > 0) {
  //         desenharRoleta(lista);
  //     }
  // });
  // let anguloTotal = 0
  // const girarRoleta = () => {
  //     console.log(anguloTotal)
  //     const duracao = 10000; // Duração da rotação em milissegundos
  //     const rotacoes = 15 + Math.random() * 10;
  //     const anguloSorteado = Math.floor(Math.random() * 360)
  
  //     const anguloFinal = 360 * rotacoes + anguloSorteado;
  
  //     anguloTotal += 0 * 360 + anguloFinal; // Ângulo total de rotação
  //     console.log(`Ganhador: ${Math.floor((anguloTotal % 360) / (360 / lista.length)) + 1}`)
  
  //     svg.style.transition = `transform ${duracao}ms ease`;
  //     svg.style.transform = `rotate(${anguloTotal}deg)`;
  
  // };
  
  // girar.addEventListener("click", girarRoleta);
  
  // // Desenhar roleta inicial
  