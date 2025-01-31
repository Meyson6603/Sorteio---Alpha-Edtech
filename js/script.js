import information from "./information.js";
import inicio from "./inicio.js";
import roleta from "./roleta.js";
import Historico from "./historico.js";
import { createDiceContainer } from "./dados.js";


const menu_desktop = document.getElementById('menu_desktop');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
    menu_desktop.classList.toggle('collapsed');
});

const menu_mobile = document.getElementById('menu_mobile');
const menuToggle_mobile = document.getElementById('menuToggle_mobile');

menuToggle_mobile.addEventListener('click', () => {
    // console.log("Entrei")
    menu_mobile.classList.toggle('collapsed');
});

const main = document.querySelector('main')
// console.log(main)
const single_page = document.getElementById("single-page")
const homeDesktop = document.getElementById('homeDesktop')
const homeMobile = document.getElementById('homeMobile')
const informationDesktop = document.getElementById('informationDesktop')
const informationMobile = document.getElementById('informationMobile')
const historyDesktop = document.getElementById('historyDesktop')
const historyMobile = document.getElementById('historyMobile')


window.addEventListener('load', () => {
    single_page.appendChild(inicio())

    const option01 = document.getElementsByClassName('inicio__opcao_item')[0]
    option01.addEventListener('click', () => {
        single_page.innerHTML = ''
        single_page.append(roleta())
    })
    const option02 = document.getElementsByClassName('inicio__opcao_item')[2]
    option02.addEventListener('click', () => {
        console.log("sadsadsada")
        single_page.innerHTML = ""
        single_page.appendChild(createDiceContainer())
    })
})
homeDesktop.addEventListener('click', () => {
    single_page.innerHTML = ''
    single_page.appendChild(inicio())
    main.style.alignItems = 'center'

    const option01 = document.getElementsByClassName('inicio__opcao_item')[0]
    option01.addEventListener('click', () => {
        single_page.innerHTML = ''
        single_page.append(roleta())
    })
    const option02 = document.getElementsByClassName('inicio__opcao_item')[2]
    option02.addEventListener('click', () => {
        console.log("asdsadas")
        single_page.innerHTML = ""
        single_page.appendChild(createDiceContainer())
    })
})
homeMobile.addEventListener('click', () => {
    single_page.innerHTML = ''
    single_page.appendChild(inicio())
    main.style.alignItems = 'center'

    const option01 = document.getElementsByClassName('inicio__opcao_item')[0]
    option01.addEventListener('click', () => {
        single_page.innerHTML = ''
        single_page.append(roleta())
    })

    const option02 = document.getElementsByClassName('inicio__opcao_item')[2]
    option02.addEventListener('click', () => {
        console.log("sadsadsada")
        single_page.innerHTML = ""
        single_page.appendChild(createDiceContainer())
    })
})
informationDesktop.addEventListener('click', () => {
    single_page.innerHTML = ''
    single_page.appendChild(information())
    main.style.alignItems = 'start'

})
historyDesktop.addEventListener('click', () => {
    single_page.innerHTML = ''
    single_page.appendChild(Historico())
    main.style.alignItems = 'start'
})

informationMobile.addEventListener('click', () => {
    single_page.innerHTML = ''
    single_page.appendChild(information())
    main.style.alignItems = 'start'
})
historyMobile.addEventListener('click', () => {
    single_page.innerHTML = ''
    single_page.appendChild(Historico())
    main.style.alignItems = 'center'
})
