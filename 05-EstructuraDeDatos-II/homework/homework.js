"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  this.size = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (valor) {
  if (this.head == null) {
    this.head = new Node(valor);
  } else {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = new Node(valor);
  }
  this.size++;
};

LinkedList.prototype.remove = function () {
  let current = this.head;
  let imprimir = null;

  if (this.size == 1) {
    imprimir = this.head.value;
    this.head = null;
    this.size--;
    return imprimir;
  } else if (this.size == 0) {
    return null;
  } else {
    for (var i = 0; i < this.size - 2; i++) {
      current = current.next;
    }
    imprimir = current.next.value;
    current.next = null;
    this.size--;
    return imprimir;
  }
};

LinkedList.prototype.search = function (valor) {
  let current = this.head;
  var i = 0;
  while (i < this.size) {
    if (valor instanceof Function) {
      if (valor(current.value)) return current.value;
    } else if (current.value == valor) return current.value;
    current = current.next;
    i++;
  }
  return null;
};

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.bucket = new Array(35);
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(string){
  var thash = 35;
  var sum = 0 ;
  for (let letter of string){
    var code = letter.charCodeAt();
    sum+= code;
  }
  return sum%thash;
}

HashTable.prototype.set = function(key, value){
  var hash = this.hash(key);
  if (this.bucket[hash]){
    for(var i=0;i<this.bucket[hash].length;i++){
      if(this.bucket[hash][i][0]==key){
        this.bucket[hash][i][1]=value;
        return;
      }
    }
    this.bucket[hash].push([key, value]); 
  }     
  else{
    console.log(this.bucket[hash]);
    this.bucket[hash]=[];
    this.bucket[hash].push([key, value]);
    }  
}

HashTable.prototype.get = function(key){
  var hash = this.hash(key);
  if (this.bucket[hash]){
    for(var i of this.bucket[hash]){
      if(i[0]==key){
        return i[1];
      }
    }
  }
  else {
    return 'Nada'}
}

HashTable.prototype.hasKey = function(key){
  var hash = this.hash(key);
  if (this.bucket[hash]){
    for(var i of this.bucket[hash]){
      if(i[0]==key){
        return true;
      }
    }
  }
  return false;
}


// const ht = new HashTable();
// ht.set('nombre','pepe');
// ht.set('eombrn','pepe2');
// ht.set('eombnr','pepe3');
// console.log(ht.get('eombrn'));
// console.log(ht.bucket);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
