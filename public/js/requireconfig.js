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
		'mainApp'             : 'mainApp',
		'mainAppRouter'       : 'mainAppRouter',
		'adminAppRouter'      : 'adminAppRouter',
		'mainAppCollections'  : 'mainAppCollections',
		'mainAppViews'        : 'mainAppViews',
		'adminAppCollections' : 'adminAppCollections',
		'adminAppViews'       : 'adminAppViews'
	},

	'shim' : {
		'bootstrap' : {
			'deps'    : [ 'jquery' ],
			'exports' : 'bootstrap'
		}

	}

} );

require( [ 'mainApp', 'mainAppRouter', 'adminAppRouter', 'mainAppCollections', 'mainAppViews',
	 'adminAppCollections', 'adminAppViews' ], function( ConfessionApp ) {

	Backbone.history.start();
	ConfessionApp.on( "initialize:after", function() {


		var c = new ConfessionApp.confessions();
		c.fetch( {
			success : function(data) {
				var confessions = new ConfessionApp.ConfessionsView( {
					collection : data
				} );
				ConfessionApp.trendingRegion.show( confessions );
			}
		} );

		var d = new ConfessionApp.addView();
		ConfessionApp.confessionFormRegion.show( d );

	} );
	var ConfessionManager = require( 'adminApp' );
	ConfessionManager.on( "initialize:after", function() {

	} );
	ConfessionManager.start();
   	ConfessionApp.start();
} );