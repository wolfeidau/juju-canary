/*global describe:false, it:false, before:false, after:false, afterEach:false*/
'use strict';
var request = require('supertest');
var app = require('../app');

describe('index', function () {

    var mock;

    before(function (done) {
      app.configure(function(err, app){
        if (err) return done(err);
        mock = app;
        done();
      });
    });

    it('should say "hello"', function (done) {
        request(mock)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/)
            .expect(/Welcome/)
            .end(function(err, res){
                done(err);
            });
    });

});
