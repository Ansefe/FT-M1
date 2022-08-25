'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<=1)return array;
  var pivot = [array[0]];
  var der = [];
  var izq = [];
  for(var i = 0; i<array.length; i++){
    if(array[i]>pivot[0]) der.push(array[i]);
    if(array[i]<pivot[0]) izq.push(array[i]);
  }
  return quickSort(izq).concat(pivot).concat(quickSort(der));
}
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
