const fs = require('fs/promises');
const path = require('path');
const createComponent = require('./createComponent');

const createUiDir = async (sliceDir, layer, sliceName) => {
    const uiDirPath = path.resolve(sliceDir, 'ui');

    try {
        await fs.mkdir(uiDirPath);
    } catch (e) {
        console.log(e);
    }

    createComponent(uiDirPath, layer, sliceName);
};

module.exports = createUiDir;