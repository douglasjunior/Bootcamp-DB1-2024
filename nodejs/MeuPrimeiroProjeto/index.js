const dateFormat = require('./utils/dateFormat');

const dataAtual = new Date();

const dataFormatada = dateFormat(dataAtual);

console.log(dataFormatada);
