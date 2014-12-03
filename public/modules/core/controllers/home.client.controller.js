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




function HomeController($scope, $location, $http ) {
			// var user = {}
			// $scope.user1 = user;
		$scope.show_next_page = function(name) {
			$scope.hey = 'sridevi'
			
			// user.name = name;
			// sharedService.message='sridevi kanagal';
			// Redirect after save
			window.username = name;
			// user.$save(function(response) {
				// console.log("hello sridevi........."+name);
				// $location.path('users/' + name);
				console.log("hello set the name sridevi........."+name);
				// $location.path('users/' + name);
				// $location.path('home'+name);
				$location.path('/homeie');
				// $location.path('users/' + 'Robert');



		};

		$scope.show_similarity = function(zip_code, cuisine) {
				console.log("nwe pageggegeg........."+zip_code);
				console.log(cuisine);
				console.log('logging the message nowwwwwww ');
				console.log(window.username);
				// console.log($scope.user.name);
				// $location.path('users/' + 'Robert');
				$http
				    .get('/users/'+window.username, {
				        params: {
				            'zip_code': zip_code,
				            'cuisine': cuisine
				        }
				     })
				     .success(function (data,status) {
				          $scope.users = data
				          console.log('set scope just now to '+JSON.stringify(data));
				     	  $location.path('users/' + 'Robert');
				     });


				// $location.path('home');
				// Clear form fields
				// $scope.name = '';
			// }, function(errorResponse) {
				// $scope.error = errorResponse.data.message;
			// });
		}
}

HomeController.$inject = ['$scope', '$location', '$http'];

angular.module('core').directive('newd', [
function (scope, element, attrs) {
    return {
      restrict: 'E',
      // scope: {
      //   users: '='
      // },
      link: function (scope, element, attrs) {
        //Set margins, width, and height
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
          width = 480 - margin.left - margin.right,
          height = 360 - margin.top - margin.bottom;
          
        //Create the d3 element and position it based on margins
        var svg = d3.select(element[0])
          .append("svg")
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
        //Create the scales we need for the graph
        var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
        var y = d3.scale.linear().range([height, 0]);
 
        //Create the axes we need for the graph
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");
 
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(10);
        
        //Render graph based on 'data'
        scope.render = function(data) {
        	console.log(data)
        	console.log('printed datatatatatatat..........................');
          
        }
        
        //Watch 'data' and run scope.render(newVal) whenever it changes
        //Use true for 'objectEquality' property so comparisons are done on equality and not reference
        scope.$watch('users', function(){
          scope.render(scope.$parent.users);
        }, true);  
      }
    };
  }


	])

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
