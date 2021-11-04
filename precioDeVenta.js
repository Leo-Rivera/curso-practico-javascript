function calcularPrecioDeVenta(){
const  costoDeVenta = document.getElementById("ingresoCv")
const  priceValue = costoDeVenta.value

const rentabilidad = document.getElementById("rentabilidad")
const profit = rentabilidad.value

const precioDeVenta = priceValue/(1-(profit/100))
alert (precioDeVenta)
return precioDeVenta

}