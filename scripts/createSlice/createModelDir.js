const fs = require('fs/promises');
const path = require('path');
const createSliceFile = require('./createSliceFile');
const createTypesFile = require('./createTypesFile');

const createModelDir = async (sliceDir, slice) => {
    const modelDirPath = path.resolve(sliceDir, 'model');
    const slicesDirPath = path.resolve(modelDirPath, 'slices');
    const typesPath = path.resolve(modelDirPath, 'types');

    try {
        await fs.mkdir(modelDirPath);
        await fs.mkdir(path.resolve(modelDirPath, 'selectors'));
        await fs.mkdir(slicesDirPath);
        await fs.mkdir(typesPath);
    } catch (e) {
        console.log(e);
    }

    createSliceFile(slicesDirPath, slice);
    createTypesFile(typesPath, slice);
};

module.exports = createModelDir;