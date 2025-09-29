// 1. Crea un array que almacene cinco animales
let misAnimales = []
misAnimales = ["caballo","vaca","toro","gallo","perro"]
console.log(misAnimales)

// 2. Añade dos más, uno al inicio y otro al final
misAnimales.push("obeja","mula")
console.log(misAnimales)

// 3. Elimina el que se encuentre en tercera posición
misAnimales.splice(2,1)
console.log(misAnimales)

// 4. Crea un set que almacene 5 libros
let misLibros = new Set()
misLibros = new Set(["el principito","metamorfosis", "la perla", "la tregua", "el alquimista"])
console.log(misLibros)
// 5. Añade dos más, uno de ellos repetido
misLibros.add("el extranjero")
misLibros.add("metamorfosis")
console.log(misLibros)

// 6. Elimina uno concreto a tu elección
misLibros.delete("la perla")
console.log(misLibros)

// 7. Crea un map que asocie el número del mes a su nombre
let meses = new Map()
meses = new Map([
  [1,"enero"],
  [2,"febrero"],
  [3,"marzo"],
  [4,"abril"],
  [5,"mayo"],
  [6,"junio"],
  [7,"julio"],
  [8,"agosto"],
  [9,"septiembre"],
  [10,"octubre"],
  [11,"noviembre"],
  [12,"diciembre"],

])
console.log(meses)
// 8. Compruebe si el map número 5 existe en el mapa e imprime su valor
console.log(meses.has(5))
console.log(meses.get(5))

// 9. Añade al mapa una clave con un array como que almacene los meses de verano
meses.set("meses de verano",["junio", "julio","agosto"])
console.log(meses)

// 10. Crea un Array, transformalo a un Set y almacenalo en un Map

let miUltimoArray = ["rodrigo","santoyo","gonzalez"]
console.log(miUltimoArray)

let miUltimoSet = new Set(miUltimoArray)
console.log(miUltimoSet)

let miUltimoMap = new Map()
miUltimoMap = new Map([
  ["el set",miUltimoSet]
])

console.log(miUltimoMap)