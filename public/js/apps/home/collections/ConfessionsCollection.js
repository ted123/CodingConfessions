define( function( require ) {
	'use strict';

	var ConfessionModel = require( 'models/ConfessionModel' );
	
	return Backbone.Collection.extend( {
		model : ConfessionModel,
		url   : '/confessions'
	} );
} );