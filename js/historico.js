import inicio from "./inicio.js";
import roleta from "./roleta.js";

// Simulação do Local Storage
const dados = [
    {
        data: "2025-01-31T13:12:00.000Z",
        ganhador: "Fulano"
    },
    {
        data: "2025-02-01T14:15:00.000Z",
        ganhador: "Ciclano"
    },
    {
        data: "2025-02-02T15:20:00.000Z",
        ganhador: "Beltrano"
    },
    {
        data: "2025-02-03T16:25:00.000Z",
        ganhador: "Maria"
    },
    {
        data: "2025-02-04T17:30:00.000Z",
        ganhador: "João"
    },
    {
        data: "2025-02-05T18:35:00.000Z",
        ganhador: "Ana"
    },
    {
        data: "2025-02-06T19:40:00.000Z",
        ganhador: "Pedro"
    },
    {
        data: "2025-02-07T20:45:00.000Z",
        ganhador: "Paula"
    },
    {
        data: "2025-02-08T21:50:00.000Z",
        ganhador: "Carlos"
    },
    {
        data: "2025-02-09T22:55:00.000Z",
        ganhador: "Fernanda"
    },
    {
        data: "2025-02-10T23:59:00.000Z",
        ganhador: "Lucas"
    }
];


function construirDados(dado){
    const bloco = document.createElement("tr");
    const dataSorteio = new Date(dado.data).toLocaleString("pt-br").split(",")

    bloco.classList.add("historico__item_linha")
    bloco.innerHTML = `
        <td class="historico__item_coluna">${dado.ganhador}</td>
        <td class="historico__item_coluna">${dataSorteio[0]}</td>
        <td class="historico__item_coluna">${dataSorteio[1]}</td>
    `

    return bloco
}


export default function Historico(){
    
    const historico = document.createElement("table")
    historico.id = "historico"
    
    const corpoTabela = document.createElement("tbody")
    
    corpoTabela.innerHTML =  `
        <tr class="historico__item_linha">
            <th class="historico__item_coluna">Nome</th>
            <th class="historico__item_coluna">Data</th>
            <th class="historico__item_coluna">Hora</th>
        </tr>
    ` 
    
    const dados = JSON.parse(localStorage.getItem("historico")) || []
    console.log(dados)

    dados.forEach(dado => {
        corpoTabela.appendChild(construirDados(dado))
    });
    
    historico.appendChild(corpoTabela)
    
    
    
    const blocoHistorico = document.createElement("div");

    if(dados.length === 0){
        blocoHistorico.innerHTML = `
        <div id="blocoVazio">        
            <h1>Histórico Sorteio</h1>
            <span class="blocoVazio__mensagem">Não há nenhum registro salvo.</span>
        </div>
        `
        return blocoHistorico
    }

    blocoHistorico.id = "blocoHistorico"

    blocoHistorico.innerHTML = `
        <h1>Histórico Sorteio</h1>
    `
    
    const botaoResetar = document.createElement("button");
    botaoResetar.id = "botaoResetar"
    
    botaoResetar.innerText = "Resetar Histórico"
    

    

    botaoResetar.addEventListener("click", function(){
        const blocoVazio = document.createElement("div");
        blocoVazio.id = "blocoVazio"

        blocoVazio.innerHTML = `
            <h1>Histórico Sorteio</h1>
            <span class="blocoVazio__mensagem">Não há nenhum registro salvo.</span>
        `

        blocoHistorico.innerHTML = ""
        blocoHistorico.appendChild(blocoVazio);
        localStorage.setItem("historico", "[]")
        botaoResetar.remove();
    });

    const botaoVolta = blocoHistorico.querySelector("#botaoVazio__botao")

    if(botaoVolta){
        botaoVolta.addEventListener("click", function(){
            console.log("Entrei");
        }); 
    }

    blocoHistorico.appendChild(historico)
    blocoHistorico.appendChild(botaoResetar)
    
    return blocoHistorico
}





