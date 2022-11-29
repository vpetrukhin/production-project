/**
 * Возвращает принятую строку с большой первой буквой
 * @param {string} str 
 */
const toUpperCaseFirstSymbol = (str) => str[0].toUpperCase() + str.slice(1, str.length);

module.exports = toUpperCaseFirstSymbol;