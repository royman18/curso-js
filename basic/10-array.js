// Array 

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray);
console.log(myArray2);

myArray = [1,2,3,4]
console.log(myArray);
myArray2 = new Array(1,2,3,4)
console.log(myArray2);

myArray = ["rodrigo","santoyo","roy", 24, true]
console.log(myArray);
myArray2 = new Array("rodrigo","santoyo","roy", 24, true)
console.log(myArray2);

myArray2 = new Array(3)
myArray2[0]= "Rodrigo"
myArray2[1]= "roy"
myArray2[2]= "santoyo"

console.log(myArray2);

myArray = []
myArray[0]= "Rodrigo"
//myArray[1]= "roy"
myArray[2]= "santoyo"

console.log(myArray);

// Métodos Comunes
myArray = []

// push y pop

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)
console.log(myArray)

console.log(myArray.pop()) // Elimina el ultimo y lo devuelve
myArray.pop()

console.log(myArray)

//Shift y unshift

myArray.shift() // Elimina el primer elemento del Array
console.log(myArray)

myArray.unshift("Rodrigo", "mouredev") // Agrega elementos al inicio del Array
console.log(myArray)

// Length

console.log(myArray.length)

// Clear
// myArray.clear() No funciona

myArray = []
myArray.length=0 // Alternativa para borrar todo el Array
console.log(myArray)

// Slice
myArray = ["Rodrigo", "Mouredev", "Brais", 24, true]


let myNewArray = myArray.slice(1,3)
console.log(myArray)
console.log(myNewArray)

// Splice
myArray.splice(1,2,3)
console.log(myArray)
