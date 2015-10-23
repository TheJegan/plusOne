var app = app || {};

(function()
{
	var userCollection = Backbone.Collection.extend(
	{
		model: app.UserModel,
		url: 'user/me',
		initialize: function()
		{

		}
	});

	app.User = new userCollection();
})();