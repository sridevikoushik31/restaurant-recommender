'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * User Schema
 */
var PredictedUserRatingsSchema = new Schema({
	similar_user: {
		type: String,
	},
	user_id: {
		type: Schema.ObjectId,
		// ref: 'User'
	}
},  {collection: 'predicted_ratings'});

PredictedUserRatingsSchema.statics.findSimilarUsers = function(userId){
	return this.findOne({user_id: userId});
}

mongoose.model('PredictedUserRatings', PredictedUserRatingsSchema);