const createFile = require('./helpers/createFile');

const createStyleFile = (dir, slice) => {
    const styleFileTemplate = `//.${slice} {}`;

    createFile(dir, `${slice}.module.scss`, styleFileTemplate);
};

module.exports = createStyleFile;