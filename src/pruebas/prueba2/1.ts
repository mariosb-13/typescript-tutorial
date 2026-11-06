/**
 * Interfaz Facturable
 */
interface Facturable {
    calcularImporte(): number;
    ficha(): string
}

/**
 * Clase Abstracta Reparacion que implementa la interfaz Facturable
 */
abstract class Reparacion implements Facturable {

    constructor(
        public readonly id: number,
        public cliente: string,
        public modelo: string,
        public estado: EstadoReparacion
    ) { }

    cambiarEstado(nuevoEstado: EstadoReparacion): void {
        this.estado = nuevoEstado;
        console.log(`Estado cambiado a ${this.estado}`)
    }

    abstract calcularImporte(): number;

    ficha(): string {
        return `#${this.id} ${this.cliente} - ${this.modelo} - ${this.calcularImporte()} - ${this.estado} `
    }
}

type EstadoReparacion = "Recibida" | "En reparacion" | "Terminada" | "Entregada"; // union de literales

/**
 * ReparacionPantalla que hereda de la clase padre Reparacion
 */
class ReparacionPantalla extends Reparacion {

    constructor(
        id: number,
        cliente: string,
        modelo: string,
        estado: EstadoReparacion,
        private precioPieza: number,
        private urgente: boolean,
    ) {
        super(id, cliente, modelo, estado);
    }

    calcularImporte(): number {
        return 1
    }

    override ficha(): string {
        if (this.urgente) {
            return super.ficha() + " - URGENTE"
        } else {
            return super.ficha()
        }
    }
}


class GestionTaller {
    private static reparaciones: Reparacion[]
    private static ultimodId: number = 0

    static registrar(cliente: string, modelo: string, precioPieza: number, urgente: boolean) {
        //incrementamos el id
        this.ultimodId++;

        //Creamos nueva reapacion de pantalla con los parametros
        let nuevaReparacion = new ReparacionPantalla(this.ultimodId, cliente, modelo, "Recibida", precioPieza, urgente)
        
        //Añadimos al array
        GestionTaller.reparaciones.push(nuevaReparacion)
    }

    static listar(): Reparacion[] {
        let reparacionesCopia = [...GestionTaller.reparaciones]
        return reparacionesCopia
    }

    static buscar(id: number): Reparacion | undefined {
        let flag: boolean = false;
        let indexEncontrado: number = 0;
        for (let index = 0; index < GestionTaller.reparaciones.length; index++) {
            const element = GestionTaller.reparaciones[index];
            if (element.id == id) {
                flag = true
                indexEncontrado = index
                break
            } else {
                flag = false
            }
        }

        if (flag) {
            return GestionTaller.reparaciones[indexEncontrado];
        } else {
            return undefined;
        }
    }

    static cambiarEstado(id: number, nuevoEstado: EstadoReparacion): boolean {
        let flag: boolean = false;
        for (let index = 0; index < GestionTaller.reparaciones.length; index++) {
            const element = GestionTaller.reparaciones[index];
            if (element.id == id) {
                element.estado = nuevoEstado
                flag = true
                break
            } else {
                flag = false
            }
        }

        if (flag) {
            return true;
        } else {
            return false;
        }
    }

    static porEstado(estadoPar: EstadoReparacion): Reparacion[] {
        return GestionTaller.reparaciones.filter((Reparacion) => Reparacion.estado == estadoPar);
    }

    static totalFacturado() {
        //Vemos las reparaciones que estan entregadas
        let reparacionesEntregadas=GestionTaller.reparaciones.filter((Reparacion) => Reparacion.estado == "Entregada");
        let dineroTotal:number=0;
        
        for (let index = 0; index < reparacionesEntregadas.length; index++) {
            const element = reparacionesEntregadas[index];
            
            dineroTotal+=element.calcularImporte()
        }
        return dineroTotal;

    }
}

GestionTaller.registrar("Ana", "Iphone 13", 95, false)
GestionTaller.registrar("Luis", "Galaxy S22", 120, true)
GestionTaller.registrar("Marta", "Pixel 7", 80, false)

console.log(GestionTaller.listar())

console.log(`Cambiar #1 a Entregada -> ${GestionTaller.cambiarEstado(1,"Entregada")}`)
console.log(`Cambiar #2 a En reparacion -> ${GestionTaller.cambiarEstado(1,"En reparacion")}`)
console.log(`Cambiar #9 a terminada -> ${GestionTaller.cambiarEstado(9,"Terminada")}`)

//GestionTaller.cambiarEstado(2,"Perdida");
//Argument of type '"Perdida"' is not assignable to parameter of type 'EstadoReparacion'.ts(2345)

console.log(`En reparación: ${GestionTaller.porEstado("En reparacion").length}`)
console.log(`Terminadas: ${GestionTaller.porEstado("Terminada").length}`)
console.log(`Total facturado: ${GestionTaller.totalFacturado()}`)

console.log(`Buscar #3 -> ${GestionTaller.buscar(3)}`)
console.log(`Buscar #7 -> ${GestionTaller.buscar(7)}`)