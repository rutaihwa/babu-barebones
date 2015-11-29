'use strict';

// Module dependentants
var App = require('../../lib');

// Declare internals
var internals = {};

// Manifest for the test server
// @private
internals.manifest = {
    connections: [{
        host: 'localhost',
        port: 0,
        labels: ['web-test'],
        router: {
            'isCaseSensitive': false,
            'stripTrailingSlash': true
        }
    }],
    plugins: {
        './plugin': {},
        'good': {
            opsInterval: 1000,
            reporters: [{
                reporter: require('good-console'),
                events: {
                    error: '*',
                    log: '*',
                    response: '*',
                    request: '*'
                }
            }]
        },
        'inert': {},
        'vision': {}
    }
};

// Composing options for test server
// @private
internals.composeOptions = {
    relativeTo: __dirname
};

// Initializing a test server
// @public
internals.init = function (next){

    App.init(internals.manifest, internals.composeOptions, function (err, server) {

        // If error stop here
        if (err) {
            return next(err);
        }

        // Returning a server
        return next(err, server);
    });
};

// Exports
exports.init = internals.init;
