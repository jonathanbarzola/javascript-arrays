/* 
    Programación Imperativa

    for (let i = 0; i < students.length; i++) {
    console.log(students[i])
    } 
*/


// Programación Declarativa

students.forEach((student, index, stds) => {
    console.log("Este es el elemento en la posición: " + index);
    console.log(student.name + " "+ student.lastname);
    console.log("\n");

    // stds imprimiría el array students que es el que esta siendo recorrido actualmente
})