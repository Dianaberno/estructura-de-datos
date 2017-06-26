function formula(base,altura){
  this.base=base;
  this.altura=altura;

}

var rectangulo=new formula(24,6);
console.log(rectangulo);
var resultado=rectangulo.base*rectangulo.altura;

document.write(resultado);
