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
		'mainAppCollections'  : 'mainAppCollections',
		'mainAppViews'        : 'mainAppViews',
		'classie'			  : 'libs/classie/classie'	
	},

	'shim' : {
		'bootstrap' : {
			'deps'    : [ 'jquery' ],
			'exports' : 'bootstrap'
		},
		'classie' : {
			'deps'    : [ 'jquery' ],
			'exports' : 'classie'
		}

	}

} );

require( [ 'mainApp', 'mainAppRouter', 'mainAppCollections', 'mainAppViews', 'classie' ], function( ConfessionApp ) {
	
	var router = require( 'mainAppRouter' );
	ConfessionApp.on( "initialize:after", function() {

		new router;

		new ConfessionApp.Router;

		Backbone.history.start();
		Backbone.history.length=0;
		var c = new ConfessionApp.confessions();
		c.fetch( {
			success : function(data) {
				var confessions = new ConfessionApp.ConfessionsView( {
					collection : data
				} );
				ConfessionApp.trendingRegion.show( confessions );
				console.log();
			}
		} );

		var d = new ConfessionApp.addView();
		ConfessionApp.confessionFormRegion.show( d );

	} );

   	ConfessionApp.start();
} );