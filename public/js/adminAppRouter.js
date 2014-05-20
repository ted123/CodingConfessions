define([ 'adminApp', 'adminAppViews' ], function( ConfessionManager ){

	ConfessionManager.Router = Backbone.Router.extend( {

		routes: {
			'sample'    : 'adminsss'
		},

		index : function() {
			$('body').animate( { scrollTop: 0 } );
			console.log( 'ADMIN ROUTER' );
		},
		adminsss : function() {

		},
		default : function(other) {
			alert('Hmmm..not sure what you need here? You accessed to: ' + other);
		}

	} );

	new ConfessionManager.Router;

} );
