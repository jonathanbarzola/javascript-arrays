import { students } from "./index.js";

/* 
    const fullnames = students.map(function (student) {
    return student.name + " " + student.lastname;
})
 */

/* 

const names = students.map(student => {
    return {
        ...student,
        course: "Programming"
    }
})
*/

const doubleAge = students.map((student) => ({
  ...student,
  course: "Programming",
})).map((student) => ({
  ...student,
  age: student.age * 2,
})).map(student => ({
    ...student,
    isSingle: false,
}));

console.log(doubleAge);
