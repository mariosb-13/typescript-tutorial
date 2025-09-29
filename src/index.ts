let x;
x="Mario";
if(true){
    x="Luigi";
}
console.log(x);


var y;

//ARRAYS

let numeros: number[] = [3,5,8,11]
let numeros2: number[] = [13,15,18,21]

let mixto: (number|string)[]=[13, "Mario", 1, "David"];

let array2d:number[][]=[[1,2,3],[4,5,6],[7,8,9]];

console.log(`La posición 0 del array numeros es: ${numeros[0]}`);
console.log(`La posición 0 del array array2d es: ${array2d[0]!=undefined ? array2d[0][0]:0}`);

//Factor de Propagación
let numeros3 = [...numeros,...numeros2];

console.log(numeros3);
numeros3[0]=0;
console.log(numeros3);
console.log(numeros);