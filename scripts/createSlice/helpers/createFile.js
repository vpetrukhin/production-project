const fs = require('fs/promises');
const path = require('path');

/**
 * Создает файл
 * @param dir целевая директория
 * @param fileName имя файла
 * @param fileTemplate содержимое 
 */
const createFile = async (dir, fileName, fileTemplate) => {
    try {
        await fs.appendFile(path.resolve(dir, fileName), fileTemplate);
    } catch (e) {
        console.log('Ошибка при создании файла ' + fileName + ':' + e);
    }
};

module.exports = createFile;