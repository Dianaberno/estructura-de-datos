var num=9;
var array=[4,4,5,12];
array.push(num);
array.reduce(function reduce(valoranterior,valoractual,indice,vector){
  return valoranterior*valoractual;
});
