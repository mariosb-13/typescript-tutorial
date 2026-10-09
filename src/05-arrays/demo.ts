/**
 * 05 - ARRAYS
 *
 * Ejecutar:  npm run play -- src/05-arrays/demo.ts
 */

// ---------- Declaración y tipado ----------
const numeros: number[] = [3, 5, 8, 11];
const numeros2: number[] = [15, 21, 27];

// Array de varios tipos (union type)
const mixto: (number | string)[] = [3, "Jose", 5, "Juan"];
console.log("mixto ->", mixto);

// Array bidimensional
const array2d: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("array2d[0][0] ->", array2d[0][0]);
console.log(`La posición 0 del array numeros es: ${numeros[0]}`);

// ---------- Copiar y unir con spread ----------
const numeros3 = [...numeros, ...numeros2];
console.log("numeros3 ->", numeros3);

numeros3[0] = 10; // spread hace copia: el original NO se toca
console.log("numeros3 modificado ->", numeros3);
console.log("numeros intacto     ->", numeros);

// ---------- OJO: el spread hace una copia SUPERFICIAL ----------
/**
 * Con primitivos (number, string, boolean) la copia es total y segura.
 * Con OBJETOS dentro, el spread copia las REFERENCIAS, no los objetos:
 * el array es nuevo, pero los objetos de dentro son los mismos.
 */
const alumnos = [{ nombre: "Ana" }, { nombre: "Luis" }];
const copiaAlumnos = [...alumnos];

copiaAlumnos[0].nombre = "MODIFICADO"; // tocamos la COPIA...
console.log("original ->", alumnos[0].nombre); // ...y cambia el ORIGINAL ❌

// Para copiar también los objetos de dentro (copia profunda):
const alumnos2 = [{ nombre: "Ana" }, { nombre: "Luis" }];
const copiaProfunda = alumnos2.map((a) => ({ ...a })); // copia cada objeto
copiaProfunda[0].nombre = "MODIFICADO";
console.log("original con copia profunda ->", alumnos2[0].nombre); // "Ana" ✅

// structuredClone() también sirve y funciona a cualquier profundidad
const copiaTotal = structuredClone(alumnos2);
copiaTotal[0].nombre = "OTRO";
console.log("original con structuredClone ->", alumnos2[0].nombre); // "Ana" ✅

// ---------- Añadir y quitar ----------
const anumeros = [1, 3, 5, 7, 9];

anumeros.push(11); // añade al FINAL
console.log("push    ->", anumeros);

anumeros.pop(); // quita del FINAL
console.log("pop     ->", anumeros);

anumeros.push(13, 15, 17); // push admite varios
console.log("push x3 ->", anumeros);

anumeros.unshift(0); // añade al PRINCIPIO
console.log("unshift ->", anumeros);

console.log("shift devuelve ->", anumeros.shift()); // quita del PRINCIPIO y lo devuelve
console.log("shift   ->", anumeros);

// ---------- Acceso y reemplazo ----------
anumeros[0] = -1;
console.log("anumeros[0] ->", anumeros[0]);
console.log("longitud    ->", anumeros.length);
console.log("último      ->", anumeros[anumeros.length - 1]); // -1 porque los índices empiezan en 0
console.log("fuera de rango ->", anumeros[anumeros.length]); // undefined

// ---------- Buscar ----------
const frutas = ["manzana", "pera", "platano", "mandarina", "platano"];

console.log("indexOf('platano') ->", frutas.indexOf("platano")); // primera posición, o -1
console.log("includes('pera')   ->", frutas.includes("pera")); // true / false

// find: devuelve el primer ELEMENTO que cumple la condición
console.log(
  "find len>5   ->",
  frutas.find((valor) => valor.length > 5),
);

// findIndex: devuelve la primera POSICIÓN que cumple la condición
console.log(
  "findIndex    ->",
  frutas.findIndex((valor) => valor.length > 5),
);

// ---------- Recorrer ----------
// forEach: ejecuta una función por cada elemento. No devuelve nada.
frutas.forEach((valor: string) => {
  if (valor.length > 5) console.log(`forEach -> ${valor}`);
});

// map: TRANSFORMA cada elemento y devuelve un array NUEVO
const frutasUpper = frutas.map((fruta: string) => fruta.toUpperCase());
console.log("map    ->", frutasUpper);

// filter: se queda con los que cumplen la condición, en un array NUEVO
const frutasFiltradas = frutas.filter((fruta: string) => fruta.length > 6);
console.log("filter ->", frutasFiltradas);

// reduce: ACUMULA todos los elementos en un único valor
const numerosEnteros = [11, 1, 2, 3, 4, 5, 6, 7];
const total = numerosEnteros.reduce((acc: number, actual: number) => acc + actual, 0);
console.log("reduce suma ->", total);

const miNombre = ["Carlos", "Eduardo", "Mendoza", "Ruiz"];
const nombreConcatenado = miNombre.reduce((anterior, actual) => `${anterior} ${actual}`);
console.log("reduce concatenar ->", nombreConcatenado);

// ---------- Ordenar y trocear ----------
// sort MODIFICA el array original. Con números hay que pasarle el comparador.
console.log("sort  ->", [...numerosEnteros].sort((a, b) => a - b));
console.log("slice ->", miNombre.slice(0, 2)); // copia un trozo, no modifica
console.log("join  ->", numeros.join(" ")); // array -> string

export { };


//////////////////////////////////

let array: number[] = [1, 2, 3, 4, 5];
// Array de varios tipos (union type)
let array2: (string | number)[] = [1, 2, "tres", 4, "cinco"];


array.push(6); // Añadir al final
array.unshift(0); // Añadir al principio
array.pop(); // Eliminar del final
array.shift(); // Eliminar del principio

console.log(array[0]); // Imprimir el primer elemento

console.log(array.length); // Imprimir la longitud del array

console.log(array.indexOf(4)); // Imprimir la posición del elemento 4

console.log(array.includes(3)); // Comprobar si el array incluye el elemento 3

//indexof
//find

console.log(frutas.find((valor: string) => { return valor.length > 5 }));
console.log(frutas.filter((valor: string) => { return valor.includes("ma") }));
//map
//foreach
//reduce

let notas = [4, 5, 8.7, 9, 10, 0, 1.5];

let numeroAprobados: number = notas.filter((valor: number) => { return valor >= 5 }).length;

console.log(`Número de aprobados: ${numeroAprobados}`);


let numeros6 = [1, 2, 3]

let suma= numeros6.reduce((acumulador: number, valorActual: number) => { return acumulador + valorActual }, 0);

/**
 * function fSuma(array:number[]):number{
 *  let acc=0
 *   for (const n of numeros){
 *     acumulador+=n
 *   }
 * return acc;
 * }
 */


let numerosRandom =[-61, 4, 51, 9, 800, 1, 4, 44];

let extraerGrande= numerosRandom.reduce((acumulador: number, valorActual: number) => { return (valorActual>acumulador)? valorActual:acumulador });

console.log(`El número más grande es: ${extraerGrande}`);