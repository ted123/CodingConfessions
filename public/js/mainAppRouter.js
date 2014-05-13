define( [ 'mainApp', 'classie' ], function( ConfessionApp ){
	var $ = require( 'jquery' );
	var Marionette = require( 'marionette' );
	var classies	   = require( 'classie' );

	ConfessionApp.Router = Marionette.AppRouter.extend( {

		routes: {
			''         : 'index',
			'show/:id' : 'show',
			'login'    : 'login',
			'search'   : 'search',
			'trending' : 'trending',
			'recent'   : 'recent',
			'*other'   : 'default'
		},

		index : function() {
			
			console.log( 'you are in index' );
		},
		login : function() {
			var d = new ConfessionApp.loginView();
			ConfessionApp.wrapper.show( d );
		},
		show : function( id ) {
			if(classies.has( $( '#msgOverlay' )[0], 'overlay-closed' )){

				classies.remove( $( '#msgOverlay' )[0], 'overlay-closed' );
				classies.remove( $( '.wrapper' )[0], 'sendtoForward' );

			}
			if(!classies.has( $( '#msgOverlay' )[0], 'overlay-open' )){

				classies.add( $( '#msgOverlay' )[0], 'overlay-open' );

			}
			if(!classies.has( $( '.wrapper' )[0], 'sendtoBack' )){

				classies.add( $( '.wrapper' )[0], 'sendtoBack');

			}
 		
			ConfessionApp.singlePost = Backbone.Model.extend( { url: '/confessions/'+id } );
			var a = new ConfessionApp.singlePost();
			a.fetch( {

				success : function( data ) {

					var confessions = new ConfessionApp.modalView( { model : data } );
					ConfessionApp.modalRegion.show( confessions );
					//$('#myModal').modal('show');

				}

			} );
		},
		search : function() {
			//alert('search page init');
			console.log( 'you are in search page' );
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

	return ConfessionApp.Router;

} );



