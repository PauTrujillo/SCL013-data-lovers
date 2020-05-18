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


//BOTONES DESDE HTML//
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

const botonInicioPareja = document.createElement("button"); //se crea boton desde js
const nombreBotonPareja = document.createTextNode("Inicio"); //se asigna nombre de boton

const botonConocerMasPareja = document.createElement("button");
const nombreBotonConocerMasPareja = document.createTextNode("Quiero Saber Mas");

const botonInicioEnemigo = document.createElement("button");
const nombreBotonEnemigo = document.createTextNode("Inicio");

const botonConocerMasEnemigo = document.createElement("button");
const nombreBotonConocerMasEnemigo = document.createTextNode("Quiero Saber Mas");


const botonInicioPersonajes = document.createElement("button");
const nombreBotonPersonajes = document.createTextNode("Inicio");

const conteiner = document.getElementById("root");


let flujo1 = document.getElementById("pareja");
let intro = document.getElementById("portada");
let flujo2 = document.getElementById("enemigo");
let flujo3 = document.getElementById("personajes")


//FUNCIONES PARA BOTONES//

// FUNCION PAREJA MAGICA
function flow1() {

  flujo1.style.display = "block"; //Muestra seccion de pareja magica
  intro.style.display = "none"; //Oculta seccion de pantalla principal
}

// FUNCION ENEMIGO MAGICO
function flow2() {

  flujo1.style.display = "none"; //Oculta seccion de pareja magica
  intro.style.display = "none"; //Oculta seccion de pantalla principal
  flujo2.style.display = "block"; // Muestra seccion de enemigo magico
}

function regresarPareja() {


  flujo1.style.display = "none"; //Oculta seccion de pareja magica
  intro.style.display = "block"; //Muestra seccion de pantalla principal
  flujo2.style.display = "none"; // Oculta seccion de enemigo magico

}

function regresarEnemigo() {


  flujo1.style.display = "none"; //Oculta seccion de pareja magica
  intro.style.display = "block"; //Oculta seccion de pantalla principal
  flujo2.style.display = "none"; // Oculta seccion de enemigo magico
}



function flow3() {

  flujo1.style.display = "none"; //Oculta seccion de pareja magica
  intro.style.display = "none"; //Oculta seccion de pantalla principal
  flujo2.style.display = "none"; //Oculta seccion de enemigo magico
  flujo3.style.display = "block"; //Muestra Seccion de Personajes Magicos
  for (let i = 0; i < dataHarryPotter.length; i++) {
    let elemen =
      `<div id="contenedorFichas" class="contenedorFichasPersonajes">
      <div class="ficha">
        <img class="imagens" src="${dataHarryPotter[i].image}" id="${dataHarryPotter[i].name}">
        <p class="seteoFicha">${dataHarryPotter[i].name}<p>
      </div>
    </div>`
    conteiner.innerHTML += elemen;
  }

  botonInicioPersonajes.setAttribute("id", "vuelvePersonajes")
  botonInicioPersonajes.setAttribute("class", "botones")
  botonInicioPersonajes.appendChild(nombreBotonPersonajes);
  conteiner.appendChild(botonInicioPersonajes);
  const botonVuelvePersonaje = document.getElementById("vuelvePersonajes") //id de boton
  botonVuelvePersonaje.addEventListener("click", () => {
    location.reload()
  });



  for (let i = 0; i < dataFoto.length; i++) {
    let recorrido = dataFoto[i];

    recorrido.addEventListener('click', modalImprimir)
  }
  modalImprimir
}



const ordenaAZ = document.getElementById("ordenar_Alfabeticamente");
ordenaAZ.addEventListener("change", () => {
  let ordena = ordenaAZ.options[ordenaAZ.selectedIndex].text;
  conteiner.innerHTML = "";
  let personajesOrdenados = filterordenaA_Z(dataHarryPotter, ordena);
  for (let i = 0; i < personajesOrdenados.length; i++) {
    let elemen =
      `<div id="contenedorFichas">
      <div class="ficha">
        <img class="imagens" src="${personajesOrdenados[i].image}" id="${personajesOrdenados[i].name}">
        <p class="seteoFicha">${personajesOrdenados[i].name}<p>
      </div>
    </div>`


    conteiner.innerHTML += elemen;
  }
  for (let i = 0; i < dataFoto.length; i++) {
    let recorrido = dataFoto[i];

    recorrido.addEventListener('click', modalImprimir)
  }
  modalImprimir
})

