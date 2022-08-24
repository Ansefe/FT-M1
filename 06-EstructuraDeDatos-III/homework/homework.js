"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(valor) {
  this.value = valor;
  this.right = null;
  this.left = null;
}
BinarySearchTree.prototype.depthFirstForEach = function(cb,metodo){
  if(metodo=="post-order"){
    //Este va de arriba hacia abajo y toca agregarlos con unshift para que quede iwal
    // if(this.right){
    //   console.log(this.right.value);
    //   if(this.left){
    //     console.log(this.left.value);
    //   }
    //   this.right.depthFirstForEach(metodo);
    //   this.left.depthFirstForEach(metodo);    
    // }
    // else if(this.left){
    //   console.log(this.left.value);
    // }

    if(this.left){
      this.left.depthFirstForEach(cb, metodo);    
      if(this.right){
        this.right.depthFirstForEach(cb,metodo);
        cb(this.left.value);
        cb(this.right.value);
      }
      else{
        cb(this.left.value)
      }
    }else if(this.right){
      cb(this.right.value);
    }
    return ;



  }else if(metodo=="pre-order"){

  }else if(metodo=="in-order"||metodo==""){

  }
}


BinarySearchTree.prototype.size = function(){
  var hijos = 1;
  if(this.left){
    hijos+=this.left.size();
  }
  if(this.right){
    hijos+=this.right.size();
  }
  return hijos;
}

BinarySearchTree.prototype.insert = function (valor) {
  if (valor < this.value) {
    if (this.left) {
      this.left.insert(valor);
    } else {
      this.left = new BinarySearchTree(valor);
    }
  } else if (valor > this.value) {
    if (this.right) {
      this.right.insert(valor);
    } else {
      this.right = new BinarySearchTree(valor);       
    }
  }    
};

BinarySearchTree.prototype.contains = function(valor){
  //por el inicio
  if(this.value == valor){
    return true;
  }
  if(this.left){
    if(this.left.contains(valor)){
      return true;
    }
  }
  if(this.right){
    if(this.right.contains(valor)){
      return true;
    }
  }
  return false;
}

// const arbol = new BinarySearchTree(10);
// console.log(arbol.insert(5));
// console.log(arbol.insert(6));
// console.log(arbol.insert(12));
// console.log(arbol.insert(11));
// console.log(arbol.insert(14));
// console.log(arbol.insert(3));
// console.log(arbol.insert(4));
// console.log(arbol);
// console.log(arbol.contador);
// console.log(arbol.size());
// console.log(arbol.contains(2));

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
