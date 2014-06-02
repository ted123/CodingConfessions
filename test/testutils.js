'use strict';

var mongoose = require('mongoose');
var fixtures = require( '../test/fixtures' );

process.env.NODE_ENV = 'test';

var app, mongodb;

before(function (done) {

    return fixtures.createServer( 'AdminController',
        function ( error, server ) {
            app = server;

            fixtures.connectMongo( null, function ( error, conn ) {
            if ( error ) {
                return done( error );
            }

            mongodb = conn.db;
            return done();
        } );
    } );

});

after(function (done) {
    mongodb.dropDatabase( function () {
        return done();
    } );
});