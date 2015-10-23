var app = app || {};

(function()
{
	var AppRouter = Backbone.Router.extend({
		// ""
		'me': "renderProfile"
	});
	app.router = new AppRouter();

	// app.router.on('route:lo')

	app.router.on('route:renderProfile', function()
	{

	});
	Backbone.history.start();

})();