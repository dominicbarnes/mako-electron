
'use strict';

const buffer = require('mako-buffer');
const copy = require('mako-copy');
const stat = require('mako-stat');
const html = require('mako-html');
const output = require('mako-output');
const write = require('mako-write');


module.exports = function () {
  return function (mako) {
    mako.use(stat([ 'html', 'js', 'json', 'css', css.images, css.fonts ]));
    mako.use(buffer([ 'html', 'js', 'json', 'css' ]));
    mako.use(html());
    mako.use(css({ sourceMaps: true }));
    mako.use(output());
    mako.use(write([ 'html', 'js', 'json', 'css' ]));
    mako.use(copy([ css.images, css.fonts ]));
  };
};
