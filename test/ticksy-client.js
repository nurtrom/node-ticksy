var mocha = require('mocha');
var should = require('should');
var TicksyClient = require('../lib/ticksy-client');

describe('TicksyClient', function() {
    describe('#constructor()', function() {
        it('should throw an Error if no domain is supplied', function() {
            (function() { new TicksyClient() }).should.throw('Argument "domain" is required');
        });

        it('should throw an Error if no key is supplied', function() {
            (function() { new TicksyClient('my-domain') }).should.throw('Argument "key" is required');
        });
    });

    describe('#request()', function() {
        var client = new TicksyClient('my-domain', 'key');

        it('should throw Error if supplied method is not allowed', function() {
            var method = 'PUT';

            (function() { client.request(method) }).should.throw('Method "' + method + '" is not allowed.');
        });

        it('should return a promise object with result', function() {
            var promise = client.request('GET');

            promise.should.be.an.Object;
            promise.fail(function() {
                should.exist(result);
            });
        });

        it('result object should contents "code" and "error" when request is failed', function() {
            client.request('GET').fail(function(result) {
                should(result).have.property(['code', 'error']);
            });
        });
    })
});