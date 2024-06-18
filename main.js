// Ejercicio 1
// Vuelva a escribir el código para usar destructuringen vez de asignar cada variable individualmente.

let item = ["Egg", 0.25, 12];
// let name = item[0];
// let price = item[1];
// let quantity = item[2];

const [t1,t2,t3]=item

console.log(`Item: ${t1}, Quantity: ${t2}, Price: ${t3}`);
// Ejercicio 2
// Reescribe el código para asignar a cada variable el número correcto.

let numbers = [3, 5, 4, 2, 6, 1];
let [one, two, three, four, five, six] = numbers;

console.log(`One: ${six}, Two: ${four}, Three: ${one}, Four: ${three}, Five: ${two}, Six: ${five}`);
// Ejercicio 3
// Tenemos el objeto user. Desestructura sus propiedades en las variables name, agey isAdmin(esta última no existe, tendrás que crear un valor predeterminado false).

let user = { name: "John", years: 30 };

let {name, years : age , isAdmin= false} = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
// Ejercicio 4
// Vuelva a escribir el código para desestructurar el array.

let person = [12, "Chris", "Owen"];

// let firstName = person[1];
// let lastName = person[2];
// let age = person[0];

const [p1,p2,p3]=person

console.log(`Person - Age: ${t1}, Name: ${t2} ${t3}`);
// Ejercicio 5
// Reescribe el código para usar desestructuring, teniendo en cuenta que no debes crear ninguna variable vacía:

let person2 = ["Chris", 12, "Owen"];

// let firstName = person[0];
// let lastName = person[2];

const [pp1,,pp2]=person2

console.log(`Name: ${pp1} ${pp2}`);
// Ejercicio 6
// Desestructura el último elemento del array.

const students = ['Christina', 'Jon', 'Alexandare'];

const [,,lastName] = students;

console.log(lastName);
// Ejercicio 7
// Utilizando destructuring, obtenga sólo los nombres de los arrays dentro del array.
const moreStudents = [
	'Chris',
	['Ahmad', 'Antigoni'],
	['Toby', 'Sam']
];

const [,[student1,student2],[student3,student4]] = moreStudents;

console.log(student1, student2, student3, student4);