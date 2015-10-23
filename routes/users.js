var express = require('express');
var router = express.Router();
var User = require('../model/user');
var mongoose = require('mongoose');
var  friendSchema = require('../model/friend');
var Friend = mongoose.model('Friend', friendSchema);
/* GET users listing. */
router.get('/me', function(req, res, next) {

	Friend.find({oauthID: req.user._id}, function(err, user)
	{
		if(err)
		{
			res.send(err);
		}else
		{
			res.send({user: user.name})
		}
	});
  // return user info and relationships


  	// User.find({oauthID: req.user._id}, function(err, user)
  	// {

  	// }).pop;

	// Relationship.find({Top: req.user._id})

	//search db by friendId
});


//get user by search their username


router.post('/:userId', function(req, res, next){
	//create relationship
	//create relationship object


});


//on accept created a relationShip back

module.exports = router;
