const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

module.exports.getFile = async (path) => {
    try {
        return await readFileAsync(path);
    } catch (err) {
        throw err;
    }
};
