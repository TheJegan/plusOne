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
			app.User.trigger('not_authorized');
		}
	});


	app.User.on('authorized', function()
	{
		new app.ProfileView();
	});

	app.User.on('not_authorized', function()
	{
		new app.LoginView();
	});
})();