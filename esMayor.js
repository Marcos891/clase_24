function esMayor (a,b) { 

if(typeof a !== "number" || typeof b !== "number") {

    return "Todos los valores tiene que ser number"
  }  if ( a === b){
      return "los numeros son iguales"
  } if (a > b){
      return a
  } else {
      return b
  }

}
console.log(esMayor("5",6));