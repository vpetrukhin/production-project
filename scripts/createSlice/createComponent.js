const fs = require('fs/promises');
const path = require('path');
const createStyleFile = require('./createStyleFile');
const createTsxFile = require('./createTsxFile');
const createStoryFile = require('./helpers/createStoryFile');

const createComponent = async (dir, layer, slice) => {
    const componentDir = path.resolve(dir, slice);

    try {
        await fs.mkdir(componentDir);
    } catch (e) {
        console.log(e);
    }

    createTsxFile(componentDir, slice);
    createStyleFile(componentDir, slice);
    createStoryFile(componentDir, layer, slice);
};

module.exports = createComponent;