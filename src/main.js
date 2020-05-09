import dataHarryPotter from './data/potter/potter.js' // conecta la data de harry Potter
import {
  filterData,
  filterCasa,
  filterordenaA_Z,
  filterMadera,
  filterHechizo,
  filterAncestro
} from './data.js'

//console.log(dataHarryPotter);


//BOTONES //
const botonParaFlow1 = document.getElementById("boton1");
botonParaFlow1.addEventListener("click", flow1);

const botonParaFlow2 = document.getElementById("boton2");
botonParaFlow2.addEventListener("click", flow2);

const botonParaFlow3 = document.getElementById("boton3");
botonParaFlow3.addEventListener("click", flow3);

const botonAtrasPareja = document.getElementById("volverPareja");
botonAtrasPareja.addEventListener("click", regresarPareja);

const botonAtrasEnemigo = document.getElementById("volverEnemigo");
botonAtrasEnemigo.addEventListener("click", regresarEnemigo);

const ocultarPreguntasAmor = document.getElementById('pareja');

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

function regresarPareja() {
  let flujo1 = document.getElementById("pareja");
  let intro = document.getElementById("portada");
  let flujo2 = document.getElementById("enemigo");
  let regresoPareja = document.getElementById("portada");
  flujo1.style.display = "none";
  intro.style.display = "none";
  flujo2.style.display = "none";
  regresoPareja.style.display = "block";
}

function regresarEnemigo() {
  let flujo1 = document.getElementById("pareja");
  let intro = document.getElementById("portada");
  let flujo2 = document.getElementById("enemigo");
  let regresoEnemigo = document.getElementById("portada");
  flujo1.style.display = "none";
  intro.style.display = "none";
  flujo2.style.display = "none";
  regresoEnemigo.style.display = "block";
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

let dataSegundaPregunta = [];
let dataTerceraPregunta = [];
let dataCuartaPregunta = [];
let dataQuintaPregunta = [];
let resultadoAmor = [];
const conteiner = document.getElementById("root");

const filtraGenero = document.getElementById("pregunta1Amor"); // se crea constante
filtraGenero.addEventListener("change", () => {
  document.getElementById('pregunta2Amor').removeAttribute('disabled');
  let genero = filtraGenero.options[filtraGenero.selectedIndex].value; // Se crea variable donde se almacena la opcion elegida por el usuario
  let generoFiltrado = filterData(dataHarryPotter, genero);
  dataSegundaPregunta = generoFiltrado;
  console.log("genero", dataSegundaPregunta);

})


const filtraCasa = document.getElementById("pregunta2Amor"); // se crea constante
filtraCasa.addEventListener("change", () => {
  document.getElementById('pregunta3Amor').removeAttribute('disabled');
  let casa = filtraCasa.options[filtraCasa.selectedIndex].value;
  let casaFiltrada = filterCasa(dataSegundaPregunta, casa);
  dataTerceraPregunta = casaFiltrada;
  console.log("casa", dataTerceraPregunta);
})


const filtraAncestro = document.getElementById("pregunta3Amor"); // se crea constante
filtraAncestro.addEventListener("change", () => {
  document.getElementById('pregunta4Amor').removeAttribute('disabled');
  let ancestro = filtraAncestro.options[filtraAncestro.selectedIndex].value;
  let ancestroFiltrada = filterAncestro(dataTerceraPregunta, ancestro);
  dataCuartaPregunta = ancestroFiltrada
  console.log("ancestro", dataCuartaPregunta)
})


const filtraHechizo = document.getElementById("pregunta4Amor"); // se crea constante
filtraHechizo.addEventListener("change", () => {
  document.getElementById('pregunta5Amor').removeAttribute('disabled');
  let hechizo = filtraHechizo.options[filtraHechizo.selectedIndex].value;
  let hechizoFiltrada = filterHechizo(dataCuartaPregunta, hechizo);
  dataQuintaPregunta = hechizoFiltrada
  console.log("hechizo", dataQuintaPregunta)
})


const filtraMadera = document.getElementById("pregunta5Amor"); // se crea constante
filtraMadera.addEventListener("change", () => {
  let madera = filtraMadera.options[filtraMadera.selectedIndex].value;
  let maderaFiltrada = filterMadera(dataQuintaPregunta, madera);
  resultadoAmor = maderaFiltrada
  console.log("madera", maderaFiltrada)
})

const botonAceptarPareja = document.getElementById("aceptarPareja");
botonAceptarPareja.addEventListener('click', () => {
  ocultarPreguntasAmor.style.display = 'none';
  console.log("resultado", resultadoAmor)
  conteiner.innerHTML = "";
  for (let b = 0; b < resultadoAmor.length; b++) {
    let elemen = `<section class="ficha"> <section id="foto"> <img class="imagens" src=${resultadoAmor[b].image}></section><section id="letras"><p class="seteoFicha">Nombre: ${resultadoAmor[b].name}<p> <p class="seteoFicha">Especie: ${resultadoAmor[b].species}<p> <p class="seteoFicha">Genero: ${resultadoAmor[b].gender}<p> <p class="seteoFicha">Hechizo: ${resultadoAmor[b].patronus}<p></section></section>`
    conteiner.innerHTML += elemen;
  }
})
