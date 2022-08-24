'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var longitud = num.length - 1;
  var suma = 0;
  for (var i of num){
    suma += i * Math.pow(2, longitud--);
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binary=[];
  while(num!=0){
    binary.unshift(num%2)
    num = Math.floor(num/2);          
  }
  return binary.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
