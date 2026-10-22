/**
 * 11 - CLASES Y PROGRAMACIÓN ORIENTADA A OBJETOS
 *
 * Ejecutar:  npm run play -- src/11-clases/demo.ts
 */

// ---------- Declaración e instanciación ----------
class Coche {
  constructor(public modelo: string, public marca: string, private kilometros: number, protected color?: string) { }

  conducir(){
    this.kilometros++
  }

  describir(): string {
    return `${this.marca} ${this.modelo}`;
  }

  
  public get getMarca() : string {
    return this.marca
  }
  
  
  public set setMarca(v : string) {
    this.marca = v;
  }
  
}
let c1 = new Coche("Toledo", "Seat", 220000,"Rojo")
c1.modelo
c1.describir()
c1.getMarca

// ---------- Atajo del constructor (parameter properties) ----------
// Declara y asigna la propiedad en un solo paso. Es lo que verás en los
// servicios de Angular:  constructor(private http: HttpClient) {}
class Moto {
  constructor(
    public marca: string,
    public cilindrada: number,
    private readonly bastidor: string = "VF1-000",
  ) { }

  ficha(): string {
    return `${this.marca} ${this.cilindrada}cc (bastidor ${this.bastidor})`;
  }
}
console.log("parameter properties ->", new Moto("Honda", 125).ficha());

// ---------- Modificadores de acceso ----------
class CuentaBancaria {
  public titular: string; // accesible desde cualquier sitio (por defecto)
  protected saldo: number; // accesible en la clase y en sus hijas
  private pin: string; // accesible SOLO dentro de esta clase

  constructor(titular: string, saldoInicial: number, pin: string) {
    this.titular = titular;
    this.saldo = saldoInicial;
    this.pin = pin;
  }

  ingresar(cantidad: number): void {
    if (cantidad <= 0) throw new Error("La cantidad debe ser positiva");
    this.saldo += cantidad;
  }

  consultar(pin: string): number {
    return this.validar(pin) ? this.saldo : -1;
  }

  private validar(pin: string): boolean {
    return this.pin === pin;
  }
}

const cuenta = new CuentaBancaria("Ana", 1000, "1234");
cuenta.ingresar(500);
console.log("saldo con pin correcto ->", cuenta.consultar("1234"));
console.log("saldo con pin erróneo  ->", cuenta.consultar("0000"));
// cuenta.saldo;        // Error: 'saldo' is protected.
// cuenta.validar("x"); // Error: 'validar' is private.

// ---------- Getters y setters ----------
class Temperatura {
  private _celsius = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(valor: number) {
    if (valor < -273.15) throw new Error("Por debajo del cero absoluto");
    this._celsius = valor;
  }

  get fahrenheit(): number {
    return this._celsius * 1.8 + 32;
  }
}

const t = new Temperatura();
t.celsius = 25; // llama al setter, sin paréntesis
console.log(`${t.celsius}ºC son ${t.fahrenheit}ºF`); // llama a los getters

// ---------- Miembros estáticos ----------
class Matematicas {
  static readonly PI = 3.1416;

  static areaCirculo(radio: number): number {
    return Matematicas.PI * radio ** 2;
  }
}
console.log("static ->", Matematicas.areaCirculo(2)); // sin `new`

// ---------- Herencia ----------
class Vehiculo {
  constructor(public marca: string) { }

  arrancar(): string {
    return `${this.marca} arrancando`;
  }
}

class Electrico extends Vehiculo {
  constructor(
    marca: string,
    public autonomia: number,
  ) {
    super(marca); // obligatorio antes de usar `this`
  }

  // "noImplicitOverride" (activo aquí y en Angular) exige la palabra `override`
  override arrancar(): string {
    return `${super.arrancar()} en silencio (${this.autonomia} km)`;
  }
}
console.log("herencia ->", new Electrico("Tesla", 500).arrancar());

// ---------- Implementar interfaces ----------
interface Imprimible {
  imprimir(): void;
}

interface Serializable {
  aJson(): string;
}

class Factura implements Imprimible, Serializable {
  constructor(
    private numero: string,
    private importe: number,
  ) { }

  imprimir(): void {
    console.log(`Factura ${this.numero}: ${this.importe} €`);
  }

  aJson(): string {
    return JSON.stringify({ numero: this.numero, importe: this.importe });
  }
}

const factura = new Factura("F-2025-001", 121);
factura.imprimir();
console.log("aJson ->", factura.aJson());

// ---------- Clases abstractas ----------
// No se pueden instanciar: sirven de plantilla para sus hijas.
abstract class Figura {
  constructor(public nombre: string) { }

  abstract area(): number; // sin cuerpo: la hija está OBLIGADA a implementarlo

  describir(): string {
    // método concreto: se hereda tal cual
    return `${this.nombre} tiene un área de ${this.area().toFixed(2)}`;
  }
}

class Circulo extends Figura {
  constructor(private radio: number) {
    super("Círculo");
  }
  override area(): number {
    return Math.PI * this.radio ** 2;
  }
}

class Rectangulo extends Figura {
  constructor(
    private base: number,
    private altura: number,
  ) {
    super("Rectángulo");
  }
  override area(): number {
    return this.base * this.altura;
  }
}

// new Figura("x");   // Error: Cannot create an instance of an abstract class.

// ---------- Polimorfismo ----------
// Tratamos objetos distintos a través del mismo tipo base.
const figuras: Figura[] = [new Circulo(3), new Rectangulo(4, 5)];
figuras.forEach((f) => console.log("polimorfismo ->", f.describir()));

export { };
