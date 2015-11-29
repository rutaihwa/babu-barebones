'use strict';

// Load modules
var Code = require('code');
var Lab = require('lab');
var App = require('../vise');
var Path = require('path');

//declare internals

var internals = {};

// Test shortcuts
var lab = exports.lab = Lab.script();
var describe = lab.experiment;
var expect = Code.expect;
var it = lab.test;

// Testing routes.js

describe('routes - public routes', function () {

    it('returns an index page of the app', function (done) {

        App.init(function (err, server) {

            expect(err).to.not.exist();

            var request = { method: 'GET', url: '/' };

            server.select('web-test').inject(request, function (res) {

                expect(res.statusCode, 'Status code').to.equal(200);

                server.stop(done);
            });
        });
    });

});
