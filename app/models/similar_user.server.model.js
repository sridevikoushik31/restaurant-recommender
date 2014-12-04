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
	},
	user_id: {
		type: String,
		// ref: 'User'
	}
},  {collection: 'similarUser'});

SimilarUserSchema.statics.findSimilarUsers = function(userId){
	return this.findOne({user_id: userId});
}

mongoose.model('SimilarUser', SimilarUserSchema);