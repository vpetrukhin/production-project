const createFile = require('./helpers/createFile');

const createTypesFile = (dir, sliceName) => {
    const typeFileTemplate = `export interface ${sliceName}Schema {}`;

    createFile(dir, `${sliceName}Schema.ts`, typeFileTemplate);
};

module.exports = createTypesFile;