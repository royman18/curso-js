// If / else / else if / ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let miNombre = "Rodrigo"

if(miNombre == "Rodrigo"){
    console.log("El nombre es Rodrigo")
}else{
    console.log("No es igual al nombre Rodrigo")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let usuario ="royroy3r"
let contraseña = "sagr18050150030"

if (usuario == "royroy3r" && contraseña == "sagr18050150030"){
    console.log("Usuario y Contraseña son correctos")
}else{
    console.log("El Usuario o la Contraseña son incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -1
if(numero > 0){
    console.log("El número es positivo")
}else if(numero == 0){
    console.log("El número es 0")
}else if (numero < 0){
    console.log("El número es negativo")
}else{
    ("No es un número valido")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edadPersona = 18
let añosFaltantes = 18 - edadPersona
if(edadPersona >= 18){
    console.log("El ciudadano puede Votar")
}else if(edadPersona < 18){
    console.log(`El ciudadano aun no puede Votar, le faltan ${añosFaltantes} años.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable 
// dependiendo de la edad

const mayoriaEdad = edadPersona >= 18 ? "Adulto" : "Menor"
console.log(mayoriaEdad)

// Switch

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"


let mes = "febrero"
let estacion
switch(mes){
    case "enero":
    estacion = "Invierno"
    break
    case "febrero":
    estacion = "Invierno"
    break
    case "marzo":
    estacion = "Primavera"
    break
    case "abril":
    estacion = "Primavera"
    break
    case "mayo":
    estacion = "Primavera"
    break
    case "junio":
    estacion = "Verano"
    break
    case "julio":
    estacion = "Verano"
    break
    case "agosto":
    estacion = "Verano"
    break
    case "septiembre":
    estacion = "Otoño"
    break
    case "octubre":
    estacion = "Otoño"
    break
    case "noviembre":
    estacion = "Otoño"
    break
    case "diciembre":
    estacion = "Invierno"
    break
    default:
    estacion = "Estación invalida"
}
console.log(estacion)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let dias
switch(mes){
    case "enero":
    dias = "31 días"
    break
    case "febrero":
    dias = "28 días"
    break
    case "marzo":
    dias = "31 días"
    break
    case "abril":
    dias = "30 días"
    break
    case "mayo":
    dias = "31 días"
    break
    case "junio":
    dias = "30 días"
    break
    case "julio":
    dias = "31 días"
    break
    case "agosto":
    dias = "31 días"
    break
    case "septiembre":
    dias = "30 días"
    break
    case "octubre":
    dias = "31 días"
    break
    case "noviembre":
    dias = "30 días"
    break
    case "diciembre":
    dias = "31 días"
    break
    default:
    dias = "Invalido"
}
console.log(dias)

// 8. Usa un Swhitch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Chino"
let saludo
switch(idioma){
    case "Español":
    saludo = "Hola"
    break
    case "Ingles":
    saludo = "Hello"
    break
    case "Intaliano":
    saludo = "Hello"
    break
    case "Chino":
    saludo = "您好 - (nín hǎo)"
    break
    case "Frances":
    saludo = "Bonjour"
    break
    case "Italiano":
    saludo = "Salve"
    break
    default:
    saludo = "Digite un idioma valido"
}
console.log(saludo)