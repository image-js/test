'use strict';

var path = require('path');
var SHA256 = require('sha.js').sha256;

exports.imageList = [
    'BW11x11.png',
    'BW15x15.png',
    'BW15x15notTransparent.png',
    'BW15x15transparent.png',
    'BW2x2.png',
    'BW3x3.png',
    'BW4x4.png',
    'BW5x5.png',
    'BW7x7.png',
    'BWGrid5x5.png',
    'ColorGrid5x5.png',
    'cat-blur.jpg',
    'cat.jpg',
    'cells.jpg',
    'ecoli.png',
    'grey16.png',
    'grey8.png',
    'isolateCells.png',
    'rgb32bits.png',
    'rgb64bits.png',
    'rgb8bits.png',
    'xtc.jpg',
    // 5x5a_5.png resized with Photoshop using nearest neighbour algorithm
    'resize/5x5a_1.png',
    'resize/5x5a_2.png',
    'resize/5x5a_3.png',
    'resize/5x5a_4.png',
    'resize/5x5a_5.png',
];

exports.getImage = function getImage(name) {
    return path.resolve(__dirname, 'img', name);
};

exports.getHash = function getHash(img) {
    if (!img.length) {
        img = img.data;
    }
    var sha = new SHA256();
    sha.update(img);
    return sha.digest('hex');
};
