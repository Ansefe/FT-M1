function hacerSaludo( lenguaje ){
    return function(){
      if ( lenguaje === 'en'){
        console.log('Hi!');
      }
  
      if ( lenguaje === 'es'){
        console.log('Hola!');
      }
    }
}
  
var saludoIngles = hacerSaludo('en');
var saludoEspaniol = hacerSaludo('es');

