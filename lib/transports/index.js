'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _hapi = require('./hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _axios = require('./axios');

var _axios2 = _interopRequireDefault(_axios);

exports['default'] = {
  axios: _axios2['default'],
  hapi: _hapi2['default'],
  fetch: _fetch2['default']
};
module.exports = exports['default'];