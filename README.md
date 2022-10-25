# JavaScript Arrays

Aprenderé y repasaré métodos de arrays como por ejemplo: forEach, map, filter, reduce, sort, some, find, etc.

Todo esto gracias a @Fazt el mejor youtuber 😁

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