// Map

// Declaración

let myMap = new Map()
console.log(myMap)

// Inicialización

myMap = new Map([
  ["name","Rodrigo"],
  ["email","roysann18@gmail.com"],
  ["age",24]
])

console.log(myMap)

// Métodos y propiedades

// set

myMap.set("alias","roy")
console.log(myMap)
myMap.set("name","Rodrigo Santoyo")
console.log(myMap)

// get


console.log(myMap.get("name"))
console.log(myMap.get("apellido"))

// has

console.log(myMap.has("apellido")) // comprueba si una clave existe

// delete

myMap.delete("name")
console.log(myMap)

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())


// size

console.log(myMap.size)

// clear 
myMap.clear() // elimina todos elementos del mapa
console.log(myMap)


