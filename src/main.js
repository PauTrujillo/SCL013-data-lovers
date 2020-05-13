import dataHarryPotter from './data/potter/potter.js' // conecta la data de harry Potter
import {
  filterData,
  filterCasa,
  filterordenaA_Z,
  filterMadera,
  filterHechizo,
  filterAncestro,
  filterRelevancia,
  filterNucleo,
  filterCasaEnemigo,
  filterAncestroEnemigo,
  filterEspecie,
  filterHechizoEnemigo
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
const ocultarPreguntasEnemigo = document.getElementById('enemigo');

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
    let elemen = `<div id="contenedorFichas"> <div class="ficha"><img class="imagens" src=${dataHarryPotter[i].image}><p class="seteoFicha">${dataHarryPotter[i].name}<p></div></div>`
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

const ordenaRelevanciaAZ = document.getElementById("ordenar_Relevancia");
ordenaRelevanciaAZ.addEventListener("change", () => {
  let categoria = ordenaRelevanciaAZ.options[ordenaRelevanciaAZ.selectedIndex].text;
  conteiner.innerHTML = "";
  let personajesRelevancia = filterRelevancia(dataHarryPotter, categoria);
  for (let c = 0; c < personajesRelevancia.length; c++) {
    let elemen = `<section class="ficha"> <section id="foto"> <img class="imagens" src=${personajesRelevancia[c].image}></section><section id="letras"><p class="seteoFicha">Nombre: ${personajesRelevancia[c].name}<p> <p class="seteoFicha">Especie: ${personajesRelevancia[c].species}<p> <p class="seteoFicha">Relevancia: ${personajesRelevancia[c].categories}<p> </section></section>`
    conteiner.innerHTML += elemen;
  }
})

let dataSegundaPregunta = [];
let dataTerceraPregunta = [];
let dataCuartaPregunta = [];
let dataQuintaPregunta = [];
let resultado = [];


// FUNCIONES PAREJA MAGICA


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
  resultado = maderaFiltrada
  console.log("madera", maderaFiltrada)
})

const botonAceptarPareja = document.getElementById("aceptarPareja");
botonAceptarPareja.addEventListener('click', () => {
  ocultarPreguntasAmor.style.display = 'none';

   conteiner.innerHTML = "";
  for (let b = 0; b < resultado.length; b++) {
    let elemen = `<section class="fichaResultado"> <section id="letrasResultado"><p class="seteoFichaResultado">${resultado[b].name}<p> <section id="fotoResultado"> <img class="imagensResultado" src=${resultado[b].image}></section> <p class="seteoFichaResultado">${resultado[b].personalInfo}<p></section></section>`
    conteiner.innerHTML += elemen;
  }
})

// FUNCIONES ENEMIGO MAGICO

const filtraNucleo = document.getElementById("pregunta1Enemigo"); // se crea constante
filtraNucleo.addEventListener("change", () => {
  document.getElementById('pregunta2Enemigo').removeAttribute('disabled');
  let nucleo = filtraNucleo.options[filtraNucleo.selectedIndex].value; // Se crea variable donde se almacena la opcion elegida por el usuario
  let nucleoFiltrado = filterNucleo(dataHarryPotter, nucleo);
  dataSegundaPregunta = nucleoFiltrado;
  console.log("nucleo", dataSegundaPregunta);

})

const filtraCasaEnemigo = document.getElementById("pregunta2Enemigo"); // se crea constante
filtraCasaEnemigo.addEventListener("change", () => {
  document.getElementById('pregunta3Enemigo').removeAttribute('disabled');
  let casaEnemigo = filtraCasaEnemigo.options[filtraCasaEnemigo.selectedIndex].value;
  let casaFiltradaEnemigo = filterCasaEnemigo(dataSegundaPregunta, casaEnemigo);
  dataTerceraPregunta = casaFiltradaEnemigo;
  console.log("casa", dataTerceraPregunta);
})

const filtraAncestroEnemigo = document.getElementById("pregunta3Enemigo"); // se crea constante
filtraAncestroEnemigo.addEventListener("change", () => {
  document.getElementById('pregunta4Enemigo').removeAttribute('disabled');
  let ancestroEnemigo = filtraAncestroEnemigo.options[filtraAncestroEnemigo.selectedIndex].value;
  let ancestroFiltradaEnemigo = filterAncestroEnemigo(dataTerceraPregunta, ancestroEnemigo);
  dataCuartaPregunta = ancestroFiltradaEnemigo
  console.log("ancestro", dataCuartaPregunta)
})

const filtraEspecie = document.getElementById("pregunta4Enemigo"); // se crea constante
filtraEspecie.addEventListener("change", () => {
  document.getElementById('pregunta5Enemigo').removeAttribute('disabled');
  let especie = filtraEspecie.options[filtraEspecie.selectedIndex].value;
  let especieFiltrada = filterEspecie(dataCuartaPregunta, especie);
  dataQuintaPregunta = especieFiltrada
  console.log("especie", dataQuintaPregunta)
})

const filtraHechizoEnemigo = document.getElementById("pregunta5Enemigo"); // se crea constante
filtraHechizoEnemigo.addEventListener("change", () => {
  let hechizoEnemigo = filtraHechizoEnemigo.options[filtraHechizoEnemigo.selectedIndex].value;
  let hechizoFiltradaEnemigo = filterHechizoEnemigo(dataCuartaPregunta, hechizoEnemigo);
  resultado = hechizoFiltradaEnemigo
  console.log("hechizo", dataQuintaPregunta)
})

const botonAceptarEnemigo = document.getElementById("aceptarEnemigo");
botonAceptarEnemigo.addEventListener('click', () => {
  ocultarPreguntasEnemigo.style.display = 'none';
   conteiner.innerHTML = "";
  for (let b = 0; b < resultado.length; b++) {
    let elemen = `<div class="fichaResultado"> <div id="letrasResultado"><p class="seteoFichaResultado">${resultado[b].name}<p> <div id="fotoResultado"> <img class="imagensResultado" src=${resultado[b].image}></div> <p class="seteoFichaResultado">${resultado[b].personalInfo}<p></div></div>`
    console.log ("resultado", resultado)
    conteiner.innerHTML += elemen;
  }
})
