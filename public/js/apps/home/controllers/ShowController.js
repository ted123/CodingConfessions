define( function ( require ) {
	'use strict';

	var App                       = require( 'App' );
	var Marionette                = require( 'marionette' );
	var ConfessionsCollection     = require( 'apps/home/collections/ConfessionsCollection' );
	var ConfessionsCollectionView = require( 'apps/home/views/ConfessionsCollectionView' );
	var ConfessionItemView        = require( 'apps/home/views/ConfessionItemView' );
	var SubmissionItemView        = require( 'apps/home/views/SubmissionItemView' );

	App.module( 'Home.Controller', function ( Controller ) {

		Controller.Show = {

			'showHome' : function () {
				var layout = new App.Home.Views.PageLayout();
				var a      = new ConfessionsCollection;
				App.content.show( layout );
				a.fetch( {
					success : function(data) {
						var confessions = new App.Home.Views.ConfessionsCollectionView( {
							collection : data
						} );
						layout.trendingRegion.show( confessions );
						layout.submissionRegion.show( new SubmissionItemView );
					}
				} );
			}

		};

	} );

} );