const ordenaRelevanciaAZ = document.getElementById("ordenar_Relevancia");
ordenaRelevanciaAZ.addEventListener("change", () => {
  let categoria = ordenaRelevanciaAZ.options[ordenaRelevanciaAZ.selectedIndex].text;
  conteiner.innerHTML = "";
  let personajesRelevancia = filterRelevancia(dataHarryPotter, categoria);
  for (let i = 0; i < personajesRelevancia.length; i++) {
    let elemen =
      `<div id="contenedorFichas">
      <div class="ficha">
        <img class="imagens" src="${personajesRelevancia[i].image}" id="${personajesRelevancia[i].name}">
        <p class="seteoFicha">${personajesRelevancia[i].name}<p>
      </div>
    </div>`
    conteiner.innerHTML += elemen;
  }
  for (let i = 0; i < dataFoto.length; i++) {
    let recorrido = dataFoto[i];

    recorrido.addEventListener('click', modalImprimir)
  }
  modalImprimir
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


})


const filtraCasa = document.getElementById("pregunta2Amor"); // se crea constante
filtraCasa.addEventListener("change", () => {
  document.getElementById('pregunta3Amor').removeAttribute('disabled');
  let casa = filtraCasa.options[filtraCasa.selectedIndex].value;
  let casaFiltrada = filterCasa(dataSegundaPregunta, casa);
  dataTerceraPregunta = casaFiltrada;

})


const filtraAncestro = document.getElementById("pregunta3Amor"); // se crea constante
filtraAncestro.addEventListener("change", () => {
  document.getElementById('pregunta4Amor').removeAttribute('disabled');
  let ancestro = filtraAncestro.options[filtraAncestro.selectedIndex].value;
  let ancestroFiltrada = filterAncestro(dataTerceraPregunta, ancestro);
  dataCuartaPregunta = ancestroFiltrada

})


const filtraHechizo = document.getElementById("pregunta4Amor"); // se crea constante
filtraHechizo.addEventListener("change", () => {
  document.getElementById('pregunta5Amor').removeAttribute('disabled');
  let hechizo = filtraHechizo.options[filtraHechizo.selectedIndex].value;
  let hechizoFiltrada = filterHechizo(dataCuartaPregunta, hechizo);
  dataQuintaPregunta = hechizoFiltrada

})


const filtraMadera = document.getElementById("pregunta5Amor"); // se crea constante
filtraMadera.addEventListener("change", () => {
  let madera = filtraMadera.options[filtraMadera.selectedIndex].value;
  let maderaFiltrada = filterMadera(dataQuintaPregunta, madera);
  resultado = maderaFiltrada

})

