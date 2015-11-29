'use strict';

// Load modules
var Hoek = require('hoek');
var _ = require('lodash');
var Path = require('path');

// Internals
var internals = {};

// Resource routes
exports.routes = [];

// Get files with resources
var files = require('../utils').lsdir(Path.join(__dirname),'index.js');

// Add routes to the server
files.forEach(function (file) {

    Hoek.merge(exports.routes, require(Path.join(__dirname,file)).routes);
});

