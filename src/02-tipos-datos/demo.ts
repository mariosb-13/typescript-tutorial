let texto: string = "Mario!";
let numero: number = 42;
let numeroFloat: number = 42.4;

let booleano: boolean = true;

let cualquier: any = "Esto puede ser cualquier cosa";
let desconocido: unknown = "Esto es un valor desconocido";

let nulo: null = null;

//Se utiliza para indicar que una variable puede ser de un tipo o nula, por ejemplo:
let hola: string | null = null;
let adios: string | undefined = undefined;

if (typeof desconocido === "string") {
  console.log(desconocido.toUpperCase());
}

let nada: void = undefined;

function saludo(): void {
  console.log("¡Hola!");
}


/**
 * Función que nunca termina
 */
function nuncaAcaba(): never {
  while (true) { }
}

console.log("Hola" + texto);
console.log(`Hola + ${texto}`);

interface Usuario {
  nombre: string;
  edad?: number;
  dni: string;
}

let usuario1: Usuario = {
  nombre: "Mario",
  dni: "12345678A"
}

let usuario2: Usuario = {
  nombre: "Juan",
  edad: 12,
  dni: "12345678A"
}

console.log(`Edad de Juan: ${usuario2.edad}`);
console.log(`Edad de Mario: ${usuario1.edad ?? "No especificada"}`);
// ?? -> undefined o null

console.log(`Edad de Mario: ${usuario1.edad || "No especificada"}`);
// || -> undefined, null, cadena vacía, 0, false, NaN

//operador ternario
console.log(`Juan es ${usuario2.edad! > 18 ? `mayor de edad` : `menor de edad`}`);

//operador propagación
let numeros: number[] = [1, 2, 3];
let numeros2: number[] = [...numeros, 4, 5, 6];

let [primero, segundo] = numeros2;

console.log(`Números 1: ${numeros}`);
console.log(`Números 2: ${numeros2}`);
console.log(`Primer número: ${primero}`);
console.log(`Segundo número: ${segundo}`);


let p1 = {nombre: "Mario", edad: 30};
let {nombre: nombreP1, edad: edadP1} = p1;

console.log(`Nombre: ${nombreP1}`);
console.log(`Edad: ${edadP1}`);