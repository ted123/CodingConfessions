define( function ( require ) {
	'use strict';

	return function () {

		var $        = require( 'jquery' );
		var Backbone = require( 'backbone' );
		var App      = require( 'App' );
		var Router   = require( 'Router' );

		App.module( 'Home', function ( Home ) {

			require( 'apps/home/views/Views' );
			require( 'apps/home/controllers/ShowController' );

			Home.Router = Router.extend( {
				'appRoutes' : {
					'' : 'showHomePage'
				}
			} );

			var API = {

				'showHomePage' : function () {
					Home.Controller.Show.showHome();
				}

			};

			App.addInitializer( function () {
				new Home.Router( {
					'controller' : API
				} );
			} );

		} );

	};

} );
