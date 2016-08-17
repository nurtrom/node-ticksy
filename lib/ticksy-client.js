var request = require('request');
var q = require('q');

var TicksyClient = function(domain, key) {
    if (!domain) {
        throw new Error('Argument "domain" is required');
    }

    if (!key) {
        throw new Error('Argument "key" is required');
    }

    this.domain = domain;
    this.key = key;
};

TicksyClient.API_URL = 'https://api.ticksy.com/v1/';

TicksyClient.ALLOWED_METHODS = ['GET', 'POST'];

TicksyClient.prototype.get = function(path) {
    return this.request('GET', path);
};

TicksyClient.prototype.post = function(path, data) {
    return this.request('POST', path, data);
};

TicksyClient.prototype.request = function(method, path, data) {
    method = typeof method === 'string' ? method.toUpperCase() : method;
    path = path || '';
    data = data || {};

    if (!~this.constructor.ALLOWED_METHODS.indexOf(method)) {
        throw new Error('Method "' + method + '" is not allowed.');
    }

    if (typeof path !== 'string') {
        throw new Error('Argument "path" should be a string.');
    }

    path = path.substr(0, 1) === '/' ? path.replace(/^\?+/, '') : path;
    var url = this.constructor.API_URL + this.domain + '/' + this.key + '/' + path;

    var requestParams = {
        method: method,
        url: url,
        json: true
    };

    if (method === 'POST') {
        requestParams.formData = data;
    }

    var defer = q.defer();

    request(requestParams, function(error, res, result) {
        if (error) {
            throw new Error(error);
        }

        if (result.code && result.code != 200) {
            defer.reject(result);

        } else {
            defer.resolve(result);
        }
    });

    return defer.promise;
};

module.exports = TicksyClient;