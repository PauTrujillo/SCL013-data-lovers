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
  console.log(personajes_ordena_alfa)
  return personajes_ordena_alfa
}
