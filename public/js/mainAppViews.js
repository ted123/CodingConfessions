define( [ 'mainApp', 'mainAppCollections' ], function( ConfessionApp ) {

	var Marionette = require( 'marionette' );
	ConfessionApp.confessionView = Marionette.ItemView.extend( {
		tagName  : 'li',
		className: 'col-md-3 col-sm-4',
		template : "#trendingTemp",
		events   : {
			"click p" : "action"
		},
		action : function(e) {
        	$('.messageBody').html(this.model.get('message'));
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