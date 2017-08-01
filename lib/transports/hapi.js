'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _response = require('./response');

var _response2 = _interopRequireDefault(_response);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

exports['default'] = function (config, opts) {
  var request = config.request;

  if (!request) {
    throw new Error('FluxappFetch:hapi requires a request configuration be set');
  }

  return new _bluebird2['default'](function (resolve, reject) {
    if (!_lodash2['default'].isPlainObject(opts) || _lodash2['default'].keys(opts).length === 0) {
      return reject(new Error('FluxappFetch:hapi Request options must be a non-empty object'));
    }

    opts.headers = _lodash2['default'].clone(request.headers);
    opts.credentials = request.auth.credentials;

    delete opts.headers['accept-encoding'];

    if (['get', 'head'].indexOf(opts.method) !== -1 && _lodash2['default'].isPlainObject(opts.payload)) {
      var parsed = _qs2['default'].stringify(opts.payload);
      opts.payload = null;
      opts.url = opts.url.indexOf('?') !== -1 ? opts.url + parsed : opts.url + '?' + parsed;
    }

    request.server.inject(opts, function (res) {
      resolve(new _response2['default'](res.payload, {
        status: res.statusCode,
        headers: res.headers,
        url: opts.url
      }));
    });
  });
};

module.exports = exports['default'];