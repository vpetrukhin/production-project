const createTemplate = require('./createTemplate');

const layers = ['pages', 'feutures', 'entity'];

const layer = process.argv[2];
const slice = process.argv[3];

if (!layer || !slice) throw new Error('Введите слой и название слайса');
if (!layer) throw new Error('Необходимо ввести слой');
if (!slice) throw new Error('Необходимо ввести название слайса');
if (!layers.includes(layer)) throw new Error('Укажите корректный слой: ' + layers.join(', '));

createTemplate(layer, slice);

// console.log(process.argv);