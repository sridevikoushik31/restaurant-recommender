'use strict';


angular.module('core').controller('HomeController', ['$scope','$location',
	function($scope, $location) {
		// This provides Authentication context.
		// $scope.authentication = Authentication;
	// }
		$scope.show_next_page = function(name) {
			// var user = new Users ({
				// name: this.name
			// });

			// Redirect after save
			// user.$save(function(response) {
				console.log("hello sridevi........."+name);
				$location.path('users/' + name);

				// Clear form fields
				// $scope.name = '';
			// }, function(errorResponse) {
				// $scope.error = errorResponse.data.message;
			// });
		};
	}
]);