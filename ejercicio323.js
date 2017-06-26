function diversion(nombre,edad,pasatiempo){
  this.nombre=nombre;
  this.edad=edad;
  this.pasatiempo=pasatiempo;
}
var yomisma=new diversion("Heydi",28,"bailar");
var resultado = " Hola soy "+yomisma.nombre+" tengo "+yomisma.edad+" años y me gusta "+yomisma.pasatiempo;
document.write(resultado);
