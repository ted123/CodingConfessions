define(['marionette', 'jquery', 'bootstrap' ], function(Marionette){
	var ConfessionManager = new Marionette.Application();

	ConfessionManager.addRegions( {
		mainRegion : ".message",
		headRegion : "#head-menu",
		footRegion : "#modalFooter"
	} );
	return ConfessionManager;
} );