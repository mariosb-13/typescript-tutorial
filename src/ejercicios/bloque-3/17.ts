import { log } from "console";

export {}
interface TareaApi {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface Tarea {
    id: number,
    title: string,
    completed: boolean
}

let tareasCompletadas: number = 0;
let tareasPendientes: number = 0;

async function obtenerTareas(usuarioId: number): Promise<Tarea[]> {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${usuarioId}`);

    if (!respuesta.ok) {
        throw new Error(`Error HTTP ${respuesta.status}`);
    }

    const datos = await (respuesta.json() as Promise<TareaApi[]>);

    const tareas: Tarea[] = datos.map((t: Tarea) => { return { id: t.id, title: t.title, completed: t.completed } })


    return tareas;
}

//Otra forma de hacer esto en vez de .then().catch()
//habria que poner export() arriba
//const datosApi = await obtenerTareas(1)

obtenerTareas(1).then((tarea: Tarea[]) => {
    console.log(tarea);
    console.log(`Hay un total de ${tarea.length} tareas para el usuario 1`)
    tarea.forEach((e: Tarea) => {
        if (e.completed) {
            tareasCompletadas++
        } else {
            tareasPendientes++;
        }
    });
    console.log(`Hay un ${Math.trunc((tareasCompletadas / tarea.length) * 100)}% de tareas completadas`)
    console.log(`Hay un ${Math.trunc((tareasPendientes / tarea.length) * 100)}% de tareas pendientes`)

    const tareasFiltradas = tarea.filter((pendiente: Tarea) => pendiente.completed == false);
    const titulosTareasFiltradas = tareasFiltradas.map((t: Tarea) => t.title);
    console.log(titulosTareasFiltradas.slice(0, 3));

    const titulosTareas = tarea.map((t: Tarea) => t.title);
    console.log(titulosTareas.reduce((acc: string, actual: string) => actual + acc));


}).catch((e: Error) => { console.log(e) })

//el await funciona gracias a export{}
let datos = await Promise.all([obtenerTareas(1), obtenerTareas(2)]);

console.log(datos);

