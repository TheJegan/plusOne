var app = app || {};

(function()
{
	app.User.fetch({ reset: true,
		success: function(model, response, options)
		{
			app.User.trigger('authorized');
		},
		error: function(a, b, c)
		{
			app.User.trigger('not authorized');
		}
	});


	app.User.on('authorized', function()
	{

	});

	app.User.on('not authorized', function()
	{
		new app.LoginView();
	});
})();