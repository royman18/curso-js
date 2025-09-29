// Funciones

// Simple
function myFunc(){
  console.log("¡Hola, Función!")
}
for(let i = 0; i < 5; i++){
  myFunc()
}

// Con parametros

function myFuncWithParams(name){
  console.log(`¡Hola!, ${name}`)

}
myFuncWithParams("Rodrigo")
myFuncWithParams("Brais")

// Funciones anónimas

const myFunc2 = function(name){
  console.log(`¡Hola, ${name}!`)
}
myFunc2("Brais Roy")

// Arrow functions

const myFunc3 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("RoySan")

// Parámetros

function suma (a,b){
  console.log(a + b)
}
suma(5,10)

function defaultSum (a = 0 ,b = 0){
  console.log(a + b)
}
// Por defecto

defaultSum()
defaultSum(5)
defaultSum(5,10)
defaultSum(b=5)

// Retorno de Valores

function mult(a,b){
  return a * b
}
result = mult(5,10)
console.log(result)

// Funciones Anidadas

function extern(){
  console.log("Función Externa")
  function intern(){
    console.log("Función Interna")
  }
  intern() 
}

extern()
// inern() Error: Fuera del Scope

// Funciones de orden superior

function applyFunc(func, param){
  func(param)
}

applyFunc(myFunc3, "Funcion de orden superior")

// forEach

myArray = [1, 2, 3, 4]

myArray.forEach(function(value){
  console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet = new Set(["Brais","Moure","mouredev",37,true,"braismoure@mouredev.com"])

myMap = new Map([
  ["name","Brais"],
  ["email","braismouredev@gmail.com"],
  ["age",37]

])

mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))
