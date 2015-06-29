'use strict';

var path = require('path');
var SHA256 = require('sha.js').sha256;

exports.getImage = function getImage(name) {
    return path.resolve(__dirname, 'img', name);
};

exports.getHash = function getHash(img) {
    var sha = new SHA256();
    sha.update(img.data);
    return sha.digest('hex');
};
