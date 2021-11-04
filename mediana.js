function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )

   const promedioLista = sumaLista / lista.length
   return promedioLista
}

function media(lista1){
    
const listaOrdenada =lista1.sort(comparacion)

function comparacion(a,b){
    return a-b
}

const mitadLista1 = parseInt( listaOrdenada.length / 2 )

let mediana

if(esPar(listaOrdenada.length) ){
    const elemento1 = listaOrdenada[mitadLista1 - 1]
    const elemento2 = listaOrdenada[mitadLista1]

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ])    
    mediana = promedioElemento1y2
    return mediana  
    
    }else{
    mediana = listaOrdenada[mitadLista1]
    return mediana
    }  
}

function esPar(numerito) {
    if(numerito % 2 === 0 ) {
        return true
    }else{
        return false
    }
}






 

   

    




