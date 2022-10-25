const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan",
    lastname: "Ray",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];

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