define( [ 'mainApp', 'adminApp', 'mainAppCollections' ], function( ConfessionApp, adminApp ) {

	var Marionette = require( 'marionette' );
	var ConfessionManager = require( 'adminApp' );
	ConfessionApp.confessionView = Marionette.ItemView.extend( {
		tagName  : 'li',
		className: 'col-md-3 col-sm-4',
		template : "#trendingTemp",
		events   : {
			"click p" : "action"
		},
		action : function(e) {

        	$('.messageBody').html(this.model.get('message'));
        	//alert(item);
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
				'message' : $('#message').val(),
				'alias'	: $('#alias').val()
			} );

			var s = msg.save();
			if( ! s ){
				ConfessionApp.trigger('addMsg:error');
			}else{
				ConfessionApp.trigger('addMsg:success');
			}
		},
		initialize: function() {
			ConfessionApp.on('addMsg:error', function(){
				alert('Error. Forms must not be empty.');
			});
			ConfessionApp.on('addMsg:success', function(){
				alert('You\'re confession is submitted. ');
				$('#message').val('');
				$('#alias').val('');

			});
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
			var username = this.ui.username.val();
			var password = this.ui.password.val();
			var sample = new ConfessionManager.AdminModel();
			console.log(username);
			//sample.fetch({data: { username : 'secretkey'}, type: 'POST'});
			sample.fetch( {
				data : {
					'username' : username,
					'password' : password
				},
				type : 'POST',
				success :function( result ) {
					console.log( result );
				}
			} );
		}
	} );

	ConfessionManager
} );