// Operadores

// Operadores Aritmeticos
let a  = 5
let b = 10
console.log(a + b) // suma
console.log(a - b) // resta
console.log(a * b) // multiplicación
console.log(a / b) // división 

console.log(a % b) // módulo / resto 
console.log(a**b) // exponente 

a++ // Incremento
console.log(a) 
b-- // Decremento
console.log(b)


// Operadores de Asignación

let myVariable = 2 // simbolo igual (=)
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable **= 2
myVariable %= 2

// Operadores de Comparacón

console.log(a>b)
console.log(a<b)

console.log(a>=b)
console.log(a<=b)

console.log(a==b)
console.log(a==6) // Igualdad por valor

console.log(a==a) // Igualdad por indentidad (Tipo y Valor)
console.log(a===6) 

console.log(a!=6) // Distinto


// Operadores Lógicos

// and (&&) 
console.log(5>10 && 15 > 20)
console.log(5<10 && 15<20)
console.log(5<10 && 15>20)


// or (||) 
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

// not (!)

console.log(!(5>10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores Ternearios

const isRaining = false
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")