/* global require: false, console: false */
'use strict';

var express      = require( 'express' );
var mongoose     = require( 'mongoose' );
var path         = require( 'path' );
var session      = require ('express-session');
var favicon      = require( 'static-favicon' );
var logger       = require( 'morgan' );
var cookieParser = require( 'cookie-parser' );
var bodyParser   = require( 'body-parser' );
var app          = express();
var utils        = require( './utils' );
var config       = require( './config' );

mongoose.connect( utils.mongoUrl( config.db ) );

mongoose.connection.on( 'open', function () {
	console.log( 'Connection to mongodb is open' );
} );

mongoose.connection.on( 'error', function ( error ) {
	console.log( 'Error on mongodb connection : ', error );
} );

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: 'keyboard cat', cookie: { maxAge: 100000 }}));


app.use( '/', require( './controller/ConfessionsController' ) );
app.use( '/', require( './controller/AdminController' ) );



app.listen( config.port, config.host );

module.exports = app;