/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Javascript Libraries
// app.import('vendor/firebase-simple-login/firebase-simple-login.js');
app.import('vendor/bootstrap-sass-official/assets/javascripts/bootstrap.js');
app.import('vendor/d3/d3.js');
app.import('vendor/sparkline/dist/jquery.sparkline.js');
app.import('vendor/datatables/media/js/jquery.dataTables.js');
app.import('vendor/moment/moment.js');
app.import('vendor/jquery.uniform/jquery.uniform.js');

// CSS Libraries
app.import('vendor/fontawesome/css/font-awesome.css');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
