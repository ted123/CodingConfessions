define( [ 'mainApp' ], function( ConfessionApp ) {

	ConfessionApp.confession = Backbone.Model.extend();

	ConfessionApp.confessions = Backbone.Collection.extend( {
		model : ConfessionApp.confession,
		url   : '/confessions'
	} );


} );