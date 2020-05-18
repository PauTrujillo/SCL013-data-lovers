import {filterordenaA_Z,
  filterRelevancia,
  filterData,
  filterCasa,
  filterMadera,
  filterHechizo,
  filterAncestro,
  filterNucleo,
  filterCasaEnemigo,
  filterAncestroEnemigo,
  filterEspecie,
  filterHechizoEnemigo} from '../src/data.js';

//creando constantes para la data a testear//

//constante para filterOrdenarAZ/
const dataOrdenarAZ = [
  {
    "name": 'Draco Malfoy',
      "categories": 33,
          }, {
       "name": 'Remus Lupin',
       "categories": 30,
          }, {
       "name": 'Lord Voldemort',
       "categories": 51,
    }]


//constante para filterOrdenarRelevancia/
const dataOrdenarRelevancia = [
  {
    "name": 'Arthur Weasley',
      "categories": 22,
          }, {
       "name": 'Horace Slughorn',
       "categories": 17,
          }, {
       "name": 'Lucius Malfoy',
       "categories": 18,
    }]


//constante para filterData//
const dataData = [
  {
    "name": 'Ron Weasley',
    "gender": 'male',
    }
]

//constante para filterCasa//
const dataCasa = [{
  "name": "Gregory Goyle",
  "house": "Slytherin",
}
]

//constante para filterMadera//
const dataMadera = [{
  "name": "Hermione Granger",
  "wand": {
    "wood": "vine",
  }
  }
]

//constante para filterHechizo//
const dataHechizo = [{
  "name": 'Cho Chang',
    "patronus": 'swan',
  }
]

//constante para filterAncestro//
const dataAncestro = [{
  "name": 'Severus Snape',
    "ancestry": 'half-blood',
  }
]

//constante para filterNucleo//
const dataNucleo = [{
  "name": "Harry Potter",
  "wand": {
    "core": "phoenix feather",
  }
  }
]

//constante para filterCasaEnemigo//
const dataCasaEnemigo = [{
  "name": "Neville Longbottom",
  "house": "Gryffindor",
  }
]

//constante para filterAncestroEnemigo//
const dataAncestroEnemigo = [{
  "name": "Ginny Weasley",
  "ancestry": "pure-blood",
  }
]

//constante para filterEspecia//
const dataEspecie = [{
  "name": "Mrs Norris",
  "species": "cat",
  }
]

//constante para filterHechizoEnemigo//
const dataHechizoEnemigo = [{
  "name": "Dolores Umbridge",
  "patronus": "persian cat",
  }
]


//testeando funcion de ordena a-z y z-a/
describe('filterordenaA_Z', () => {

  test('is a function', () => {
    expect(typeof filterordenaA_Z).toBe('function');
   });

   test('should return "Ordenar A-Z" for order "ordena"', () => {
    expect(filterordenaA_Z(dataOrdenarAZ,"ordena","Ordenar A-Z"))===([{
      "name": 'Draco Malfoy',
      "categories": 33,
          }, {
      "name": 'Lord Voldemort',
      "categories": 51,
          }, {
       "name": 'Remus Lupin',
      "categories": 30,
          }]);
        });
      });

    /*  describe('filterordenaA_Z', () => {

          test('should return "Ordenar Z-A" for order "ordena"', () => {
            expect(filterordenaA_Z(dataOrdenarAZ,"ordena","Ordenar Z-A"))===([{
              "name": 'Draco Malfoy',
              "categories": 33,
                  }, {
              "name": 'Lord Voldemort',
              "categories": 51,
                  }, {
               "name": 'Remus Lupin',
              "categories": 30,
                  }].reverse());
                });
              }); */


//testeando funcion de ordena relevancia/
describe('filterRelevancia', () => {

  test('is a function', () => {
    expect(typeof filterRelevancia).toBe('function');
   });

   test('should return "Menor Relevancia" for order "categoria"', () => {
    expect(filterRelevancia(dataOrdenarRelevancia,"categoria","Menor Relevancia"))===([{
      "name": 'Horace Slughorn',
      "categories": 17,
           }, {
      "name": 'Lucius Malfoy',
      "categories": 18,
           }, {
       "name": 'Arthur Weasley',
       "categories": 22,
          }]);
        });
      });

      /*describe('filterordenaA_Z', () => {

          test('should return "Ordenar Z-A" for order "ordena"', () => {
            expect(filterordenaA_Z(dataOrdenarRelevancia,"categoria","Mayor Relevancia"))===([{
              "name": 'Horace Slughorn',
              "categories": 17,
                  }, {
              "name": 'Lucius Malfoy',
              "categories": 18,
                  }, {
               "name": 'Arthur Weasley',
              "categories": 22,
                  }].reverse());
                });
              }); */




