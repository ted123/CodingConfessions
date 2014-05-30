define( function( require ) {
	'use strict';

	var _        = require( 'underscore' );
	var Backbone = require( 'backbone' );

	return Backbone.Model.extend({

		url   : '/confessions',

		'validate' : function( attr ){
			if( ! attr.message ){
				return 'message must not be empty.';
			}
			if( ! attr.alias ){
				return 'alias must not be empty.';
			}
		}
	} );
} );