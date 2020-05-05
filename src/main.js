import dataHarryPotter from './data/potter/potter.js' // conecta la data de harry Potter
console.log(dataHarryPotter);


//BOTONES //
const botonParaFlow1= document.getElementById("boton1");
botonParaFlow1.addEventListener("click", flow1);

const botonParaFlow2= document.getElementById("boton2");
botonParaFlow2.addEventListener("click", flow2);

const botonParaFlow3= document.getElementById("boton3");
botonParaFlow3.addEventListener("click", flow3);



//FUNCIONES PARA BOTONES//

function flow1(){
    let flujo1=document.getElementById("pareja");
    let intro=document.getElementById("portada");
    flujo1.style.display= "block";
    intro.style.display= "none";
  }

  function flow2(){
    let flujo1=document.getElementById("pareja");
    let intro=document.getElementById("portada");
    let flujo2=document.getElementById("enemigo");
    flujo1.style.display= "none";
    intro.style.display= "none";
    flujo2.style.display="block";
  }

  function flow3(){
    let flujo1=document.getElementById("pareja");
    let intro=document.getElementById("portada");
    let flujo2=document.getElementById("enemigo");
    let flujo3=document.getElementById("personajes")
    flujo1.style.display= "none";
    intro.style.display= "none";
    flujo2.style.display="none";
    flujo3.style.display="block";
  }