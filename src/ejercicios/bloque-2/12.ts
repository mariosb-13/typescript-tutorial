class Expediente {
    private static creados = 0;

    constructor(
        public readonly numero: number,
        public nombre: string,
        private notas: number[] = [],
    ) { }

    static registrar(nombre: string): Expediente {
        this.creados++;
        return new Expediente(1000 + this.creados, nombre);
    }

    static get total(): number {
        return this.creados;
    }

    anadirNota(nota: number): void {
        if (nota < 0 || nota > 10) {
            throw new Error(`Nota fuera de rango: ${nota}`);
        }
        this.notas.push(nota);
    }

    get media(): number {
        return this.notas.length === 0
            ? 0
            : this.notas.reduce((suma, nota) => suma + nota, 0) / this.notas.length;
    }

    get calificacion(): string {
        const media = this.media;
        if (media >= 9) return "Sobresaliente";
        if (media >= 7) return "Notable";
        if (media >= 5) return "Suficiente";
        return "Insuficiente";
    }

    get historial(): number[] {
        return [...this.notas];
    }
}

const ana = Expediente.registrar("Ana Serrano");
ana.anadirNota(8);
ana.anadirNota(9.5);
ana.anadirNota(7);

console.log(`Expediente ${ana.numero} — ${ana.nombre}`);
console.log(`Notas: ${ana.historial.join(", ")}`);
console.log(`Media: ${ana.media.toFixed(2)} (${ana.calificacion})`);

const luis = Expediente.registrar("Luis Gil");
luis.anadirNota(4);
console.log(`Expediente ${luis.numero} — ${luis.nombre}: ${luis.calificacion}`);
console.log(`Expedientes creados: ${Expediente.total}`);

try {
    ana.anadirNota(15);
} catch (error) {
    if (error instanceof Error) {
        console.log(`Rechazado  -> ${error.message}`);
    } else {
        throw error;
    }
}

const copia = ana.historial;
copia.push(10);
console.log(`Historial real tras tocar la copia: ${ana.historial.length} notas`);

export {};