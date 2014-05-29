define( function ( require ) {
	'use strict';

	var _   = require( 'underscore' );
	var App = require( 'App' );

	var ConfessionsCollection 		= require( 'collections/ConfessionsCollection' );
	var ConfessionsCollectionView  	= require( 'views/ConfessionsCollectionView' );
	var ConfessionItemView	 		= require( 'views/ConfessionItemView' );

	App.module( 'Confessions.Controller', function ( Controller ) {

		Controller.Show = {

			'showConfessions' : function () {

			ConfessionsCollection.model.fetch( {
				success : function(data) {
					var confessions = new ConfessionsCollectionView( {
						collection : data
					} );
					App.trendingRegion.show( confessions );
				}
			} );

			}

		};

	} );

} );
