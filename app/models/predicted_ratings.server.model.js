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
	business_id: {
		type: String,
	}
},  {collection: 'predicted_ratings'});

PredictedUserRatingsSchema.statics.findSimilarUsers = function(userId){
	return this.findOne({user_id: userId});
}

mongoose.model('PredictedUserRatings', PredictedUserRatingsSchema);