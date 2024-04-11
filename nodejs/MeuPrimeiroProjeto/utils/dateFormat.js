const dateFns = require('date-fns');

function dateFormat(currentDate) {
  return dateFns.format(currentDate, 'dd/MM/yyyy HH:mm:ss');
}

module.exports = dateFormat;
