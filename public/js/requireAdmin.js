require.config( {

	'baseUrl' : 'js/',

	'paths' : {

		'jquery'              : 'libs/jquery/dist/jquery',
		'json2'               : 'libs/json2/json2',
		'bootstrap'           : 'libs/bootstrap/dist/js/bootstrap',
		'backbone'            : 'libs/backbone/backbone',
		'underscore'          : 'libs/underscore/underscore',
		'backbone.babysitter' : 'libs/backbone.babysitter/lib/backbone.babysitter',
		'backbone.wreqr'      : 'libs/backbone.wreqr/lib/backbone.wreqr',
		'marionette'          : 'libs/backbone.marionette/lib/core/amd/backbone.marionette',
		'adminApp'            : 'adminApp',
		'adminAppRouter'      : 'adminAppRouter',
		'adminAppCollections' : 'adminAppCollections',
		'adminAppViews'       : 'adminAppViews',
		'mainApp'             : 'mainApp',
		'mainAppCollections'  : 'mainAppCollections'
	},

	'shim' : {
		'bootstrap' : {
			'deps'    : [ 'jquery' ],
			'exports' : 'bootstrap'
		}

	}

} );

require( [ 'adminApp', 'mainApp', 'mainAppCollections', 'adminAppRouter', 'adminAppCollections', 'adminAppViews' ], function( ConfessionManager, ConfessionApp ) {

	Backbone.history.start();
	ConfessionManager.on( "initialize:after", function() {
		var header = new ConfessionManager.AdminView();
		ConfessionManager.headRegion.show( header );
		var modalFooter = new ConfessionManager.AdminCredentialsView();
		ConfessionManager.footRegion.show( modalFooter );

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

	} );
	ConfessionManager.start();
} );