'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	User = mongoose.model('User'),
	SimilarUser = mongoose.model('SimilarUser'),
	_ = require('lodash');


/**
 * Show the current User
 */
exports.read = function(req, res) {
	// console.log("heyyyyyyyyyyyy");
	// console.log(req);
	// console.log("heyyyyyyyyyyyy");
	// console.log("heyyyyyyyyyyyy typeof "+typeof req.user);
	// console.log("heyyyyyyyyyyyy typeof "+req.user['user_id']);

	console.log("heyyyyyyyyyyyy");

	// console.log(req.user.votes);

	console.log(req.user.toObject()['user_id']);
	var user_id=req.user.toObject()['user_id']
	console.log(user_id);

	SimilarUser.find({similar_user: 'jVhEtuXwwRZgjaLti7Lecg'}).exec(function(err, users) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log('response!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! '+users);
			res.jsonp({hey :users});
		}
	});

	// res.jsonp(req.user);
};

/**
 * Update a User
 */
exports.update = function(req, res) {
	var user = req.user ;

	user = _.extend(user , req.body);

	user.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(user);
		}
	});
};

/**
 * Delete an User
 */
exports.delete = function(req, res) {
	var user = req.user ;

	user.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(user);
		}
	});
};

/**
 * List of Users
 */
exports.list = function(req, res) { 
	User.find().sort('-created').populate('user', 'displayName').exec(function(err, users) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(users);
		}
	});
};

/**
 * User middleware
 */
exports.userByID = function(req, res, next, id) { 
	console.log("hererrerrerer  "+id);
	User.findOne({name: id}).populate('user').exec(function(err, user) {
		if (err) return next(err);
		if (! user) return next(new Error('Failed to load User ' + id));
		console.log("user id,,,,,,,,,,,,,,, "+user.toObject()['user_id'])
		req.user = user ;
		next();
	});
};

