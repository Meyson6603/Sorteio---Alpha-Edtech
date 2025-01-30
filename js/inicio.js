export default function inicio(){
    const inicio = document.createElement("div");
    inicio.id = "inicio"
    inicio.innerHTML = `
        <div class="inicio__apresentacao">
            <div class="inicio__apresentacao_header">
                <img class="inicio__apresentacao_header_img" src="img/trevo.png" alt="Imagem">
                <h1 class="inicio__apresentacao_header_text">Alpha Sorte</h1>
            </div>
            <p class="inicio__apresentacao_texto">Realize seu sorteio de forma dinâmica e simples. Escolha o tipo de sorteio e a forma que desejar sortear, nós fazemos todo resto para você.</p>
        </div>
        <div class="inicio__opcao">
            <div class="inicio__opcao_header">O que gostaria de sortear ?</div>
            <div class="inicio__opcao_main">
                <div class="inicio__opcao_item">
                    <div class="inicio__opcao_item_content">
                    <img class="inicio__opcao_item_img"src="img/abc.png" alt="Imagem">
                    <p class="inicio__opcao_item_text" >Nomes</p>
                    </div>
                </div>
                <div class="inicio__opcao_item">
                    <div class="inicio__opcao_item_content">
                        <img class="inicio__opcao_item_img" src="img/numeros.png" alt="Imagem">
                        <p class="inicio__opcao_item_text">Números</p>
                    </div>
                </div>
                <div class="inicio__opcao_item">
                    <div class="inicio__opcao_item_content">
                        <img class="inicio__opcao_item_img" src="img/dados.png" alt="Imagem">
                        <p class="inicio__opcao_item_text">Dados</p>
                    </div>
                </div>
            </div>
        </div>
    `

    return inicio
}