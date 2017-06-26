var array2=[7,21,44,80,77];
var divisor =7;
 var respuesta= " ";
array2.forEach(function multiplo(element) {
    if(element%divisor==0){
      respuesta +=element+" ";
      }

});
document.write(respuesta);
