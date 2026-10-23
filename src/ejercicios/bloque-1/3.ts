
function calificar(nota: number[]) {
    nota.forEach(n => {
        if (nota[n] < 0 || nota[n] > 10) {
            console.log("Nota inválida");
        } else {
            switch (nota[n]) {
                case 5:
                    console.log("Suficiente");
                    break;
                case 6:
                    console.log("Bien");
                    break;
                case 7:
                    console.log("Notable");
                    break;
                case 8:
                    console.log("Notable");
                    break;
                case 9:
                    console.log("Sobresaliente");
                    break;
                case 10:
                    console.log("Sobresaliente");
                    break;
                default:
                    console.log("Insuficiente");
                    break;
            }
        }
    });
}



function convocatoria(mes: string) {
    mes.toLowerCase()
    switch (mes) {
        case "marzo":
            console.log("1º Evaluación");
            break;
        case "junio":
            console.log("Ordinaria");
            break;
        case "septiembre":
            console.log("Extraordinaria");
            break;
        default:
            console.log("No existe convocatoria");
            break;
    }
}
let notas: number[] = [10, 8.5, 6.2, 5, 3.4, 11];

calificar(notas);