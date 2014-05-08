define(['marionette', 'jquery', 'bootstrap' ], function(Marionette){
	  var ConfessionManager = new Marionette.Application();

		ConfessionManager.addRegions( {
			mainRegion : ".message",
			headRegion : "#head-menu",
			footRegion : "#modalFooter"
		} );
		ConfessionManager.ConfessionModel = Backbone.Model.extend();
		ConfessionManager.ConfessionCollection = Backbone.Collection.extend( {
			model : ConfessionManager.ConfessionModel,
			url   : '/confessions'
		} );
		ConfessionManager.AdminModel = Backbone.Model.extend();
		ConfessionManager.AdminCollection = Backbone.Collection.extend( {
			model : ConfessionManager.AdminModel,
			url   : '/admin'
		} );
		ConfessionManager.AdminView = Marionette.ItemView.extend( {
			template : "#headerMenu",
			events : {
				"click #changeCredentials" : "sampless"
			},
			sampless : function() {
				$('#myModal').modal('show');
			}
		} );
		ConfessionManager.AdminCredentialsView = Marionette.ItemView.extend( {
			template : "#modalFooterWrapper",
			events : {
				"click #saveChanges" : "save"
			},
			save : function() {
				var username = $( '#username' ).val();
				var password = $( '#password' ).val();
				var id       = $( '#idAdmin' ). val();
				console.log(id + " " + " " + username + " " + password  );
				jQuery.ajax({
				    url: '/admin/' + id,
				    type: 'PUT',
				    data: {
				        'password': password,
				        'username': username
				    },
				    success: function( data, textStatus ) {
				    	$( '#myModal' ).modal( 'hide' );
				    	alert( "Update Response: " + textStatus );
				    }
				});
			}
		} );
		ConfessionManager.ConfessionView = Marionette.ItemView.extend( {
			template : "#confessions-list",
			events : {
				"click #action" : "action",
				"click #reject" : "reject"
			},
			action : function() {
				alert( "Confession Approved" );
			},
			reject : function() {
				alert( "Confession Rejected" );
			}
		} );
		ConfessionManager.ConfessionsView = Marionette.CollectionView.extend( {
			itemView : ConfessionManager.ConfessionView
		} );

		ConfessionManager.on( "initialize:after", function() {

			var confess =  new ConfessionManager.ConfessionCollection();
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
			ConfessionManager.footRegion.show( modalFooter );
		} );

	  return ConfessionManager;
});