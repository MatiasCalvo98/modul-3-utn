//ejercicio 1

function tipoTransporte(distancia) {
    let medioTransporte

    switch (true) {
        case(distancia >= 0 && distancia <= 1000):
            medioTransporte = "A Pie"
            break;
        case(distancia > 1000 && distancia <= 10000):
            medioTransporte = "En Bicicleta"
            break;
        case(distancia > 10000 && distancia <= 30000):
            medioTransporte = "En Colectivo"
            break;
        case(distancia > 30000 && distancia <= 100000):
            medioTransporte = "En Auto"
            break;
        case(distancia > 100000):
            medioTransporte = "En Avión"
            break;
        default:
            medioTransporte = "Es una distancia invalida"
    }

    return medioTransporte
}

let distancia = parseFloat(prompt("Cuanta distancia querés recorrer (en metros)?"))
let resultado = tipoTransporte(distancia)
alert(`Para tu distancia, el mejor medio de transporte es: ${resultado}`)

//ejercicio 2
function encontrarMayor(array) {
    let mayor = array[0]
    for (let i = 1; i < array.length; i++) {
        if(array[i] > mayor) {
            mayor = array[i]
        }
    }
    return mayor
}

let numeros = [4,5,87,234,734,6,3,8,56]
console.log(encontrarMayor(numeros))
