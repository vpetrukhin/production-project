const createFile = require('./helpers/createFile');

const createIndex = (dir, slice) => {
    const indexTemplate = 
    `
export { ${slice}Schema } from './types/${slice}Schema';
export { ${slice}} from './ui/${slice}/${slice}';
    `;

    createFile(dir, 'index.ts', indexTemplate);
};

module.exports = createIndex;