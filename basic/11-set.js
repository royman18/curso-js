// Set

//Declaración

let mySet = new Set()

mySet = new Set(["rodrigo","santoyo","roy", 24, true, "roysann18@gmail.com"])
console.log(mySet)

// Métodos Comunes

// add y delete

mySet.add("https://roydev.com") // Añade un valor al set
console.log(mySet)

mySet.delete("https://roydev.com") // elimina un valor en especifico del set
console.log(mySet)


console.log(mySet.delete("rodrigo"))
console.log(mySet)

console.log(mySet.delete("12"))
console.log(mySet)

// has


console.log(mySet.has("santoyo"))

// size

console.log(mySet.size)

// Convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a un set

mySet = new Set(myArray)
console.log(mySet)

// Los SET no admiten valores duplicados

mySet.add("roysann18@gmail.com")
mySet.add("roysann18@gmail.com")
mySet.add("roysann18@gmail.com")
mySet.add("roysann18@gmail.com")

console.log(mySet)
