// let x;
// x = "Mario";
// if (true) {
//     x = "Luigi";
// }
// console.log(x);

import EventEmitter = require("events")
import types = require("util/types");


// var y;

// //ARRAYS

// let numeros: number[] = [3, 5, 8, 11]
// let numeros2: number[] = [13, 15, 18, 21]

// let mixto: (number | string)[] = [13, "Mario", 1, "David"];

// let array2d: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(`La posición 0 del array numeros es: ${numeros[0]}`);
// console.log(`La posición 0 del array array2d es: ${array2d[0] != undefined ? array2d[0][0] : 0}`);

// //Factor de Propagación
// let numeros3 = [...numeros, ...numeros2];

// console.log(numeros3);
// numeros3[0] = 0;
// console.log(numeros3);
// console.log(numeros);

// console.log("Métodos de los arrays");

// let anumeros = [1, 3, 5, 7, 9,]

// anumeros.push(11, 13); //Añade un elemento al final del array
// console.log(anumeros);
// anumeros.pop(); //Elimina el último elemento del array
// console.log(anumeros);

// anumeros.unshift(0); //Añade un elemento al principio del array
// console.log(anumeros);

// let frutas: string[] = ["manzana", "pera", "uva"];
// // Obtener el elemento que cumple una determinada condición. En este caso se está buscansando al primer elemento cuya longitud del texto sea mayor a 5
// console.log(frutas.find(value => { return value.length > 5 })); // "manzana"

// frutas.forEach((valor: string) => { console.log(valor) }); // Recorre el array y muestra cada elemento por consola

// frutas.forEach((valor: string) => {
//     valor.length > 5 ? console.log(valor) : null
// }); // Recorre el array y muestra cada elemento por consola

// let frutasFiltradas = frutas.filter((fruta: string) => { return frutas.length > 6 })

// console.log(frutasFiltradas)

// let numerosEnteros = [1, 2, 3, 4]

// numerosEnteros.reduce((acc: number, elementoActual: number) => { return acc = acc + elementoActual })

// let arrayNombres = ["Mario", "Sanchez"]

// console.log(arrayNombres.reduce((acc: string, elementoSiguiente: string) => { return acc += " " + elementoSiguiente }))

// console.log(numerosEnteros.sort())

// let numerosye = [3, 1, 4, 2];

// // Ordena numericamente
// console.log(numerosye.sort((a, b) => b - a));

// let nombreEdad: [string, number]
// nombreEdad = ["Mario", 17]
// console.log(`Mi nombre es ${nombreEdad[0]}`)
// console.log(`Mi edad es de ${nombreEdad[1]}`)

// /**
//  * Suma 2 numero pasados como parámetros
//  * @param a primer parámetro
//  * @param b segundo parámetro
//  * @returns numero sumado
//  */
// function sumar(a: number, b: number): number {
//     return a + b;
// }
// let suma = sumar(10, 20)

// //No tiene hoisting
// const fResta = function (a: number, b: number): number {
//     return a - b;
// }

// console.log(fResta(5, 2))

// function saludar(nombre: string, apellido?: string) {
//     //IF-ELSE
//     if (apellido != undefined) {
//         console.log(`Hola ${nombre} ${apellido}`)
//     } else {
//         console.log(`Hola ${nombre}`)
//     }

//     // OPERADOR TERNARIO
//     apellido != undefined ? console.log(`Hola ${nombre} ${apellido}`) : console.log(`Hola ${nombre}`)

//     console.log(`Hola ${nombre} ${apellido ?? ""}`)
// }



// function buscar(frutas: string[]): string | undefined {
//     for (let x = 0; x > frutas.length; x++) {
//         const valorX: string | undefined = frutas[x];

//         if (valorX != undefined && valorX.length > 5) {
//             return valorX;
//             break;
//         }
//     }
// }

// //NOT NULL ASSERTION
// //el compilador confia que no va a ser null ni undefined
// //valor[x]!.length()

// //el compilador comprueba si es null o undefined
// //valor[x]?.length()

// function potencia(base: number, exponent: number = 2) {
//     return base ** exponent;
// }

// console.log(potencia(2, 3))

// //Función Flecha

// const fflecha = (a: number) => { return a }

// function math(a: number, b: number, operacion: (a: number, b: number) => number): number {
//     return operacion(a, b);
// }

// const farrowSumar = (a: number, b: number) => { return a + b }
// const fanonimaRestar = function (a: number, b: number) { return a + b }

// console.log(math(1, 5, farrowSumar))
// console.log(math(1, 5, fanonimaRestar))

// function multipleParam(...valores: number[]) {
//     let suma = valores.reduce((previousValue: number, currentValue: number) => { return previousValue += currentValue }, 0);
//     console.log(suma)
// }

// multipleParam(0, 1, 2, 3, 4, 5)


// //Fuciones asincronas
// async function getApiData(url: string): Promise<DataAPI> {
//     const respuesta = await fetch(url)
//     const datos = respuesta.json() as Promise<DataAPI>

