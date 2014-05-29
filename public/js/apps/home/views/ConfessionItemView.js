define( function ( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );


	var template = require( 'text!templates/ConfessionDisplay.html' );

	return Marionette.ItemView.extend( {

		tagName  : 'li',
		className: 'col-md-3 col-sm-4',
		template : "#trendingTemp",
		events   : {
			"click p" : "action"
		},
		action : function() {
			Backbone.history.length+=1;
        	Backbone.history.navigate('#show/'+this.model.get('_id'), true);

		}

	} );

} );