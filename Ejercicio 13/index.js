const meses=[ 'enero' ,'febrero', 'marzo', 'abril', 'mayo' ,'junio', 'julio' ,'agosto' ,'septiembre', 'octubre', 'noviembre', 'diciembre']

const longmes= meses.filter( day=> day.length>7)
const minus = longmes.map(eachTopic =>eachTopic.toUpperCase());
var num = minus.length;
console.log('los '+ num + ' meses con más de 7 letras son: '+ minus);
