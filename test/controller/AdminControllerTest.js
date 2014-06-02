var request   = require( 'supertest' );
var should   = require( 'should' );
//var testutils	= require( '../testutils' );

describe ( 'AdminController', function() {

	var testAccount = {
		'username' : 'admin',
		'password'   : 'test'
	};

	describe( 'POST' , function () {

		it( 'should return a response', function ( done ) {

			request( app )
				.post( '/admin' )
				.send( testAccount )
				.expect( 200 )
				.end( function ( err, res ) {
					if ( err ) throw err;

					res.body.should.be.ok;
					res.body.username.should.equal( testAccount.username );
					res.body.password.should.equal( testAccount.password );
					done();
				} );

		} );

	} );

	describe( 'GET', function( done ){

		it( 'should return a response', function ( done ) {
			request( app )
				.get( '/admin' )
				.expect( 'Content-Type', /json/ )
				.expect( 200 )
				.end( function ( err, res ) {
					if( err ) throw err;

					testAccount.id = res.body[0]._id;
					res.body.should.be.ok;
					res.body.should.be.an.instanceof( Array );
					res.body.should.not.be.above( 1 );
					done();
				} );
		} );
	} );

	describe( 'PUT', function( done ){

		it( 'should return a response', function ( done ) {
			request( app )
				.put( '/admin/' + testAccount.id )
				.send( { 'password' : '1234' } )
				.expect( 200 )
				.end( function( err, res ) {
					if( err ) throw err;

					res.body.should.be.ok;
					done();
				} );

		} );
	} );

} );
