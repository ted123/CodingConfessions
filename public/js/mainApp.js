define(['marionette', 'jquery', 'bootstrap' ], function(Marionette){
	var ConfessionApp = new Marionette.Application();

	ConfessionApp.addRegions( {
		mainRegion           : ".message",
		trendingRegion       : "#trending",
		footRegion           : "#modalFooter",
		confessionFormRegion : '#confessFormRegion',
		modalRegion          : '#msgModal'
	} );

	return ConfessionApp;

} );