# Introducción a Typescript 
- TypeScript es un lenguaje de programación desarrollado por Microsoft. 
- Es un superset de JavaScript por lo que amplía las capacidades de JavaScript añadiendo tipado estático, clases, interfaces, decoradores, y otras herramientas pensadas para el desarrollo a gran escala. 
- Todo código JavaScript es válido en TypeScript, y al transpilarlo se transforma en JavaScript pudiendo ser ejecutado en navegadores o entornos como Node.js.

## Ventajas de TypeScript:

- **Detección temprana de errores**: gracias al tipado estático, muchos errores se detectan en tiempo de compilación y no en ejecución.

- **Mayor mantenibilidad**: el código es más fácil de entender y modificar, especialmente en proyectos grandes.

- **Productividad**: los editores como Visual Studio Code ofrecen autocompletado, refactorización y documentación instantánea.

- **Orientado a objetos**: permite trabajar con clases, interfaces y herencia de manera más estructurada.

- **Compatibilidad con JavaScript**: puedes migrar proyectos poco a poco, ya que cualquier archivo .js es válido en TypeScript.

# Sintaxis básica

## Tipos de datos primitivos
Typescript tiene tres tipos de datos primitivos `string`, `number` y `bolean`

```typescript
let nombre: string = "Ana";
let edad: number = 25;
let activo: boolean = true;
```

## Tipos de datos speciales
- **any**: desactiva la verificación de tipos, permitiendo almacenar cualquier valor y realizar cualquier operación sin que el compilador genere un error de tipo.

```typescript
let valor: any;

valor = 123;
valor = "texto";
valor = true;

// ❌ En tiempo de compilación no daría error pero sí daría error en tiempo de ejecución porque el último valor es de tipo boolean.

console.log(valor.toUpperCase()); // Error

```

- **unknown**: similar a any, pero obliga a comprobar el tipo antes de usarlo. Cuando declaras una variable como unknown, no le estás restringiendo qué puede almacenar, porque unknown literalmente significa “puede ser cualquier cosa”. La restricción de unknown no está en la asignación, sino en el uso posterior de ese valor.

```typescript
let valor: unknown;

valor = 123;
valor = "texto";
valor = true;


// ❌ No puedes usarlo como string directamente
console.log(valor.toUpperCase()); // Error

// ✅ Primero debes comprobar el tipo
if (typeof valor === "string") {
  console.log(valor.toUpperCase()); 
}
```


- **void**: usado en funciones que no devuelven nada.


## Inferencia de tipos
La inferencia de tipos es la capacidad de TypeScript para determinar automáticamente el tipo de una variable, función o expresión sin que tengas que especificarlo explícitamente.

En otras palabras, TypeScript “adivina” el tipo basándose en el valor que le asignas.

```typescript
let numero = 42; // TypeScript infiere que 'numero' es de tipo number. No es necesario escribir :number

// Si intentamos realizar alguna operación incompatible:

numero = "hola"; // ❌ Error: Type 'string' no se puede asignar a type 'number'
```

La inferencia de tipos también se traslada a los arrays y las funciones:

```typescript
let frutas = ["manzana", "pera", "uva"]; 
// TypeScript infiere: string[]
frutas.push("naranja"); // ✅ correcto
// frutas.push(5);      // ❌ Error: number no se puede asignar a string

function suma(a: number, b: number) {
  return a + b; // TypeScript infiere que el retorno es number
}

let resultado = suma(3, 4); // resultado: number
```

# Estructuras de control y repetición.

## if-else if - else
Permite verificar múltiples condiciones secuenciales.
```typescript
let nota: number = 7;

if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 7) {
  console.log("Notable");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}
```
## Operador ternario
Es una forma compacta de if/else.
```typescript
let edad: number = 20;
let tipo = edad >= 18 ? "Adulto" : "Menor";
console.log(tipo); // "Adulto"
```
## Switch
Se usa cuando hay muchos casos posibles de una misma variable.
```typescript
let dia: number = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Otro día");
}
```
## for
Bucle clásico que nos permitirá iterar.
```typescript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//i = inicialización
//i < 5 condición de continuación
//i++ incremento en cada iteracción
```

## for..of

```typescript
let frutas: string[] = ["Manzana", "Banana", "Naranja"];

for (let fruta of frutas) {
  console.log(fruta);
}
```
## while 
Se repite mientras la condición sea verdadera.

```typescript
let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}
```

## do...while
Se ejecuta al menos una vez, y luego repite mientras la condición sea verdadera.

```typescript
let contador = 0;

do {
  console.log(contador);
  contador++;
} while (contador < 5);
```
## Control de bucles: break y continue

- **break:** termina el bucle inmediatamente.

- **continue:** salta a la siguiente iteración.

```typescript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Salta el 2
  if (i === 4) break;    // Termina el bucle
  console.log(i);
}
// Imprime 0, 1, 3
```
# Arrays

Un array es una colección de elementos del mismo tipo (aunque también puede ser de tipos mixtos si así lo defines).

```typescript
//Declaración  e inicialización de arrays:
let numeros: number[] = [1, 2, 3, 4];


// Arrays heterogéneos
let mixto: (string | number)[] = ["hola", 42, "adiós", 99];

// Arrays multidimensionales 
let matriz: number[][] = [
  [1, 2],
  [3, 4]
];

// Acceso a los elementos de un array:

let n1 = numero[0];
let dato_matriz = matriz[0][0]

//Concatenación de arrays mediante factor de propagación

let listaTareas1 : string [] = ["Tarea 1"," Tarea 2"," Tarea 3"];
let listaTareas2 : string [] = [" Tarea 3"];

let nuevaListaTareas : string[] = [...listaTareas1, ...listaTareas2, "Tarea 4"];
```

