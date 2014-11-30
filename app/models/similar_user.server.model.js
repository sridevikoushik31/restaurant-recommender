'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * User Schema
 */
var SimilarUserSchema = new Schema({
	similar_user: {
		type: String,
		default: '',
	},
	user_id: {
		type: Schema.ObjectId,
		ref: 'User'
	}
},  {collection: 'SimilarUser'});

Location.statics.findSimilarUsers = function(userId){
	return this.findOne({user_id: userId});
}

mongoose.model('SimilarUser', UserSchema);