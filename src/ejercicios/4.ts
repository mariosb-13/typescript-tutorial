let lista=["Ana","Luis", "Marta"]
console.log(lista);

lista.push("Pedro","Lucia")
console.log(`Tras 2 altas -> ${lista}`);

lista.unshift("Carlos")
console.log(`Tras traslado -> ${lista}`);

lista.shift()
console.log(`Baja de Carlos -> ${lista}`);

let isMarta=lista.find((nombre:string)=>{return nombre=="Marta"})
console.log(`¿Está Marta ?-> ${isMarta=="Marta" ? true:false}`);

let isSofia=lista.find((nombre:string)=>{return nombre=="Sofia"})
console.log(`¿Está Marta ?-> ${isSofia=="Sofia" ? true:false}`);

console.log(`Posición de Lucía -> ${lista.findIndex(nombre=>nombre=="Lucia")}`)
console.log(`Posición de Sofia -> ${lista.findIndex(nombre=>nombre=="Sofia")}`)

let listaOrdenada=[...lista]
console.log(`Ordena alfabeticamente -> ${listaOrdenada.sort()}`)
console.log(`Lista original -> ${lista}`)

let listaMayuscula=lista.map((nombre:string)=>{return nombre.toUpperCase()})
console.log(`Para el acta -> ${listaMayuscula}`)

let listaMenor4=lista.filter((nombre:string)=>{return nombre.length>4})
console.log(listaMenor4);

console.log(`Listado: ${lista.join(", ")}`)
