// Strings 

let myName = "Rodrigo"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[13])

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas 
console.log(greeting.toLowerCase()) // Minusculas 
console.log(greeting.indexOf("Rodrigo")) // En que índice esta la palabara excrita
console.log(greeting.includes("Hola")) // Indica si esta escrita la palabra
console.log(greeting.slice(0, 10)) // Devuelve los elementos dados en el rango
console.log(greeting.replace("Rodrigo","Santoyo")) // sustituye un elemento por otro


// Template literals (plantillas literales)

let message = `hola esto
es un mensaje
de texto`
 console.log(message)

 console.log(`Hola, ${myName} !`)

 // Interpolado

let email = "roysann18@gmail.com"

console.log(`Hola, mi nombre es: ${myName} y mi email es: ${email}`)