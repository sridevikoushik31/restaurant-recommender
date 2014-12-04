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
				// window.username=escape('-4ld1qpaBNLocSBe85jWnw');
				// console.log($scope.user.name);
				// $location.path('users/' + 'Robert');
				$http
				    .get('/users/'+window.username, {
				        params: {
				            'zip_code': zip_code,
				            'cuisine': cuisine
				        },
				        // headers: 
				        	// {'Content-Type': 'application/x-www-form-urlencoded'}
				        
				     })
				     .success(function (data,status) {
						  window.users = data.hey
						  window.restaurants=data.restaurants
						  $scope.restaurants = data.restaurants
				          // window.users = 'datatatatatat';
				          console.log('set scope just now to '+JSON.stringify(data));
				     	  $location.path('/show_data');
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
      scope: {
        users: '@'
      },
      link: function (scope, element, attrs) {
        //Set margins, width, and height
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
          width = 480 - margin.left - margin.right,
          height = 360 - margin.top - margin.bottom;
          

        scope.render = function(data) {

var formed_data = []
for(var i=0;i<window.users.length;i++){ 
	formed_data.push({"name": window.users[i].name, "parent": window.username })
	// console.log(window.users.hey[i].similarity_coeff + " "+ window.users.hey[i].name)
}
console.log('formed datatatatatat below................................')
console.log(formed_data)
var treeData = [{

 "name": window.username,
    "parent": "null",
    "children": formed_data
}
]

var margin = {top: 20, right: 120, bottom: 20, left: 120},
 width = 960 - margin.right - margin.left,
 height = 500 - margin.top - margin.bottom;
 
var i = 0;

var tree = d3.layout.tree()
 .size([height, width]);

var diagonal = d3.svg.diagonal()
 .projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("newd").append("svg")
 .attr("width", width + margin.right + margin.left)
 .attr("height", height + margin.top + margin.bottom)
  .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var root = treeData[0];
console.log('rendering the treeeeee now!!!!!!!!!!!!')
  
update(root);

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
   links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 180; });

  // Declare the nodesâ€¦
  var node = svg.selectAll("g.node")
   .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter the nodes.
  var nodeEnter = node.enter().append("g")
   .attr("class", "node")
   .attr("transform", function(d) { 
    return "translate(" + d.y + "," + d.x + ")"; });

  nodeEnter.append("circle")
   .attr("r", 10)
   .style("fill", "#fff");

  nodeEnter.append("text")
   .attr("x", function(d) { 
    return d.children || d._children ? -13 : 13; })
   .attr("dy", ".35em")
   .attr("text-anchor", function(d) { 
    return d.children || d._children ? "end" : "start"; })
   .text(function(d) { return d.name; })
   .style("fill-opacity", 1);

  // Declare the linksâ€¦
  var link = svg.selectAll("path.link")
   .data(links, function(d) { return d.target.id; });

  // Enter the links.
  link.enter().insert("path", "g")
   .attr("class", "link")
   .attr("d", diagonal);

}
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
