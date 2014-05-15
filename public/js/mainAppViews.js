define( [ 'mainApp', 'mainAppCollections', 'classie' ], function( ConfessionApp ) {

	var Marionette = require( 'marionette' );
	var router     = require( 'mainAppRouter' );
	var classie	   = require( 'classie' );


	ConfessionApp.confessionView = Marionette.ItemView.extend( {
		tagName  : 'li',
		className: 'col-md-3 col-sm-4',
		template : "#trendingTemp",
		events   : {
			"click p" : "action"
		},
		action : function() {
			Backbone.history.length+=1;
			routes = new router;
        	routes.navigate('#show/'+this.model.get('_id'), true);

		}

	} );

	ConfessionApp.modalView = Marionette.ItemView.extend( {
		tagName  : 'div',
		className: "singleContainer",
		template : "#selectedConfession",
		events   : {
			"click button" : "action"
		},
		action : function(e){
			e.preventDefault();
			ConfessionApp.modalRegion.close();
			classie.remove( $( '#msgOverlay' )[ 0 ], 'overlay-open' );
			classie.add( $( '#msgOverlay' )[ 0 ], 'overlay-closed' );
			classie.remove( $( '.wrapper' )[ 0 ], 'sendtoBack' );
			classie.add( $( '.wrapper' )[ 0 ], 'sendtoForward' );
			routes = new router;
			
			if( Backbone.history.length == 0 ){
				console.log('router backing');
				routes.navigate( '', true);

			}else{
				console.log('history backing');
				window.history.back();
			
			}

			//routes.navigate('',true);
		}
	} );

	ConfessionApp.ConfessionsView = Marionette.CollectionView.extend( {
		tagName  : 'ol',
		className : 'grid fixed-height',
		itemView : ConfessionApp.confessionView,

	} );

	ConfessionApp.addView = Marionette.ItemView.extend( {
		template : '#confessionForm',
		events : {
			'click #add' : 'addMsg'
		},
		addMsg : function(e) {
			e.preventDefault();
			var msg = new ConfessionApp.confession( {
				'message' : $( '#message' ).val(),
				'alias'   : $( '#alias' ).val()
			} );

			var s = msg.save();
			if( ! s ) {
				ConfessionApp.trigger( 'addMsg:error' );
			}else {
				ConfessionApp.trigger( 'addMsg:success' );
			}
		},
		initialize: function() {
			ConfessionApp.on('addMsg:error', function() {
				alert('Error. Forms must not be empty.');
			} );
			ConfessionApp.on('addMsg:success', function() {
				alert( 'You\'re confession is submitted. ' );
				$( '#message' ).val('');
				$( '#alias' ).val('');

			} );
		}
	} );

	ConfessionApp.loginView = Marionette.ItemView.extend( {
		template : '#login',
		events   : {
			'click #loginSubmit' : 'submitCredentials'
		},
		ui : {
			username : '#username',
			password : '#password'
		},
		submitCredentials : function( e ) {
			e.preventDefault();
			var username = this.ui.username.val();
			var password = this.ui.password.val();
			$.ajax({
				url  : "/admin/login",
				data : {
					'username' : username,
					'password' : password
				},
				type : "POST",
				success : function( result ) {
					window.location = "http://localhost:3000/adminPage"
				}
			} );
		}
	} );
} );