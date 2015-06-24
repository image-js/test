'use strict';

var path = require('path');

exports.getImage = function getImage(name) {
    return path.resolve(__dirname, 'img', name);
};
