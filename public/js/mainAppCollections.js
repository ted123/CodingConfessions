define( [ 'mainApp' ], function( ConfessionApp ) {

	ConfessionApp.confession = Backbone.Model.extend({
		url   : '/confessions',
		validate : function( attr ){
			if( ! attr.message ){
				return 'message must not be empty.';
			}
			if( ! attr.alias ){
				return 'alias must not be empty.';
			}
		}
	} );

	ConfessionApp.confessions = Backbone.Collection.extend( {
		model : ConfessionApp.confession,
		url   : '/confessions'
	} );
} );