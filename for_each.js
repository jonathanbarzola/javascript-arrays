import { students } from "./index.js";

/* 
    Programación Imperativa

    for (let i = 0; i < students.length; i++) {
    console.log(students[i])
    } 
*/


// Programación Declarativa

const fullnames = [];

students.forEach((student, index, stds) => {
    console.log("Este es el elemento en la posición: " + index);
    console.log(student.name + " "+ student.lastname);
    console.log("\n");

    fullnames.push(student.name + " "+ student.lastname);
    // stds imprimiría el array students que es el que esta siendo recorrido actualmente
})

console.log(fullnames);