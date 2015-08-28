var should = require('chai').should(),
    request = require('request'),
    port = process.env.PORT || 3000,
    ip = process.env.IP || '127.0.0.1';

describe('The server', function() {
    it('should respond with Hello, world!', function(done) {
        request('http://' + ip + ":" + port, function(error, response, body) {
            should.not.exist(error);
            response.statusCode.should.equal(200);
            body.should.equal("Hello, world!");
            done();
        });
    });
});
