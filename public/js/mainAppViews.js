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

        	//$('.messageBody').html(this.model.get('message'));
        	var confessions = new ConfessionApp.modalView( {
					model : this.model
			} );

			ConfessionApp.modalRegion.show( confessions );

        	//alert(item);
		}

	} );

	ConfessionApp.modalView = Marionette.ItemView.extend( {
		template : "#selectedConfession",
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
			}
		},
		initialize: function() {
			ConfessionApp.on('addMsg:error', function(){
				alert('Error. Forms must not be empty.');
			});
		}
	} );
} );