const botonAceptarPareja = document.getElementById("aceptarPareja");
botonAceptarPareja.addEventListener('click', () => {
  ocultarPreguntasAmor.style.display = 'none';

  conteiner.innerHTML = "";
  for (let i = 0; i < resultado.length; i++) {
    let elemen =
      `<div id="contenedorFichas">
    <div class="ficha">
      <img class="imagens" src="${resultado[i].image}" id="${resultado[i].name}">
      <p class="seteoFicha">${resultado[i].name}<p>
      <p class="seteoFicha">${resultado[i].house}<p>
      <p class="seteoFicha">${resultado[i].personalInfo}<p>
    </div>
  </div>`
    conteiner.innerHTML += elemen;
  }

  botonConocerMasPareja.setAttribute("id", "quieroConocerPareja")
  botonConocerMasPareja.setAttribute("class", "botones")
  botonConocerMasPareja.appendChild(nombreBotonConocerMasPareja);
  conteiner.appendChild(botonConocerMasPareja);
  const botonMasPareja = document.getElementById("quieroConocerPareja") //id de boton
  botonMasPareja.addEventListener("click", () => {
    conteiner.innerHTML = "";

    for (let i = 0; i < resultado.length; i++) {
      let elemen =
        `<div id="contenedorFichas">
        <div class="ficha">
          <img class="resultadoImagen" src="${resultado[i].image}">
          <p class="fichaResultado">Nombre: ${resultado[i].name}<p>
          <p class="fichaResultado">Especie: ${resultado[i].species}<p>
          <p class="fichaResultado">Genero: ${resultado[i].gender}<p>
          <p class="fichaResultado">Casa Mágica: ${resultado[i].house}<p>
          <p class="fichaResultado">Linaje: ${resultado[i].ancestry}<p>
          <p class="fichaResultado">Patronus: ${resultado[i].patronus}<p>
          <p class="fichaResultado">Madera de Varita: ${resultado[i].wand.wood}<p>
          <p class="fichaResultado">Nucleo de Varita: ${resultado[i].wand.core}<p>
          <p class="fichaResultado">Longuitud de Varita: ${resultado[i].wand.length}<p>
        </div>
      </div>`
      conteiner.innerHTML += elemen;

    }

  })


  botonInicioPareja.setAttribute("id", "vuelvePareja")
  botonInicioPareja.setAttribute("class", "botones")
  botonInicioPareja.appendChild(nombreBotonPareja);
  conteiner.appendChild(botonInicioPareja);
  const botonVuelvePareja = document.getElementById("vuelvePareja") //id de boton
  botonVuelvePareja.addEventListener("click", () => {
    location.reload()
  });




})

// FUNCIONES ENEMIGO MAGICO

const filtraNucleo = document.getElementById("pregunta1Enemigo"); // se crea constante
filtraNucleo.addEventListener("change", () => {
  document.getElementById('pregunta2Enemigo').removeAttribute('disabled');
  let nucleo = filtraNucleo.options[filtraNucleo.selectedIndex].value; // Se crea variable donde se almacena la opcion elegida por el usuario
  let nucleoFiltrado = filterNucleo(dataHarryPotter, nucleo);
  dataSegundaPregunta = nucleoFiltrado;


})

const filtraCasaEnemigo = document.getElementById("pregunta2Enemigo"); // se crea constante
filtraCasaEnemigo.addEventListener("change", () => {
  document.getElementById('pregunta3Enemigo').removeAttribute('disabled');
  let casaEnemigo = filtraCasaEnemigo.options[filtraCasaEnemigo.selectedIndex].value;
  let casaFiltradaEnemigo = filterCasaEnemigo(dataSegundaPregunta, casaEnemigo);
  dataTerceraPregunta = casaFiltradaEnemigo;

})

const filtraAncestroEnemigo = document.getElementById("pregunta3Enemigo"); // se crea constante
filtraAncestroEnemigo.addEventListener("change", () => {
  document.getElementById('pregunta4Enemigo').removeAttribute('disabled');
  let ancestroEnemigo = filtraAncestroEnemigo.options[filtraAncestroEnemigo.selectedIndex].value;
  let ancestroFiltradaEnemigo = filterAncestroEnemigo(dataTerceraPregunta, ancestroEnemigo);
  dataCuartaPregunta = ancestroFiltradaEnemigo

})

const filtraEspecie = document.getElementById("pregunta4Enemigo"); // se crea constante
filtraEspecie.addEventListener("change", () => {
  document.getElementById('pregunta5Enemigo').removeAttribute('disabled');
  let especie = filtraEspecie.options[filtraEspecie.selectedIndex].value;
  let especieFiltrada = filterEspecie(dataCuartaPregunta, especie);
  dataQuintaPregunta = especieFiltrada

})

const filtraHechizoEnemigo = document.getElementById("pregunta5Enemigo"); // se crea constante
filtraHechizoEnemigo.addEventListener("change", () => {
  let hechizoEnemigo = filtraHechizoEnemigo.options[filtraHechizoEnemigo.selectedIndex].value;
  let hechizoFiltradaEnemigo = filterHechizoEnemigo(dataCuartaPregunta, hechizoEnemigo);
  resultado = hechizoFiltradaEnemigo

})