//testeando funcion de filtra genero//
describe('filterData', () => {
  test('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  test('should return "male" for filter "gender"', () => {
    expect(filterData(dataData, "male" )).toEqual([
      {
        "name": 'Ron Weasley',
        "gender": 'male',
        }
    ]);
  });
});

//testeando funcion de filtra casa//
describe('filterCasa', () => {
  test('is a function', () => {
    expect(typeof filterCasa).toBe('function');
     });

     test('should return "Slytherin" for filter "house"', () => {
          expect(filterCasa(dataCasa, "Slytherin")).toEqual([{
            "name": "Gregory Goyle",
            "house": "Slytherin",
          }
          ]);
        });
      });

//testeando funcion de filtra madera varita//
describe('filterMadera', () => {
  test('is a function', () => {
    expect(typeof filterMadera).toBe('function');
  });

  test('should return "vine" for filter "wand.wood"', () => {
    expect(filterMadera(dataMadera, "vine" )).toEqual([{
      "name": "Hermione Granger",
      "wand": {
        "wood": "vine",
      }
      }
    ]);
  });
});

//testeando funcion de filtra hechizo//
describe('filterHechizo', () => {
  test('is a function', () => {
    expect(typeof filterHechizo).toBe('function');
  });

  test('should return "swan" for filter "patronus"', () => {
    expect(filterHechizo(dataHechizo, "swan" )).toEqual([{
      "name": "Cho Chang",
      "patronus": "swan",
      }
    ]);
  });
});

//testeando funcion de filtra ancestro//
describe('filterAncestro', () => {
  test('is a function', () => {
    expect(typeof filterAncestro).toBe('function');
  });

  test('should return "half-blood" for filter "ancestry"', () => {
    expect(filterAncestro(dataAncestro, "half-blood" )).toEqual([{
      "name": 'Severus Snape',
      "ancestry": 'half-blood',
      }
    ]);
  });
});

//testeando funcion de filtra nucleo varita//
describe('filterNucleo', () => {
  test('is a function', () => {
    expect(typeof filterNucleo).toBe('function');
  });

  test('should return "phoenix feather" for filter "wand.core"', () => {
    expect(filterNucleo(dataNucleo, "phoenix feather" )).toEqual([{
      "name": "Harry Potter",
      "wand": {
        "core": "phoenix feather",
      }
      }
    ]);
  });
});


//testeando funcion de filtra casa Enemigo//
describe('filterCasaEnemigo', () => {
  test('is a function', () => {
    expect(typeof filterCasaEnemigo).toBe('function');
  });

  test('should return "Gryffindor" for filter "house"', () => {
    expect(filterCasaEnemigo(dataCasaEnemigo, "Gryffindor" )).toEqual([{
      "name": 'Neville Longbottom',
      "house": 'Gryffindor',
      }
    ]);
  });
});


//testeando funcion de filtra ancestro Enemigo//
describe('filterAncestroEnemigo', () => {
  test('is a function', () => {
    expect(typeof filterAncestroEnemigo).toBe('function');
  });

  test('should return "pure-blood" for filter "ancestry"', () => {
    expect(filterAncestroEnemigo(dataAncestroEnemigo, "pure-blood" )).toEqual([{
      "name": 'Ginny Weasley',
      "ancestry": 'pure-blood',
      }
    ]);
  });
});


//testeando funcion de filtra especie//
describe('filterEspecie', () => {
  test('is a function', () => {
    expect(typeof filterEspecie).toBe('function');
  });

  test('should return "cat" for filter "species"', () => {
    expect(filterEspecie(dataEspecie, "cat" )).toEqual([{
      "name": 'Mrs Norris',
      "species": 'cat',
      }
    ]);
  });
});


//testeando funcion de hechizo enemigo//
describe('filterHechizoEnemigo', () => {
  test('is a function', () => {
    expect(typeof filterHechizoEnemigo).toBe('function');
  });

  test('should return "persian cat" for filter "patronus"', () => {
    expect(filterHechizoEnemigo(dataHechizoEnemigo, "persian cat" )).toEqual([{
      "name": 'Dolores Umbridge',
      "patronus": 'persian cat',
      }
    ]);
  });
});


/*describe('anotherExample', () => {
  test('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  test('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/



/*import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  test('is a function', () => {
    expect(typeof example).toBe('function');
  });

  test('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  test('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  test('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
