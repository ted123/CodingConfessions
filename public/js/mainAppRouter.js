define([ 'mainApp' ], function( ConfessionApp ){

	ConfessionApp.Router = Backbone.Router.extend( {

		routes: {
			''        : 'index',
			'search'   : 'search',
			'trending' : 'trending',
			'recent'   : 'recent',
			'*other'   : 'default'
		},

		index : function() {
			$('body').animate( { scrollTop: 0 } );
			console.log( 'you are in index' );
		},

		search : function() {
			//alert('search page init');
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
