import {filterMadera , filterNucleo} from '../src/data.js';


const dataMadera = [{
  "name": "Hermione Granger",
  "wand": {
    "wood": "vine",
  }
  }
]

const dataNucleo = [{
  "name": "Harry Potter",
  "wand": {
    "core": "phoenix feather",
  }
  }
]


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
