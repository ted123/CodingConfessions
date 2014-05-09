define( [ 'mainApp', 'mainAppCollections' ], function( ConfessionApp ) {

	var Marionette = require( 'marionette' );

	ConfessionApp.confessionView = Marionette.ItemView.extend( {
		tagName  : 'li',
		className: 'col-md-3 col-sm-4',
		template : "#trendingTemp",
		events   : {
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

	ConfessionApp.ConfessionsView = Marionette.CollectionView.extend( {
		tagName  : 'ol',
		className : 'grid fixed-height',
		itemView : ConfessionApp.confessionView
	} );

} );