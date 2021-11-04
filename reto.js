function Altura(lado1, lado2, base){ 
  
   if (lado1 === lado2 && base !== lado1 && lado2) {    
       const altura = Math.sqrt(lado1**2-base**2/4)        
       alert(altura)

   } else{
       alert("este no es un triangulo isósceles")
   }
}


function calcularAltura(){
    const input1 = document.getElementById("InputLado1")
    const input2 = document.getElementById("InputLado2")
    const input3 = document.getElementById("InputBase")

    const value1 = input1.value
    const value2 = input2.value
    const value3 = input3.value
    
    const altura = Altura(value1, value2, value3)
    alert(altura)
}