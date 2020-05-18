//FUNCIONES PERSONAJES

export const filterordenaA_Z = (data, ordena) => { // Se crea funcion filterordenaA_Z con los parametros data y ordena
  const personajes_ordena_alfa = data.sort((per1, per2) => {
    if (ordena === "Ordenar A-Z") {
      return (per1.name < per2.name) ? -1 : 1
    } else {
      return (per1.name > per2.name) ? -1 : 1
    }
  });
  return personajes_ordena_alfa
}

export const filterRelevancia = (data, categoria) => {
  let personajesRelevancia = data.sort((ascen, desce) => {
    if (categoria === "Menor Relevancia") {
      return (ascen.categories < desce.categories) ? -1 : 1;
    } else {
      return (ascen.categories > desce.categories) ? -1 : 1;
    }
  })
  return personajesRelevancia
}


//FUNCIONES PAREJA

export const filterData = (data, genero) => {
  let selecciona_genero = data.filter(function (filtragenero) {
    return (filtragenero.gender === (genero));
  });
  return selecciona_genero
}


export const filterCasa = (data, casa) => {

  let selecciona_casa = data.filter(function (filtracasa) {
    return (filtracasa.house === (casa));
  });
  return selecciona_casa
}


export const filterMadera = (data, madera) => {
  let selecciona_madera = data.filter(function (filtraMadera) {
    return (filtraMadera.wand.wood === (madera));
  });
  return selecciona_madera
}


export const filterHechizo = (data, hechizo) => {
  let selecciona_hechizo = data.filter(function (filtraHechizo) {
    return (filtraHechizo.patronus === (hechizo));
  });
  return selecciona_hechizo
}


export const filterAncestro = (data, ancestro) => {
  let selecciona_ancestro = data.filter(function (filtraAncestros) {
    return (filtraAncestros.ancestry === (ancestro));
  });
  return selecciona_ancestro
}


//FUNCIONES SECCION ENEMIGOS

export const filterNucleo = (data, nucleo) => {
  let selecciona_nucleo = data.filter(function (filtraNucleo) {
    return (filtraNucleo.wand.core === (nucleo));
  });
  return selecciona_nucleo
}

export const filterCasaEnemigo = (data, casaEnemigo) => {

  let selecciona_casaEnemigo = data.filter(function (filtracasaEnemigo) {
    return (filtracasaEnemigo.house === (casaEnemigo));
  });
  return selecciona_casaEnemigo
}

export const filterAncestroEnemigo = (data, ancestroEnemigo) => {
  let selecciona_ancestroEnemigo = data.filter(function (filtraAncestrosEnemigo) {
    return (filtraAncestrosEnemigo.ancestry === (ancestroEnemigo));
  });
  return selecciona_ancestroEnemigo
}

export const filterEspecie = (data, especie) => {
  let selecciona_Especie = data.filter(function (filtraEspecie) {
    return (filtraEspecie.species === (especie));
  });
  return selecciona_Especie
}

export const filterHechizoEnemigo = (data, hechizoEnemigo) => {
  let selecciona_hechizoEnemigo = data.filter(function (filtraHechizoEnemigo) {
    return (filtraHechizoEnemigo.patronus === (hechizoEnemigo));
  });
  return selecciona_hechizoEnemigo
}
