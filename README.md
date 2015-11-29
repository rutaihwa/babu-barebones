# babu-barebones [![GitHub version](https://badge.fury.io/gh/rutaihwa%2Fbabu-barebones.svg)](http://badge.fury.io/gh/rutaihwa%2Fbabu-barebones) [![Build status](https://travis-ci.org/rutaihwa/babu-barebones.svg?branch=master)](https://travis-ci.org/rutaihwa/babu-barebones)

A quick way to start developing a node application with hapijs, jade.

#### Goal
Provide a barebone template for hapijs barebone application

#### Usage
The template assumes `git`, `nodejs` or `iojs` are correctly installed.

```shell
$ git clone https://github.com/rutaihwa/babu-barebones <myApp>
$ cd <myApp>
```

#### Application Structure

###### lib/

    ----- index.js		// The server
    ----- start.js		// The application entry point
    ----- manifest.js		// The application manifest

###### lib/routes

    ----- index.js		// Looks for routes in the underlying files and adds to the server
    ----- public.js		// Public routes, gives a templates of adding more routes

###### views/

    ----- index.jade
    

###### config/

    ---- default.json


###### assets/

    ----- images/	      // Images for your app
    ----- styles/	      // Style and style related stuff
    ----- scripts/	      // Your Js scripts
    ----- vendors/	      // Third party libraries

###### test/

    ----- index.js		// Simple test

###### Others
    
    ------ .gitignore		// files to be ignored by git
    ------ gulpfile		// Run tasks for the app
    ------ .eslintrc		// Linting rules for js
    ------ .eslintignore	// Files that should be ignored by lint
 
#### Contributing

1. Fork this repo and make changes in your own fork.
2. Commit your changes and push to your fork `git push origin master`
3. Create a new pull request and submit it back to the project.

#### Bugs & Issues

Stuff doesn't work, open an [issue ](https://github.com/rutaihwa/babu-barebones/issues), its free.