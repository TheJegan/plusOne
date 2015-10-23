var express = require('express');
var router = express.Router();
var friendshipSchema = require('../model/friend');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend', friendshipSchema);

// var Relationship = require('../model/relationship')
// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/add/:userId', function(req, res, next) {
// {
// 	// var top = req.user._id;
// 	// var bottom = req.params.id;

// 	// var relationship = new Friend(
// 	// {
// 	// 	userId: top,
// 	// 	friendId: bottom
// 	// });

// 	// relationship.save(function(err)
// 	// {
// 	// 	if(err)
// 	// 	{
// 	// 		res.send(err);
// 	// 	}
// 	// 	else
// 	// 	{
// 	// 		res.send({'status': 'saved'});
// 	// 	}
// 	// })
// 	res.send({user: 'test'});
// });


module.exports = router;
