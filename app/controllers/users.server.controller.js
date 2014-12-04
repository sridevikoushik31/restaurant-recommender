'use strict';
// var Q = require('q');

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	User = mongoose.model('User'),
	SimilarUser = mongoose.model('SimilarUser'),
	PredictedUserRatings = mongoose.model('PredictedUserRatings'),
	_ = require('lodash');


/**
 * Show the current User
 */
exports.read = function(req, res) {
	// console.log(req.user.toObject()['user_id']);
	// console.log(req.user);
	var user_id=req.user.toObject()['user_id']
	// console.log("user id is" + user_id);
	var main_users1=[];

	SimilarUser.find({'user_id': user_id}).exec(function(err, users) {
		if (err) {
			console.log(err)
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			// console.log('heyheyhey '+ users);
			// users=[users]
			var user_ids = users.map(function(user){return user.similar_user;});
			// console.log('user ids    ===== '+ user_ids);
			User.find({user_id: {$in : user_ids }}).exec(function(err, main_users) {
				// console.log('main users    ===== '+ main_users);
				var return_user_details=[];
				// content = 
				for(var user =0; user < users.length; user++){
					for(var main_u = 0; main_u < main_users.length;main_u++){
						// console.log(users[user].similar_user);
						// console.log(main_users[main_u]);
						if(users[user].similar_user == main_users[main_u].toObject()['user_id']){
							var content = {'similarity_coeff': users[user].toObject()['similarity_coeff'], 'name': main_users[main_u].name}
							return_user_details.push(content)
						}
					}
				}
				PredictedUserRatings.find({'user.user_id': '1BW2HC851fJKPfJeQxjkTA '}).exec(function(err, business) {
					if (err){
						console.log(err)
					} else{
						console.log('found_busines%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
						console.log(business)
					}
				});

				console.log('made calllll&&&&&&&&&&&&&&');
				console.log(return_user_details);
				res.jsonp({hey :return_user_details});

			});
}

		// var prom =  Q.promise(function (resolve) {
		// 		for(var i=0;i<users.length;i++){
		// 			var new_user = users[i];
		// 			User.find({user_id: ['jVhEtuXwwRZgjaLti7Lecg'}).exec(function(err, main_users) {

		// 			if (err) {
		// 				return res.status(400).send({
		// 				message: errorHandler.getErrorMessage(err)});
		// 			}
		// 			else {
		// 				var contents = {'similarity_coeff': new_user.toObject()['similarity_coeff'], 'name': main_users.toObject()['name']}
		// 				main_users1.push(contents)
		// 				console.log(JSON.stringify(contents));
		// 				console.log("main users "+ main_users1);
		// 				   }
		// 			});
		// 		}
		// 	});

		// 	prom.then(function() {
		// 			console.log('so farrrrrr '+main_users1);
		// 			console.log('FINALLLLLLYYYYYYYYYYYYYY '+main_users1);
		// 			res.jsonp({hey :main_users1});
		// 		}, function(reason){ console.log(reason)});
		// 	}

		});
		
	// });

		
	// res.jsonp(req.user);
}

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

