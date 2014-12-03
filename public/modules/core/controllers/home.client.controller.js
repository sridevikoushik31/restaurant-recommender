'use strict';


// var myModule = angular.module('myModule', []);
// myModule.factory('mySharedService', function($rootScope) {
//     var sharedService = {};
    
//     sharedService.message = '';

//     sharedService.prepForBroadcast = function(msg) {
//         this.message = msg;
//         this.broadcastItem();
//     };

//     sharedService.broadcastItem = function() {
//         $rootScope.$broadcast('handleBroadcast');
//     };
//     return sharedService;
// });

// var demoModule = angular.module(angular.module('mean'))
// demoModule.factory('mySharedService', function($rootScope) {
//     var sharedService = {};

//     sharedService.sharedmessage  = '';

//     sharedService.prepForPublish = function(msg) {
//         this.sharedmessage  = msg;
//         this.publishItem();
//     };

//     sharedService.publishItem = function() {
//         $rootScope.$broadcast('handlePublish');
//     };

//     return sharedService;
// });




function HomeController($scope, $location ) {
			// var user = {}
			// $scope.user1 = user;
		$scope.show_next_page = function(name) {
			$scope.hey = 'sridevi'
			
			// user.name = name;
			// sharedService.message='sridevi kanagal';
			// Redirect after save
			// user.$save(function(response) {
				// console.log("hello sridevi........."+name);
				// $location.path('users/' + name);
				console.log("hello set the name sridevi........."+name);
				// $location.path('users/' + name);
				$location.path('home'+name);

		};

		$scope.show_similarity = function(zip_code, cuisine) {
				console.log("hello set the name sridevi........."+zip_code);
				console.log(cuisine);
				console.log('logging the message nowwwwwww ');
				console.log($scope.hey);
				// console.log($scope.user.name);
				$location.path('users/' + 'Robert');
				// $location.path('home');
				// Clear form fields
				// $scope.name = '';
			// }, function(errorResponse) {
				// $scope.error = errorResponse.data.message;
			// });
		}
}

HomeController.$inject = ['$scope', '$location'];

// angular.module('core').controller('HomeController', ['$scope','$location', 'mySharedService'
// 	function($scope, $location, sharedService) {
// 		// This provides Authentication context.
// 		// $scope.authentication = Authentication;
// 	// }
// 		$scope.show_next_page = function(name) {
// 			$scope.user = user;
// 			user.name = name;
// 			// var user = new Users ({
// 				// name: this.name
// 			// });
// 			sharedService.message='sridevi kanagal';

// 			// Redirect after save
// 			// user.$save(function(response) {
// 				// $scope.name = name
// 				// $scope.user.name = name;
// 				console.log("hello set the name sridevi........."+name);

// 				// $location.path('users/' + name);
// 				$location.path('home');

// 				// Clear form fields
// 				// $scope.name = '';
// 			// }, function(errorResponse) {
// 				// $scope.error = errorResponse.data.message;
// 			// });
// 		};


// 		$scope.show_similarity = function(zip_code, cuisine) {
// 			// var user = new Users ({
// 				// name: this.name
// 			// });

// 			// Redirect after save
// 			// user.$save(function(response) {
// 				// $scope.name = name
// 				console.log("hello set the name sridevi........."+zip_code);
// 				console.log(cuisine);
// 				console.log(sharedService);
// 				console.log($scope.user.name);

// 				// $location.path('users/' + name);
// 				$location.path('home');

// 				// Clear form fields
// 				// $scope.name = '';
// 			// }, function(errorResponse) {
// 				// $scope.error = errorResponse.data.message;
// 			// });
// 		}
// 	}
// ]);
