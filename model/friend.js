var mongoose = require('mongoose');
var ObjectId =  mongoose.Schema.Types.ObjectId;

var friendSchema = mongoose.Schema(
{
	userId: {type: String, ref: 'User'},
	friendId: {type: String, ref: 'User'},
	Approved: {type: Boolean, default: false}
});

module.exports = friendSchema;