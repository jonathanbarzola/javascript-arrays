import { students } from "./index.js";

const developers = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "React", "JavaScript", "Java"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "React", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "React", "JavaScript", "React", "Redux", "NodeJS"],
  },
];

/* 
    PROGRAMACIÓN IMPERATIVA

    let total = 0

    for (let i = 0; i < students.length; i++) {
        total += students[i].age;
    }

    console.log(total); 
*/

/* 
    Programación declarativa

    const result = students.reduce((total, student) => total + student.age, 0)
    console.log(result);
*/

const result = developers.reduce(function (allSkills, developer) {
  return Array.from(new Set([...allSkills, ...developer.skills]));
}, []);

console.log(result);
