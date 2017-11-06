/**
* Test
*/

'use strict'

var request = require('supertest');

describe('loading express', function () {
  var server;
  beforeEach(function () {
  	delete require.cache[require.resolve('../../bin/www')];
    server = require('../../bin/www');
  });
  afterEach(function (done) {
    server.close(done);
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('responds to /about', function testAbout(done) {
  request(server)
    .get('/about')
    .expect(200, done);
  });
  it('responds to /reports', function testReports(done) {
  request(server)
    .get('/reports')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});