//     return datos;
// }

// interface DataAPI{
//     message:string,
//     status:string
// }


// getApiData("https://dog.ceo/api/breeds/image/random")
//     .then((value: DataAPI) => { console.log(value.message) })
//     .catch((error) => { console.log(error) })


//Creación de Objetos literales
//JSON JavaScript Object Notation
let persona = {
    id: 1,
    nombre: "Mario",
    apellido: "Sánchez",
    edad: "22",
    direccion: {
        calle: "Madrid",
        numero: "22",
        bloque: {
            nombre: "Bloque A",
            color: "Azul"
        },
    }
    //esMayorEdad: function (): boolean { return this.edad >= 18 ? true : false }
}

console.log(persona.apellido);


//TYPE
// Es una plantilla que me va a permitir reutilizar código (interfaz)
type PuestoTrabajo = {
    puestoTrabajo: string,
    oficina: string
}

type IdTemplate = `uid-${number}`


type UserId = IdTemplate | number;

type Usuario = {
    readonly id: number,
    username: string,
    email: string,
    estaActivo: boolean,
    profileURL?: string
}

type Empleado = Usuario & PuestoTrabajo;


let user1: Usuario = {
    id: 1,
    username: "mariosb13",
    email: "mario@example.com",
    estaActivo: true,
}

//No deja modificar el parámetro id ya que es readonly
//user1.id=2;

// console.log(user1.profileURL?.toUpperCase)

// type Saludo = `Hola ${string}`

// let mensaje1: Saludo = "Hola Mario"

// //UNIONES |

// type Entidad = 'USUARIO' | 'PRODUCTO'
// type Accion = 'CREAR' | 'MODIFICAR' | 'BORRAR' | 'LISTAR'
// type Permisos = `${Entidad}_${Accion}`

// let permisos1: Permisos = "USUARIO_LISTAR"

// console.log(permisos1)

// type TDireccion = 'ESTE' | 'SUR' | 'NORTE' | 'OESTE'

// enum Direccion {
//     Norte = 1,
//     Sur = 2,
//     Este = 3,
//     Oeste = 4
// }
// let d1: TDireccion = "NORTE"
// let d2: Direccion = Direccion.Este

// type EstadoTicket = 'Urgente' | 'Abierto' | 'EnProceso' | 'Cerrado'

// type Ticket={
//     nombre:string,
//     estado:EstadoTicket
// }

// let ticket = {
//     nombre: 'Ticket 1',
//     estado:'Abierto'
// }

// //OBJETO SE RECUPERA DE LA BASE DE DATOS
// // ESTADO -> 0
// let estadoTicket =0
// switch () {
//     case 0:
//         console.log('Ticket Abierto')
//         break;
//     case 1:
//         console.log('Ticket en Proceso')
//         break;
//     case 2:
//         console.log('Ticket Cerrado')
//         break;
//     default:
//         break;
// }


type IdCoche = `id-coche-${number}`
//INTERFACES
interface Vehiculo {
    idCoche: IdCoche
    marca: string,
    modelo: string,
    anio: number,
}

//CREACION DE OBJETOS
let miVehiculo: Vehiculo = {
    etiquetaEco: true,
    idCoche: 'id-coche-1',
    marca: 'Seat',
    modelo: 'Ibiza',
    anio: 2010,
}

//Se pueden mergear interfaces (Mezclar)
interface Vehiculo {
    etiquetaEco: boolean
}


interface Coche extends Vehiculo {
    tamVolante: number
}

interface Moto extends Vehiculo {
    tamManillar: number
}

interface OperacionMatematica {
    (a: number, b: number): number;
}

const suma: OperacionMatematica = (a: number, b: number) => a + b;
const resta: OperacionMatematica = (a: number, b: number) => { return a - b };
const multiplica: OperacionMatematica = function (a: number, b: number) { return a * b }
const divide: OperacionMatematica = (a: number) => a / 2;

class Persona {
    constructor(public nombre: string, public apellidos: string, public edad: number) { };
}

interface IJugador{
    sueldo:number,
    alias:string,
    estaActivo:boolean,
    equipo?:string | undefined
}

class Jugador extends Persona{
    //Propiedades
    // nombre:string;
    // estaActivo:boolean;
    // equipo?:string|undefined;

    // constructor (nombre:string,estaActivo:boolean,equipo?:string){
    //     this.nombre=nombre
    //     this.estaActivo=estaActivo
    //     this.equipo=equipo;
    // }

    constructor(nombre: string, apellidos: string, edad: number, public alias: string, public estaActivo: boolean, public equipo?: string) {
        super(nombre, apellidos, edad);
    };

    muestraInformacion() {
        console.log(`El nombre es ${this.alias} y su estado es ${this.estaActivo}`)
    }
}

let j1 = new Jugador('Peluca','Luca Modric',12,'luquita', false)

j1.muestraInformacion()
