const fs = require('fs/promises');
const path = require('path');
const rootResolve = require('./resolveRoot');
const createModelDir = require('./createModelDir');
const createUiDir = require('./createUiDir');
const createIndex = require('./createIndex');
const toUpperCaseFirstSymbol = require('./helpers/toUpperCaseFirstSymbol');

const createTemplate = async (layer, slice) => {
    const layerDir = rootResolve(layer);
    const sliceDir = path.resolve(layerDir, slice);
    const normalSliceName = toUpperCaseFirstSymbol(slice);

    try {
        await fs.mkdir(path.resolve(layerDir, normalSliceName));
    } catch (e) {
        console.log(e);
    }

    createModelDir(sliceDir, normalSliceName);
    createUiDir(sliceDir, layer, normalSliceName);
    createIndex(sliceDir, normalSliceName);
};

module.exports = createTemplate;