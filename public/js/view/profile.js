// 'use strict'
var app = app || {};

(function($){
	app.ProfileView = Backbone.View.extend({
		el : '#todo-body',
		template: Handlebars.compile( $('#profile-template').html() ),
		initialize: function()
		{
			this.render();
		},
		render: function()
		{
			var currentUser = app.User.first().toJSON();
			// var user = {
			// 	name: currentUser.name,
			// 	friends: [
			// 	{
			// 		name: 'friend 1'
			// 	},
			// 	{
			// 		name: 'friend 2'
			// 	},
			// 	{
			// 		name: 'friend 3'
			// 	},
			// 	]
			// }
			$(this.el).html( this.template({
				user: currentUser
			}) );
		}
	});
})(jQuery);