let nota1: number | null = 7
let nota2: number | null = null

type Alumno = {
    contacto?: string,
    telefono?: number
}

let ana: Alumno = {
    contacto: "ana@mail.com",
    telefono: 6789874353
}

let luis: Alumno = {
    telefono: 636678654
}

console.log(`Examen: ${nota1 ?? "Sin corregir"}`);
console.log(`Examen: ${nota2 ?? "Sin corregir"}`);

console.log(`Email de ana ${ana.contacto ?? "No consta"}`)
console.log(`Email de luis ${luis.contacto ?? "No consta"}`)

console.log(`Teléfono de ana ${ana.telefono ?? "No consta"}`)
console.log(`Teléfono de luis ${luis.telefono ?? "No consta"}`)