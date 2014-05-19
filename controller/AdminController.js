var express = require( 'express' );
var Admin   = require( '../model/AdminModel' );
var Router  = express.Router();

Router
	.get( '/admin', function( request, response ) {
		Admin.find(function( error, doc ) {
			if ( error ) {
				return response.send( 500, error );
			}
			response.send( 200, doc );
		} );
	} )
	.post( '/admin', function( request, response ) {
		console.log(request.body.username);
		var newPost = new Admin( {
			username: request.body.username,
			password: request.body.password
		} );

		newPost.save( function ( error, doc ) {
			if ( error ) {
				return response.send( 500, error );
			}
			response.send( 200, doc);
		} );
	} )
	.put('/admin/:messageId', function(request, response) {
		Admin.update( {
			_id: request.params.messageId },
			{ password: request.body.password, username: request.body.username },
			{ multi: true },
			function( error, doc ) {
				if (error) {
					response.send( 500, error );
				}
				response.send( 200 );
			} );
	} )
	.post('/admin/login', function ( request, response ) {
		console.log(request.body.username);
		Admin.findOne( { 'username' :  request.body.username }, function(err, user) {
			console.log( user );
			// if there are any errors, return the error before anything else
			if( err ) {
				return err;
			}else if( !user ) {
				response.redirect('/#adminsss');
			}else {
				request.session.user_id = user._id;
				console.log(request.session.user_id);
				//response.redirect('/#sample?' + user._id );
				//response.send( admin());
				response.redirect("/adminPage");
			}
		});

		/*if(post.username === 'admin' && post.password === '1') {

		  req.session.user_id = 'johns_user_id_here';
		  res.redirect('/my_secret_page');
		} else {

		  res.send('Bad user/pass');
		}*/
	});
function admin(){
	var x = 200;
	return x
}
module.exports = Router;