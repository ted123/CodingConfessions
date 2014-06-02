define( function ( require ) {
	'use strict';

	var App                       = require( 'App' );
	var Marionette                = require( 'marionette' );
	var classies                  = require( 'classie' );
	var ConfessionsCollection     = require( 'apps/home/collections/ConfessionsCollection' );
	var ConfessionsCollectionView = require( 'apps/home/views/ConfessionsCollectionView' );
	var ConfessionItemView        = require( 'apps/home/views/ConfessionItemView' );
	var SubmissionItemView        = require( 'apps/home/views/SubmissionItemView' );

	App.module( 'Home.Controller', function ( Controller ) {
		var layout = new App.Home.Views.PageLayout();
		App.content.show( layout );
		Controller.Show = {

			'showHome' : function () {
				var a      = new ConfessionsCollection;

				a.fetch( {
					success : function(data) {
						var confessions = new App.Home.Views.ConfessionsCollectionView( {
							collection : data
						} );
						layout.trendingRegion.show( confessions );
						layout.submissionRegion.show( new SubmissionItemView );
						console.log('the history'+Backbone.history.length);
					}
				} );
			},

			'showConfession' : function ( id ) {
				if(classies.has( $( '#msgOverlay' )[0], 'overlay-closed' )){

					classies.remove( $( '#msgOverlay' )[0], 'overlay-closed' );
					classies.remove( $( '.wrapper' )[0], 'sendtoForward' );

				}
				if(!classies.has( $( '#msgOverlay' )[0], 'overlay-open' )){

					classies.add( $( '#msgOverlay' )[0], 'overlay-open' );

				}
				if(!classies.has( $( '.wrapper' )[0], 'sendtoBack' )){

					classies.add( $( '.wrapper' )[0], 'sendtoBack');

				}

				var a = new ConfessionsCollection;
				a = new a.model;
				a.fetch( {

					url : '/confessions/'+ id ,

					success : function( data ) {

						var confession = new App.Home.Views.ModalItemView( { model : data } );
						layout.modalRegion.show( confession );

					}

				} );


			}

		};

	} );

} );
