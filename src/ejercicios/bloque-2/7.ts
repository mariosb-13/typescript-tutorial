function notaFinal(practica: number, examen: number, pesoExamen?: number): number {
    if (pesoExamen) {
        return practica * (1 - pesoExamen) + examen * pesoExamen
    } else {
        return practica * (1 - 0.6) + examen * 0.6
    }
}

function actaAlumno(nombre: string, nota: number, observaciones?: string): void {
    if (observaciones) {
        return console.log(`${nombre} (${nota}, "${observaciones}")`);
    } else {
        return console.log(`${nombre} (${nota})`);
    }
}

function mediaDe(...notas: number[]): number {
    if (notas.length == 0) {
        return 0
    } else {
        let suma: number = 0;
        for (let index = 0; index < notas.length; index++) {
            const element = notas[index];
            suma += element;
        }

        return suma
    }
}

function buscarAlumno(identificador: number | string): string {
  if (typeof identificador === "number") {
    return `Buscando por expediente nº ${identificador.toFixed(0)}`;
  }
  return `Buscando por nombre "${identificador.toUpperCase()}"`;
}


console.log(notaFinal(8, 5))
console.log(notaFinal(8, 5, 0.2))

console.log(buscarAlumno(1024));
console.log(buscarAlumno("ana"));

const estaAprobado = (nota: number): boolean => nota >= 5;
console.log(`¿5 aprueba? -> ${estaAprobado(5)} | ¿4.9? -> ${estaAprobado(4.9)}`);