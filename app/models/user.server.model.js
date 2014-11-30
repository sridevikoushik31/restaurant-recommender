'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill User name',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
},  {collection: 'user'});

mongoose.model('User', UserSchema);