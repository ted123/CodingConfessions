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
			/*alert("SAMPLE");
			var url = window.location.hash.split( "?" );
			var id = url[ 1 ];
			console.log( id );
			console.log( 'NEW PAGE' );
			var adminPage = new ConfessionManager.AdminPageView()
			ConfessionApp.wrapper.show( adminPage );
			var confess =  new ConfessionApp.confessions();
		confess.fetch( {
			success: function(data) {
			//console.log('me'+JSON.stringify(data));
			var confessionsListView = new ConfessionManager.ConfessionsView( {
				collection : data
			} );
			ConfessionManager.mainRegion.show( confessionsListView );
			}
		} );
		var adminCredentials = new ConfessionManager.AdminCollection();
		adminCredentials.fetch( {
			success : function(data) {
				var adminCrdentialsViews = new ConfessionManager.AdminCredentialsView( {
					itemView : data
				} );
				var temp = data.toJSON();
				$('#username').val( temp[0].username );
				$('#password').val( temp[0].password );
				$('#idAdmin').val( temp[0]._id );
			}
		} );
		var header = new ConfessionManager.AdminView();
		ConfessionManager.headRegion.show( header );
		var modalFooter = new ConfessionManager.AdminCredentialsView();
		ConfessionManager.footRegion.show( modalFooter );*/
		},

		login : function() {
			var d = new ConfessionManager.loginView();
			ConfessionManager.wrapper.show( d );
		},

		default : function(other) {
			alert('Hmmm..not sure what you need here? You accessed to: ' + other);
		}

	} );

	new ConfessionManager.Router;

} );
