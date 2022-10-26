# JavaScript Arrays Map, Filter & Reduce

<br>

<div align=center><img src="./assets/filter-map-reduce.webp" height="200px"></div>

<br>

Aprenderé y repasaré métodos de arrays como por ejemplo: forEach, map, filter, reduce, sort, some, find, etc.
Todo esto gracias a [@Fazt](https://www.youtube.com/c/FaztTech) el mejor youtuber 😁


## ForEach

El método `forEach()` ejecuta la función indicada una vez por cada elemento del array.

```javascript

const names = ['Gabriela', 'Stephany', 'Diana', 'Jorge'];

names.forEach((name, index) => console.log(name, index));

// expected output: "Gabriela 0"
// expected output: "Stephany 1"
// expected output: "Diana 2"
// expected output: "Jorge 3"

```

`forEach()` ejecuta la función `callback` una vez por cada elemento presente en el array.

`callback` es invocada con tres argumentos:

1. Valor del elemento
2. El índice del elemento
3. Array que está siendo recorrido


## Map

El método `map()` crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```javascript

const numbers = [1, 3, 5, 7, 9];

const doubles = numbers.map(number => number * 2);

// doubles is noew [2, 6, 10, 14, 18]
// numbers is still [1, 3, 5, 7, 9]

```

`map()` ejecuta la función `callback` una vez por cada elemento presente en el array.

`callback` es invocada con tres argumentos:

1. Valor del elemento
2. El índice del elemento
3. Array que está siendo recorrido
   

## Filter

El método `filter()` toma una función `callback` y llama a esa función para cada elemento sobre el que itera dentro del arreglo de destino. La función `callback` de llamada puede tomar los siguientes parámetros:

- valorActual: Es el elemento del arreglo sobre el que se está iterando actualmente.
- indice: Es la posición del índice del **valorActual** dentro del arreglo.
- arreglo: Representa el arreglo de destino(final) junto con todos sus elementos.
  
El método `filter()` crea un nuevo arreglo y devuelve todos los elementos que pasan la **condición especificada** en la llamada en el callback.


```javascript

const arrayMethods = ['map', 'filter', 'reduce', 'some', 'fill', 'every'];

const result = arrayMethods.filter(method => method.length < 6);

console.log(result);
// expected output: > Array ["map", "some", "fill", "every"]


```
