'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var i = 1;
  const arr = [];
  while(i>0){
    if(num%i==0){
      arr.push(i);
      num = num/i;
      i = 1;
    }
    if(num==1){
      i=0;
    }else{
      i++;
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var aux = null;
  for(var i=0; i<array.length; i++){
    if(array[i]>array[i+1]){
      aux = array[i];
      array[i] = array[i+1];
      array[i+1] = aux;
    }
  }
  if(aux){
    bubbleSort(array);
  }
  return(array);
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i = 1; i<array.length;i++){
    var aux = 0;
    for(var j = i-1; j >= 0; j--){
      if(array[i]<array[j]){
        aux = array[j];
        array[j] = array[i];
        array[i] = aux;
        i--;
      }      
    }
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  const pos = 1;
  for(var j=0; j<array.length;j++){
    var aux = array[j];
    var aux2 = 0;
    var minIdx = 0;
    for(var i = j+1;i<array.length;i++){
      if(array[i]<aux){
        aux = array[i];
        minIdx = i;
      }
    }
    for(var k=minIdx-1; k>=0; k--){
      if(array[minIdx]<array[k]){
        aux2 = array[k];
        array[k] = array[minIdx];
        array[minIdx] = aux2;
        minIdx--;
      }
    }
  }
  return array;
}

console.log(selectionSort([5,2,3,1,0,4]));
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
