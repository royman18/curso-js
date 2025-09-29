// 01 Crea una variable para cada operación aritmética

let suma = 5*25
let resta = 17-52
let multiplicacion = 45*2
let division = 25/8
let modulo = 78/36
let exponente = 41**3
// 2. Crea una variable para cada tipo de operación de asignación, que haga uso 
// de las variables utilizadas para las operaciones aritméticas

suma -= 2
resta *= 2
multiplicacion /= 2
division **= 2
modulo %= 2

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(suma > resta)
console.log(multiplicacion != division)
console.log(suma < exponente)
console.log(modulo < division)
console.log(resta <= division)
console.log()

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(suma === multiplicacion)
console.log(multiplicacion === modulo)
console.log(exponente != exponente)
console.log(division < resta)
console.log(suma <= division)
console.log()

// 5. Utiliza el operador lógico and
console.log(45 < 66 && 27<145)
console.log()
// 6, Utiliza el operador lógico or
console.log(3+2 == 2+3 || 4<8 )
console.log()

// 7. Cambia ambos operadores
console.log(3+2 == 2+3 && 4<8 )
console.log(45 < 66 || 27<145)
console.log()

// 8. Añade alguna negación
console.log(!(45 < 66 || 27<145))

// 9. Utiliza el Operador terneario

const ambre = false
ambre ? console.log("Pide Una Pizza"): console.log("Toma Agua")

// 10. Combina operadores aritmpeticos, de comparación y lógicos