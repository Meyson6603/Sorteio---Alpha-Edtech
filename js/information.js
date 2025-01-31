export default function information() {
    const div = document.createElement('div')
    div.style.display = 'flex'
    div.style.flexDirection = 'column'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    div.style.borderRadius = '30px'
    div.style.marginTop = '30px'
    div.innerHTML = `<div class="inicio__apresentacao" style= 'width: 100%;'>
            <div class="inicio__apresentacao_header" style='text-align: center;'>
                <img class="inicio__apresentacao_header_img" src="img/trevo.png" alt="Imagem">
                <h1 class="inicio__apresentacao_header_text">Alpha Sorte</h1>
            </div>
        </div>
        <div class="inicio__opcao" style= 'width: 100%; padding-bottom: 20px;'>
            <h2 style='padding: 30px'>Site feito em tempo curto para o desafio relampago proposto pela Alpha Edtech: <br>
        Colaboradores:<br>
    </h2>
    <div style="display: flex; gap: 20px;flex-wrap: wrap; justify-content: center; align-items: center;">
        <div>
            <img src="../imgEmployees/MeysonFreitas.jpeg" height="200px" style="border-radius: 250px;">
            <p style="text-align: center; margin-top: 10px;">Meyson Freitas</p>
        </div>
        <div>
            
            <img src="../imgEmployees/LeandroLavila.png" height="200px" width='200px' style="border-radius: 250px;">
            <p style="text-align: center; margin-top: 10px;">Leandro Lávila</p>
        </div>
        <div>
            
            <img src="../imgEmployees/MatheusBispo.png" height="200px" width='200px' style="border-radius: 250px;">
            <p style="text-align: center; margin-top: 10px;">Matheus Bispo</p>
        </div>
    </div>
        </div>`



    return div
}