function puedoIrAlBanco(dia, hora)
{ 
  return (dia !== "sabado" && dia !== "domingo" && hora >=10 && hora <= 15)

}






console.log(puedoIrAlBanco("lunes",9)); // true
console.log(puedoIrAlBanco("miercoles",16)); // false
console.log(puedoIrAlBanco("martes",15)); // true
console.log(puedoIrAlBanco("domingo",11)); // false