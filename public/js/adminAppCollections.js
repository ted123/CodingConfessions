define( [ 'adminApp' ], function( ConfessionManager ) {

	ConfessionManager.AdminModel = Backbone.Model.extend( {
		url   : '/admin/login'
	});

	ConfessionManager.AdminCollection = Backbone.Collection.extend( {
		model : ConfessionManager.AdminModel,
		url   : '/admin'
	} );

} );