'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).
		state('home_data_page', {
			url: '/homeie',
			templateUrl: 'modules/core/views/home_second.client.view.html'
		}).
		state('data_page', {
			url: '/show_data',
			templateUrl: 'modules/core/views/home_user.client.view.html'
		})

		;
	}
]);