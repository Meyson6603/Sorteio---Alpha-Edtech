import information from "./information.js";
import inicio from "./inicio.js";
import roleta from "./roleta.js";
import Historico from "./historico.js";
import { createDiceContainer } from "./dados.js";

const menu_desktop = document.getElementById("menu_desktop");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
  menu_desktop.classList.toggle("collapsed");
});

const menu_mobile = document.getElementById("menu_mobile");
const menuToggle_mobile = document.getElementById("menuToggle_mobile");

menuToggle_mobile.addEventListener("click", () => {
  // console.log("Entrei")
  menu_mobile.classList.toggle("collapsed");
});

const main = document.querySelector("main");
// console.log(main)
const single_page = document.getElementById("single-page");
const homeDesktop = document.getElementById("homeDesktop");
const homeMobile = document.getElementById("homeMobile");
const informationDesktop = document.getElementById("informationDesktop");
const informationMobile = document.getElementById("informationMobile");
const historyDesktop = document.getElementById("historyDesktop");
const historyMobile = document.getElementById("historyMobile");
const settingsDesktop = document.getElementById("settingsDesktop");
const settingsMobile = document.getElementById("settingsMobile");

window.addEventListener("load", () => {
  single_page.appendChild(inicio());
});

homeDesktop.addEventListener("click", () => {
  single_page.innerHTML = "";
  single_page.appendChild(inicio());
  main.style.alignItems = "center";

  const option01 = document.getElementsByClassName("inicio__opcao_item")[0];
  option01.addEventListener("click", () => {
    single_page.innerHTML = "";
    single_page.append(roleta());
  });
});
homeMobile.addEventListener("click", () => {
  single_page.innerHTML = "";
  single_page.appendChild(inicio());
  main.style.alignItems = "center";

  const option01 = document.getElementsByClassName("inicio__opcao_item")[0];
  option01.addEventListener("click", () => {
    roleta();
  });
});
informationDesktop.addEventListener("click", () => {
  single_page.innerHTML = "";
  single_page.appendChild(information());
  main.style.alignItems = "start";
});
historyDesktop.addEventListener("click", () => {
  single_page.innerHTML = "";
  single_page.appendChild(Historico());
  main.style.alignItems = "center";
});
settingsDesktop.addEventListener("click", () => {
  single_page.innerHTML = "Configurar Modo Nortuno";
});
informationMobile.addEventListener("click", () => {
  single_page.innerHTML = "";
  single_page.appendChild(information());
  main.style.alignItems = "start";
});
historyMobile.addEventListener("click", () => {
  single_page.innerHTML = "";
  single_page.appendChild(Historico());
  main.style.alignItems = "center";
});
settingsMobile.addEventListener("click", () => {
  single_page.innerHTML = "Configurar Modo Nortuno";
});
