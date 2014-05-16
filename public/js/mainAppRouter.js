define([ 'mainApp', 'mainAppViews', 'adminApp' ], function( ConfessionApp ){

	ConfessionApp.Router = Backbone.Router.extend( {

		routes: {
			''         : 'index',
			'login'    : 'login',
			'search'   : 'search',
			'trending' : 'trending',
			'recent'   : 'recent'
		},

		index : function() {
			$('body').animate( { scrollTop: 0 } );
			console.log( 'you are in index' );
		},
		login : function() {
			var d = new ConfessionApp.loginView();
			ConfessionApp.wrapper.show( d );
		},
		search : function() {
			alert( 'search' );
		},

		trending : function() {
			//alert('tending');
		},

		recent : function() {
			//alert('recent');
		},

		default : function(other) {
			alert('Hmmm..not sure what you need here? You accessed to: ' + other);
		}

	} );

	new ConfessionApp.Router;


} );
