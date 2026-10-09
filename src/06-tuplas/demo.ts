/**
 * 06 - TUPLAS
 *
 * Una tupla es un array de LONGITUD FIJA donde cada posición tiene su propio tipo.
 *
 * Ejecutar:  npm run play -- src/06-tuplas/demo.ts
 */

// ---------- Declaración ----------
let nombreEdad: [string, number];
nombreEdad = ["Jose", 17];

// Los tipos deben ir en la posición correcta:
// nombreEdad = [17, "Jose"];   // Error: Type 'number' is not assignable to type 'string'.

console.log(`Mi nombre es ${nombreEdad[0]}`); // string
console.log(`Mi edad es ${nombreEdad[1]}`); // number

// ---------- Desestructuración (lo habitual) ----------
const [nombre, edad] = nombreEdad;
console.log(`Desestructurada -> ${nombre} tiene ${edad} años`);

// ---------- Tupla con nombres (solo documentan, ayudan al autocompletado) ----------
type Producto = [nombre: string, precio: number];

const camiseta: Producto = ["Camiseta", 19.95];
console.log(`El producto ${camiseta[0]} tiene un precio de ${camiseta[1]} euros`);

// ---------- Elementos opcionales y rest ----------
type Coordenada = [x: number, y: number, z?: number]; // z es opcional

const plano: Coordenada = [10, 20];
const espacio: Coordenada = [10, 20, 30];
console.log("2D ->", plano, "| 3D ->", espacio);

// ---------- Devolver varios valores desde una función ----------
function dividir(a: number, b: number): [cociente: number, resto: number] {
  return [Math.floor(a / b), a % b];
}

const [cociente, resto] = dividir(17, 5);
console.log(`17 / 5 -> cociente ${cociente}, resto ${resto}`);

export {};