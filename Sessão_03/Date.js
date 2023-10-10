const threeHours = 60 * 60 * 3 * 1000
const oneDay = 60 * 60 * 24 * 1000
const data = new Date(0 + threeHours - oneDay); //01/01/1970 Timestamp unix ou época unix
const data2 = new Date(2019, 3, 20, 15, 13, 11);
console.log(data.toString(), data2.toString());
const datat = new Date();

console.log('Ano', datat.getFullYear());
console.log('Mês', datat.getMonth()+1);
console.log('Dia', datat.getDate());
console.log('Hor', datat.getHours());
console.log('Min', datat.getMinutes());
console.log('Sec', datat.getSeconds());
console.log('Mil', datat.getMilliseconds());