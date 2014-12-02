'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');

	// Users Routes
	app.route('/users')
		.get(users.list);

	app.route('/users/:userId')
		.get(users.read)
		// .put(users.update)
		// .delete(users.delete);

	// Finish by binding the User middleware
	app.param('userId', users.userByID);
};
