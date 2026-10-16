type Equipo = {
    nombre: string,
    ganados: number,
    empatados: number,
    perdidos: number
}

let liga: Equipo[] = [
    { nombre: "Atlético Sur", ganados: 5, empatados: 2, perdidos: 1 },
    { nombre: "Deportivo Norte", ganados: 6, empatados: 0, perdidos: 2 },
    { nombre: "Unión Centro", ganados: 3, empatados: 3, perdidos: 2 },
    { nombre: "Real Este", ganados: 2, empatados: 1, perdidos: 5 }
];

/**
 * Apartado B
 * @param equipo 
 * @returns 
 */
function puntos(equipo: Equipo): number {
    return (equipo.ganados * 3) + equipo.empatados;
}

/**
 * Apartado C 
 *
 */
const clasificacion: Equipo[] = [...liga].sort((a: Equipo, b: Equipo) => puntos(b) - puntos(a));

clasificacion.forEach((equipo: Equipo, indice: number) => {
    console.log(`${indice + 1}. ${equipo.nombre} - ${puntos(equipo)} pts`);
});

console.log(`1er equipo del array original: ${liga[0].nombre} | 1er ordenado: ${clasificacion[0].nombre}`);