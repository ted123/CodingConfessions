/* global require: false, console: false */
'use strict';

var express  = require( 'express' );
var mongoose = require( 'mongoose' );
var connect  = require('connect');
var app      = express();
var utils    = require( './utils' );
var config   = require( './config' );

mongoose.connect( os.getenv('MONGOHQ_URL') );

mongoose.connection.on( 'open', function () {
	console.log( 'Connection to mongodb is open' );
} );

mongoose.connection.on( 'error', function ( error ) {
	console.log( 'Error on mongodb connection : ', error );
} );

app.use( connect.bodyParser() );
app.use( express.static('public/') );
app.use( '/', require( './controller/ConfessionsController' ) );
app.use( '/', require( './controller/AdminController' ) );

app.get( '/', function( request, response) {
	response.sendfile( "index.html" );
} );
app.get( '/adminPage', function( request, response) {
	response.sendfile( __dirname + "/public/adminpage.html" );
} );

app.listen( process.env.PORT || 3000 );

module.exports = app;