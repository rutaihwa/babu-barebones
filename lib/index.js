'use strict';

// Load modules
var Glue = require('glue');
var Config = require('getconfig');
var Pkg = require('../package');

// Declare internals
var internals = {};

// Views
internals.views = {
    engines: {
        jade: require('jade')
    },
    path: Config.paths.views,
    isCached: Config.getconfig.env === 'production',
    // The default context
    context: {
        'app': {
            'name': Pkg.name,
            'author': Pkg.author
        }
    }
};

// init
// Initializes a server
exports.init = function (manifest, composeOptions, next) {

    Glue.compose(manifest, composeOptions, function (err, server) {

        // If there is error in composing, return error
        if (err) {
            return next(err);
        }

        // Adding views
        server.views(internals.views);

        // Adding routes
        server.route(require('./routes').routes);

        // Return the server
        server.start(function (err) {

            return next(err, server);
        });
    });
};
