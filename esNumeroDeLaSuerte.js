function esNumeroDeLasuerte (n){ 

return (n % 2 === 0 || n % 3 === 0) && n > 0 && n !== 15

 }

 console.log (esNumeroDeLasuerte(15));