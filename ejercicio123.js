function caracter(nombre,dia,mes,andeNac,anioActual){
  this.nombre=nombre;
   this.dia=dia;
   this.mes=mes;
   this.andeNac=andeNac;
  this.anioActual=anioActual;
}
var resultado=new caracter("Su",23,8,1991,2017);
var edad=resultado.anioActual-resultado.andeNac;
var res="La edad actual de " +resultado.nombre +" es "+  edad;

document.write(res);
