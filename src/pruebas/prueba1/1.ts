//Apartado A
type Libro = {
    titulo: string,
    autor: string,
    anio: number,
    paginas: number,
    disponible: boolean
}

let catalogo: Libro[] = [
    { titulo: "El Quijote", autor: "Cervantes", anio: 1605, paginas: 863, disponible: true },
    { titulo: "La Regenta", autor: "Clarín", anio: 1884, paginas: 712, disponible: false },
    { titulo: "Niebla", autor: "Unamuno", anio: 1914, paginas: 296, disponible: true },
    { titulo: "Nada", autor: "Carmen Laforet", anio: 1945, paginas: 288, disponible: true },
    { titulo: "Marianela", autor: "Galdós", anio: 1878, paginas: 240, disponible: false }
];

//Apartado B
const librosDisponibles = catalogo.map((libro: Libro) => libro.disponible == true ? libro.titulo:undefined);
console.log(`Disponibles: ${librosDisponibles.join("|")}`)

//Version Jose 
let librosDisponiblesVar = catalogo.filter((l:Libro)=>{return l.disponible}).map((l:Libro)=>{return l.titulo}).join(" | ")
console.log(`Disponibles V2: ${librosDisponiblesVar}`)

//Apartado C
const paginasTotales = catalogo.map((libro: Libro) => libro.paginas);

const PAGINASTOTALES: number = paginasTotales.reduce((acc: number, actual: number) => acc + actual, 0)

console.log(`Paginas Totales: ${PAGINASTOTALES}`);

/**
 * Apartado D
 * @param lista 
 * @param autor 
 * @returns 
 */
function buscarPorAutor(lista: Libro[], autor: string): Libro | undefined {
    return lista.find((libro: Libro) => libro.autor === autor);
}

// Búsqueda 1
const autor1 = "Unamuno";
const busqueda1 = buscarPorAutor(catalogo, autor1);
console.log(`${autor1}: ${busqueda1 ? busqueda1.titulo : "No encontrado"}`);

// Búsqueda 2
const autor2 = "Lorca";
const busqueda2 = buscarPorAutor(catalogo, autor2);
console.log(`${autor2}: ${busqueda2 ? busqueda2.titulo : "No encontrado"}`);


/**
 * Apartado E
 * @param lista 
 * @param titulo 
 * @returns 
 */
function prestar(lista: Libro[], titulo: string): Libro[] {
    //let copiaArray = structuredClone(catalogo) otra forma de copiar 

    return lista.map((libro: Libro) =>
        libro.titulo === titulo ? { ...libro, disponible: false } : { ...libro }
    );
}

const catalogoActualizado = prestar(catalogo, "Niebla");

const nieblaOriginal = catalogo.find((libro: Libro) => libro.titulo === "Niebla");
const nieblaNuevo = catalogoActualizado.find((libro: Libro) => libro.titulo === "Niebla");

console.log(`Niebla tras el préstamo -> original:${nieblaOriginal?.disponible} | nuevo:${nieblaNuevo?.disponible}`);

/**
 * Apartado F
 * @param lista 
 * @returns 
 */
function extremos(lista: Libro[]): [string, string] {
    const ordenados = [...lista].sort((a: Libro, b: Libro) => a.anio - b.anio);

    const masAntiguo = ordenados[0].titulo;
    const masModerno = ordenados[ordenados.length - 1].titulo;

    return [masAntiguo, masModerno];
}

const [masAntiguo, masModerno] = extremos(catalogo);

console.log(`Más antiguo: ${masAntiguo} | Más moderno: ${masModerno}`);