const botonAceptarEnemigo = document.getElementById("aceptarEnemigo");
botonAceptarEnemigo.addEventListener('click', () => {
      ocultarPreguntasEnemigo.style.display = 'none';
      conteiner.innerHTML = "";
      for (let i = 0; i < resultado.length; i++) {
        let elemen =
          `<div id="contenedorFichas">
    <div class="ficha">
      <img class="imagens" src="${resultado[i].image}" id="${resultado[i].name}">
      <p class="seteoFicha">${resultado[i].name}<p>
      <p class="seteoFicha">${resultado[i].house}<p>
      <p class="seteoFicha">${resultado[i].personalInfo}<p>
    </div>
  </div>`
        conteiner.innerHTML += elemen;
      }

      botonConocerMasEnemigo.setAttribute("id", "quieroConocerEnemigo")
      botonConocerMasEnemigo.setAttribute("class", "botones")
      botonConocerMasEnemigo.appendChild(nombreBotonConocerMasEnemigo);
      conteiner.appendChild(botonConocerMasEnemigo);
      const botonMasEnemigo = document.getElementById("quieroConocerEnemigo") //id de boton
      botonMasEnemigo.addEventListener("click", () => {
        //conteiner.innerHTML = "";

        for (let i = 0; i < resultado.length; i++) {
          let elemen =
            `<div id="contenedorFichas">
        <div class="ficha">
          <img class="resultadoImagen" src="${resultado[i].image}">
          <p class="fichaResultado">Nombre: ${resultado[i].name}<p>
          <p class="fichaResultado">Especie: ${resultado[i].species}<p>
          <p class="fichaResultado">Genero: ${resultado[i].gender}<p>
          <p class="fichaResultado">Casa Mágica: ${resultado[i].house}<p>
          <p class="fichaResultado">Linaje: ${resultado[i].ancestry}<p>
          <p class="fichaResultado">Patronus: ${resultado[i].patronus}<p>
          <p class="fichaResultado">Madera de Varita: ${resultado[i].wand.wood}<p>
          <p class="fichaResultado">Nucleo de Varita: ${resultado[i].wand.core}<p>
          <p class="fichaResultado">Longuitud de Varita: ${resultado[i].wand.length}<p>
        </div>
      </div>`
          conteiner.innerHTML += elemen;

        }
      })



        botonInicioEnemigo.setAttribute("id", "vuelveEnemigo")
        botonInicioEnemigo.setAttribute("class", "botones")
        botonInicioEnemigo.appendChild(nombreBotonEnemigo);
        conteiner.appendChild(botonInicioEnemigo);
        const botonVuelveEnemigo = document.getElementById("vuelveEnemigo") //id de boton
        botonVuelveEnemigo.addEventListener("click", () => {
          location.reload()
        });

        for (let i = 0; i < dataFoto.length; i++) {
          let recorrido = dataFoto[i];

          recorrido.addEventListener('click', modalImprimir)
        }
        modalImprimir
      })


      let modal = document.getElementById("modal")
      let dataFoto = document.getElementsByClassName("imagens")


      for (let i = 0; i < dataFoto.length; i++) {
        let recorrido = dataFoto[i];

        recorrido.addEventListener('click', modalImprimir)
      }


      function modalImprimir(event) {
        modal.innerHTML = "";

        const pensonajesEncontrados = dataHarryPotter.find(function (personaje) {
          return (personaje.name === event.target.id)
        })

        modal.innerHTML +=
          `<section id="tarjetaModal">
        <section id="letras">
        <img src= "${pensonajesEncontrados.image}" class="imagens">
        <p>Nombre: ${pensonajesEncontrados.name}<p>
        <p>Especie: ${pensonajesEncontrados.species}<p>
        <p>Género: ${pensonajesEncontrados.gender}<p>
        <p>Casa Mágica: ${pensonajesEncontrados.house}<p>
        <p>Linaje: ${pensonajesEncontrados.ancestry}<p>
        <p>Patronus: ${pensonajesEncontrados.patronus}<p>
        <p>Madera de varita: ${pensonajesEncontrados.wand.wood}<p>
        <p>Nucleo de varita: ${pensonajesEncontrados.wand.core}<p>
        <p>Longuitud de varita: ${pensonajesEncontrados.wand.length}<p>
       </section>
    </section>`

        modal.classList.add('modal--show')
        modal.addEventListener("click", (e) => {
          if (e.target.classList.caja('modal')) modal.classList.remove('modal--show')

        });
      }
