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

	console.log('user: ' + userId);


	// Friend.find({userId: userId})
	// 	.lean()
	// 	.populate('userId')
	// 	.exec(function(err, user)
	// 	{
	// 		res.send(user)
	// 	})

	User.find({_id: userId}).lean().exec(function(err, u)
	{
		if(!err)
		{
			var user = u[0];
			

			emitter.emit('fetch_friends', user);
			// res.send(user);
		}
		
	});

	emitter.on("fetch_friends",function(user){
	    // console.log(“hello world !”);

	    Friend.findOne({userId: userId}).lean().populate('friendId').exec(function(err, friends)
	    {
	    	console.log();
	    	
			user.friends =[];
	    	// if(typeof friends !== 'undefined')
	    	// {
	    	// 	user.friends = (typeof friends.length === 'undefined') ? [friends] : friends;
	    	// }
	    	user.friends = friends;
	    	return res.send(user);
	    });
	});
  // return user info and relationships


  	// User.find({oauthID: req.user._id}, function(err, user)
  	// {

  	// }).pop;

	// Relationship.find({Top: req.user._id})

	//search db by friendId

});


//get user by search their username
function SyncLocalStorage(req, res, next)
{
	var rec = req.body;
	var bulk = List.collection.initializeUnorderedBulkOp();

	if(rec.length === 0)
	{
		next();
	}
	else
	{

		for(var i = 0; i < rec.length; i++)
		{
			if(rec[i].isDelete === true)
			{
				bulk.find({'_id': rec[i]._id}).remove({'_id': rec[i]._id});
			}
			else
			{
				if(rec[i]._id.length === 36) //place holder hack
				{
					bulk.insert({ name: rec[i].name, _user: req.user._id})
				}
				else
				{
					bulk.find( {'_id': rec[i]._id}).upsert().update(
					   {
					      $set: { name: rec[i].name, _user: req.user._id} 
					   }
					);
				}		
			}
		}

		bulk.execute(function(err,results) {
	   		// result contains stats of the operations
	   		next();
		});
	}

}

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
