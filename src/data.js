/* estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
}; */


export const filterordenaA_Z = (data, ordena) => {
  const personajes_ordena_alfa = data.sort((per1, per2) => {
    if (ordena === "Ordena Ascendente") {
      return (per1.name < per2.name) ? -1 : 1
    } else {
      return (per1.name > per2.name) ? -1 : 1
    }
  })
 // console.log(personajes_ordena_alfa)
  return personajes_ordena_alfa
}


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
 //console.log(selecciona_casa)
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
