// (condicao) ? 'Valor caso verdadeiro': 'Valor caso falso'
const userPoints = 999;
const userLevel = userPoints >= 1000 ? 'User Premium' : 'User Default';

const colorUser = null;
const colorDefault = colorUser || 'Black'

console.log(userLevel, colorDefault);