import { students } from "./index.js";

/* 
    Programación Imperativa

    const developers = [];

    for (let i = 0; i < students.length; i++) {
      if (students[i].course === "Web Development") {
        developers.push(students[i]);
      }
    }
    console.log(developers);
*/

/* 
    -> Muestra todos los estudiantes que su curso sea igual a Web development.

    const result = students.filter(function(student) {
        return student.course === 'Web Development'
    })
*/

const result = students.filter((student) => student.course !== 'Web Development')

console.log(result);