var app = app || {};

(function()
{
	app.UserModel = Backbone.Model.extend(
	{
		defaults: {
			'_id': '',
			'oauthID': '',
			'name': '',
			'displayName': '',
			'createdBy': '',
			'createdDateTime': '',
			'friends': []
		},
		idAttribute: '_id',
		initialize: function()
		{

		}
	});
})();

// var usersSchema = new mongoose.Schema({
//     oauthID: String
//     ,name: String
//     ,displayName: String
//     ,createdBy: Number
//     ,createdDateTime: { type: Date, default: Date.now }
// });