## Agregar o quitar elementos de un array

```typescript
let numeros: number[] = [1, 2, 3];

// Añadir al final
numeros.push(4);   // [1, 2, 3, 4]

// Quitar el último
numeros.pop();     // [1, 2, 3]

// Añadir al inicio
numeros.unshift(0); // [0, 1, 2, 3]

// Quitar el primero
numeros.shift();    // [1, 2, 3]
```

## Acceder a la información de un array
```typescript
let letras: string[] = ["a", "b", "c"];

// Obtener el total de elementos
console.log(letras.length);   

// Acceder al primer elemento
console.log(letras[0]);      

//Acceder al último elemento
console.log(letras[letras.length - 1]);
```
## Buscar elementos en un array
```typescript
let frutas: string[] = ["manzana", "pera", "uva"];

// Consultar la posición de un elemento
console.log(frutas.indexOf("pera")); //1

// Consultar si el array incluye a un elemento

console.log(frutas.includes("uva"));    // true


console.log(frutas.find(f => f.length > 5)); // "manzana"

// Obtener el elemento que cumple una determinada condición. En este caso se está buscansando al primer elemento cuya longitud del texto sea mayor a 5
console.log(frutas.find(f => f.length > 5)); // "manzana"

// Obtener la posición del primer elemento que cumpla una determinada condición.
console.log(frutas.findIndex(f => f === "uva")); // 2
```

## Recorrer arrays

```typescript
let numeros = [1, 2, 3];

// forEach → recorrer sin devolver nada
numeros.forEach(n => console.log(n * 2)); // 2, 4, 6

// map → transforma el array
let dobles = numeros.map(n => n * 2); // [2, 4, 6]

// filter → filtra según condición
let pares = numeros.filter(n => n % 2 === 0); // [2]

// reduce → acumula en un valor
// array.reduce((acumulador, elementoActual) => /* operación */, valorInicial)
// valor ininicial del acumulador, si no se pone nada se usa el primer elemento del array.

let suma = numeros.reduce((acc, n) => acc + n, 0); // 6
```
## Ordena y manipula

```typescript
let numeros = [3, 1, 4, 2];

// Ordenar. Por defecto ordena como string
numeros.sort(); // [1, 2, 3, 4]

// Ordena numericamente
numeros.sort((a, b) => a - b);

// Cortar una parte
//array.slice(inicio, fin?)
// - inicio → índice donde empieza la copia (inclusive).
// -  fin → índice donde termina la copia (exclusive, no incluye el elemento en esa posición).
// Devuelve un array sin modificar el original
```
## Unir o transformar
```typescript
let palabras = ["Hola", "mundo"];
console.log(palabras.join(" ")); // "Hola mundo"

```


# Tuplas 

Una tupla es un array con **longitud fija y tipos específicos en cada posición.**
Es decir, a diferencia de un array, donde todos los elementos son del mismo tipo, en una tupla puedes definir un tipo distinto para cada índice.

```typescript

let persona: [string, number];

// Los tipos deben estar en la posición correcta.
persona = ["Juan", 30];

// Acceso a los elementos:
let nombre = persona[0]; // string
let edad = persona[1];   // number
```

# Ejercicios prácticos básicos
## Ejercicio 1.
Escribe una función en TypeScript que reciba como parámetro una nota numérica entre 0 y 10 e imprima un mensaje en pantalla según la calificación obtenida:
- >=9: Sobresaliente
- >=7: Notable
- >=5: Aprobado
- <5: Suspenso.
## Ejercicio 2.
Crea un programa en TypeScript que imprima en consola todos los números pares del 1 al 20. Usa un bucle for, while y do-while.
## Ejercicio 3.
1. Declara un array con al menos 3 nombres.
2. Agrega dos nombres nuevos al final de la lista.
3. Elimina el primer elemento del array.
4. Comprueba si un nombre concreto (ejemplo "Ana") está en la lista.
5. Recorre el array e imprime cada nombre en consola.
## Ejercicio 4.
Crea una tupla en TypeScript que contenga:
- El nombre de un producto (string).
- Su precio (number).
Muestra el nombre y el precio por consola en el formato: 
El producto nombre tiene un precio de precio euros.
## Ejercicio 5.
Define una función que reciba un array de números como parámetro y devuelva la suma total.
Ejemplo: sumarArray([1, 2, 3, 4]) // devuelve 10

## Ejercicio 6.
Escribe una función que reciba un array de strings y devuelva un solo string concatenado, donde cada elemento esté separado por una coma y un espacio ", "
Ejemplo: concatenar(["Ana", "Luis", "Pedro"]) // devuelve "Ana, Luis, Pedro"
## Ejercicio 7.
Crea un programa que reciba un número entre 1 y 7 e imprima el día de la semana correspondiente.
## Ejercicio 8.
Crea un array con varios números. Recorre el array con un for y detén la ejecución (break) cuando encuentres el número 7, mostrando un mensaje "Número encontrado".Si el número no existe en el array, mostrar "Número no encontrado".
## Ejercicio 9.
Escribe una función que reciba un array de números y devuelva el mayor de ellos.
Ejemplo: mayorNumero([3, 8, 1, 10, 5]) // devuelve 10

## Ejercicio 10
Crea un array con varios números. Recorre el array con un bucle y para cada número imprime:
- "Par" si es par.
- "Impar" si es impar.
Usa el operador ternario para la comprobación.

# Funciones
