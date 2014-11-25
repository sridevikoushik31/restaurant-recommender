'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	User = mongoose.model('User'),
	_ = require('lodash');


/**
 * Show the current User
 */
exports.read = function(req, res) {
	console.log("heyyyyyyyyyyyy");
	console.log(req.user);
	res.jsonp(req.user);
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
	User.findById(id).populate('user', 'displayName').exec(function(err, user) {
		if (err) return next(err);
		if (! user) return next(new Error('Failed to load User ' + id));
		req.user = user ;
		next();
	});
};

