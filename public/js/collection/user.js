var app = app || {};

(function()
{
	var userCollection = Backbone.Collection.extend(
	{
		model: app.UserModel,
		url: 'users/me',
		initialize: function()
		{

		}
	});

	app.User = new userCollection();
})();