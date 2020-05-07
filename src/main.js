import dataHarryPotter from './data/potter/potter.js' // conecta la data de harry Potter
import { filterordenaA_Z, filterData } from './data.js'

console.log(dataHarryPotter);


//BOTONES //
const botonParaFlow1 = document.getElementById("boton1");
botonParaFlow1.addEventListener("click", flow1);

const botonParaFlow2 = document.getElementById("boton2");
botonParaFlow2.addEventListener("click", flow2);

const botonParaFlow3 = document.getElementById("boton3");
botonParaFlow3.addEventListener("click", flow3);



//FUNCIONES PARA BOTONES//

function flow1() {
  let flujo1 = document.getElementById("pareja");
  let intro = document.getElementById("portada");
  flujo1.style.display = "block";
  intro.style.display = "none";
}

function flow2() {
  let flujo1 = document.getElementById("pareja");
  let intro = document.getElementById("portada");
  let flujo2 = document.getElementById("enemigo");
  flujo1.style.display = "none";
  intro.style.display = "none";
  flujo2.style.display = "block";
}


const conteiner = document.getElementById("root");

function flow3() {
  let flujo1 = document.getElementById("pareja");
  let intro = document.getElementById("portada");
  let flujo2 = document.getElementById("enemigo");
  let flujo3 = document.getElementById("personajes")
  flujo1.style.display = "none";
  intro.style.display = "none";
  flujo2.style.display = "none";
  flujo3.style.display = "block";
  for (let i = 0; i < dataHarryPotter.length; i++) {
    let elemen = `<section class="ficha"> <section id="foto"> <img class="imagens" src=${dataHarryPotter[i].image}></section><section id="letras"><p class="seteoFicha">Nombre: ${dataHarryPotter[i].name}<p> <p class="seteoFicha">Especie: ${dataHarryPotter[i].species}<p> <p class="seteoFicha">Genero: ${dataHarryPotter[i].gender}<p> <p class="seteoFicha">Hechizo: ${dataHarryPotter[i].patronus}<p></section></section>`
    conteiner.innerHTML += elemen;
  }
}

const ordenaAZ = document.getElementById("ordenar_Alfabeticamente");
ordenaAZ.addEventListener("change", () => {
    let ordena = ordenaAZ.options[ordenaAZ.selectedIndex].text;
    conteiner.innerHTML = "";
    let personajesOrdenados = filterordenaA_Z(dataHarryPotter, ordena);
    for (let c = 0; c < personajesOrdenados.length; c++) {
        let elemen = `<section class="ficha"> <section id="foto"> <img class="imagens" src=${personajesOrdenados[c].image}></section><section id="letras"><p class="seteoFicha">Nombre: ${personajesOrdenados[c].name}<p> <p class="seteoFicha">Especie: ${personajesOrdenados[c].species}<p> <p class="seteoFicha">Genero: ${personajesOrdenados[c].gender}<p> <p class="seteoFicha">Hechizo: ${personajesOrdenados[c].patronus}<p></section></section>`
        conteiner.innerHTML += elemen;
    }
})

const filtraGenero = document.getElementById("pregunta1Amor"); // se crea constante
filtraGenero.addEventListener("change", () => {
    let genero = filtraGenero.options[filtraGenero.selectedIndex].value; // Se crea variable donde se almacena la opcion elegida por el usuario
    conteiner.innerHTML = "";
    let generoFiltrado = filterData(dataHarryPotter, genero);
    for (let a = 0; a < generoFiltrado.length; a++) {
        let elemen = `<section class="ficha"> <section id="foto"> <img class="imagens" src=${generoFiltrado[a].image}></section><section id="letras"><p class="seteoFicha">Nombre: ${generoFiltrado[a].name}<p> <p class="seteoFicha">Especie: ${generoFiltrado[a].species}<p> <p class="seteoFicha">Genero: ${generoFiltrado[a].gender}<p> <p class="seteoFicha">Hechizo: ${generoFiltrado[a].patronus}<p></section></section>`
        conteiner.innerHTML += elemen;
      }
    })
