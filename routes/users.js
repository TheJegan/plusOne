var express = require('express');
var router = express.Router();
var userSchema = require('../model/user');
var mongoose = require('mongoose');
var friendSchema = require('../model/friend');
var Friend = mongoose.model('Friend', friendSchema);
var User = mongoose.model('User', userSchema);
var env = require('../env/config');
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
/* GET users listing. */
router.get('/me', env.isAuthenticated, function(req, res, next) {
	
	var userId = req.user._id;

	// console.log('user: ' + userId);

	User.find({_id: userId}).lean().exec(function(err, u)
	{
		if(!err)
		{
			var user = u[0];
	
			Friend.find({userId: userId}).select('friendId').lean().populate('friendId').exec(function(err, friends)
		    {
		    	user.friends = [];

		    	if(friends)
		    	{
		    		if(typeof friends !== 'undefined')
			    	{
			    		if(typeof friends.length ==='undefined')
			    		{
			    			user.friends = [friends]
			    		}else
			    		{
			    			for(var i=0; i< friends.length; i++)
							{
								user.friends.push(friends[i].friendId);	
							}
			    		}
			    	}
		    	}
		    	else
		    	{
		    		user.friends = [];
		    	}
		    	
				

		    	Friend.find({friendId: userId})
				.select('userId')
				.lean()
				.populate('userId')
				.exec(function(err, friends)
			    {
			    	if(friends)
			    	{
			    		if(friends.length)
			    		{
			    			for(var i=0; i< friends.length; i++)
							{
								user.friends.push(friends[i].userId);	
							}
			    		}
			    		else
			    		{
			    			user.friends.push(friends);
			    		}
			    			
			    	}
			    	
			    	return res.send(user);
			    });
		    });
		}		
	});	

	// return user info and relationships

  	// User.find({oauthID: req.user._id}, function(err, user)
  	// {

  	// }).pop;

	// Relationship.find({Top: req.user._id})

	//search db by friendId

});

router.post('/:userId', function(req, res, next){
	//create relationship
	//create relationship object

	var friendId = req.params.userId;

	var friend = new Friend({
		userId: req.user._id,
		friendId: friendId,
		Approved: false
	});

	friend.save(function()
	{
		res.send({status: 'coo'});		
	});
});


//on accept created a relationShip back

module.exports = router;
