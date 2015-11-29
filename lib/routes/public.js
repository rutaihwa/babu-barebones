'use strict';

// Keeps public routes

// Load modules
var _ = require('lodash');
var Config = require('getconfig');
var Pkg = require('../../package'); // Used as a placeholder

// Public routes
var publicRoutes = [
    // Public files
    {
        path: '/{staticassetspath*}',
        method: 'GET',
        handler: {
            directory: {
                path: Config.paths.public
            }
        },
        config: {
            cache: {
                expiresIn: 7 * 24 * 60 * 60 * 1000
            }
        }
    },
    // Index
    {
        path: '/',
        method: 'GET',
        handler: function (request, reply) {

            return reply.view('index', {
                body: Pkg.description
            });
        }
    }

];


// Export routes
exports.routes = publicRoutes;
