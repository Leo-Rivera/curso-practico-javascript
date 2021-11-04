// Codigo del cuadrado
console.group("Cuadrado")
// const ladoCuadrado = 5 
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado) {
    return lado * 4
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")

function areaCuadrado(lado){
    return lado * lado
}

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2")

console.groupEnd()

// Codigo del triangulo
// console.group("Triangulos")

// const ladoTriangulo1 = 6
// const ladoTriangulo2 = 6
// const baseTriangulo = 4

// console.log(
//     "los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     +"cm, " 
//     + baseTriangulo 
//     +"cm" 
// )


// const alturaTriangulo = 5.5
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

function areaTriangulo(base, altura){
    return (base * altura) / 2
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2")

console.groupEnd()

// codigo del circulo
console.group("Circulos")

// // Radio 
// const radioCirculo = 4
// console.log("El radio del circulo es: " + radioCirculo + "cm")

// Diametro
function diametroCirculo(radio){
    return radio * 2
}
// const diametroCirculo = radioCirculo * 2
// console.log("El diametro del circulo es: " + diametroCirculo + "cm")

// PI
const PI = Math.PI
console.log("PI es: " + PI)

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI 

}
// const perimetroCirculo = diametroCirculo * PI
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm")

//Area
function areaCirculo(radio){
    return (radio * radio) * PI

}
// const areaCirculo = (radioCirculo * radioCirculo) * PI
// console.log("El area del circulo es: " + areaCirculo + "cm^2")

console.groupEnd()

// Aqui interactuamos con el HTML

function calcularPerimetrocuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    
    const perimetro = perimetroCuadrado(value)    
    alert(perimetro)
}

function calcularAreacuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    
    const area = areaCuadrado(value)
    alert(area)
}

//funciones trangulo 
function calcularPerimetrotriangulo() {
    const input1 = document.getElementById("InputLado1")
    const input2 = document.getElementById("InputLado2")
    const input3 = document.getElementById("InputBase")

    const value1 = Number(input1.value)
    const value2 = Number(input2.value)
    const value3 = Number(input3.value) 

    const perimetro = perimetroTriangulo(value1,value2,value3)    
    alert(perimetro)
}

function calcularAreatriangulo() {
    const input1 = document.getElementById("InputBase1")
    const input2 = document.getElementById("InputAltura")

    const value1 = input1.value
    const value2 = input2.value
    
    const area = areaTriangulo(value1, value2)    
    alert(area)
}

// funciones circulo
function calcularDiametrocirculo(){
    const input = document.getElementById("InputRadio")   
    const value = Number(input.value)   

    const  diametro = diametroCirculo(value)        
    alert(diametro)
}



function calcularPerimetrocirculo() {
    const input = document.getElementById("InputRadio")   
    const value1 = input.value    

    const perimetro = perimetroCirculo(value1)    
    alert(perimetro)
}

function calcularAreacirculo() {
    const input = document.getElementById("InputRadio")    
    const value2 = input.value   
    
    const area = areaCirculo(value2)    
    alert(area)
}







