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
						  window.users = data
				          // window.users = 'datatatatatat';
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
      scope: {
        users: '@'
      },
      link: function (scope, element, attrs) {
        //Set margins, width, and height
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
          width = 480 - margin.left - margin.right,
          height = 360 - margin.top - margin.bottom;
          




        //Create the d3 element and position it based on margins
        // var svg = d3.select(element[0])
        //   .append("svg")
        //   .attr('width', width + margin.left + margin.right)
        //   .attr('height', height + margin.top + margin.bottom)
        //   // .append("g")
        //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
        // //Create the scales we need for the graph
        // var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
        // var y = d3.scale.linear().range([height, 0]);
 
        // //Create the axes we need for the graph
        // var xAxis = d3.svg.axis()
        //     .scale(x)
        //     .orient("bottom");
 
        // var yAxis = d3.svg.axis()
        //     .scale(y)
        //     .orient("left")
        //     .ticks(10);
        // //Render graph based on 'data'
        scope.render = function(data) {


// var m = [20, 120, 20, 120],
//     w = 1280 - m[1] - m[3],
//     h = 800 - m[0] - m[2],
//     i = 0,
//     root;

// var tree = d3.layout.tree()
//     .size([h, w]);



// var treeData = [
//   {
//     "name": "Top Level",
//     "parent": "null",
//     "children": [
//       {
//         "name": "Level 2: A",
//         "parent": "Top Level",
//         "children": [
//           {
//             "name": "Son of A",
//             "parent": "Level 2: A"
//           },
//           {
//             "name": "Daughter of A",
//             "parent": "Level 2: A"
//           }
//         ]
//       },
//       {
//         "name": "Level 2: B",
//         "parent": "Top Level"
//       }
//     ]
//   }
// ];



// var margin = {top: 20, right: 120, bottom: 20, left: 120},
//  width = 960 - margin.right - margin.left,
//  height = 500 - margin.top - margin.bottom;

var formed_data = []
for(var i=0;i<window.users.hey.length;i++){ 
	formed_data.push({"name": window.users.hey[i].name, "parent": window.username })
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


// var treeData = [
//   {
//     "name": window.username,
//     "parent": "null",
//     "children": [
//       {
//         "name": "Level 2: A",
//         "parent": "Top Level",
//         "children": [
//           {
//             "name": "Son of A",
//             "parent": "Level 2: A"
//           },
//           {
//             "name": "Daughter of A",
//             "parent": "Level 2: A"
//           }
//         ]
//       },
//       {
//         "name": "Level 2: B",
//         "parent": "Top Level"
//       }
//     ]
//   }
// ];

// ************** Generate the tree diagram  *****************
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













// var diagonal = d3.svg.diagonal()
//     .projection(function(d) { return [d.y, d.x]; });

// var vis = d3.select("#body").append("svg:svg")
//     .attr("width", w + m[1] + m[3])
//     .attr("height", h + m[0] + m[2])
//   .append("svg:g")
//     .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

// d3.json("flare.json", function(json) {
//   root = json;
//   root.x0 = h / 2;
//   root.y0 = 0;

//   function toggleAll(d) {
//     if (d.children) {
//       d.children.forEach(toggleAll);
//       toggle(d);
//     }
//   }

//   // Initialize the display to show a few nodes.
//   root.children.forEach(toggleAll);
//   toggle(root.children[1]);
//   toggle(root.children[1].children[2]);
//   toggle(root.children[9]);
//   toggle(root.children[9].children[0]);

//   update(root);
// });






// function update(source) {
//   var duration = d3.event && d3.event.altKey ? 5000 : 500;

//   // Compute the new tree layout.
//   var nodes = tree.nodes(root).reverse();

//   // Normalize for fixed-depth.
//   nodes.forEach(function(d) { d.y = d.depth * 180; });

//   // Update the nodes…
//   var node = vis.selectAll("g.node")
//       .data(nodes, function(d) { return d.id || (d.id = ++i); });

//   // Enter any new nodes at the parent's previous position.
//   var nodeEnter = node.enter().append("svg:g")
//       .attr("class", "node")
//       .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
//       .on("click", function(d) { toggle(d); update(d); });

//   nodeEnter.append("svg:circle")
//       .attr("r", 1e-6)
//       .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

//   nodeEnter.append("svg:text")
//       .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
//       .attr("dy", ".35em")
//       .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
//       .text(function(d) { return d.name; })
//       .style("fill-opacity", 1e-6);

//   // Transition nodes to their new position.
//   var nodeUpdate = node.transition()
//       .duration(duration)
//       .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

//   nodeUpdate.select("circle")
//       .attr("r", 4.5)
//       .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

//   nodeUpdate.select("text")
//       .style("fill-opacity", 1);

//   // Transition exiting nodes to the parent's new position.
//   var nodeExit = node.exit().transition()
//       .duration(duration)
//       .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
//       .remove();

//   nodeExit.select("circle")
//       .attr("r", 1e-6);

//   nodeExit.select("text")
//       .style("fill-opacity", 1e-6);

//   // Update the links…
//   var link = vis.selectAll("path.link")
//       .data(tree.links(nodes), function(d) { return d.target.id; });

//   // Enter any new links at the parent's previous position.
//   link.enter().insert("svg:path", "g")
//       .attr("class", "link")
//       .attr("d", function(d) {
//         var o = {x: source.x0, y: source.y0};
//         return diagonal({source: o, target: o});
//       })
//     .transition()
//       .duration(duration)
//       .attr("d", diagonal);

//   // Transition links to their new position.
//   link.transition()
//       .duration(duration)
//       .attr("d", diagonal);

//   // Transition exiting nodes to the parent's new position.
//   link.exit().transition()
//       .duration(duration)
//       .attr("d", function(d) {
//         var o = {x: source.x, y: source.y};
//         return diagonal({source: o, target: o});
//       })
//       .remove();

//   // Stash the old positions for transition.
//   nodes.forEach(function(d) {
//     d.x0 = d.x;
//     d.y0 = d.y;
//   });
// }

// // Toggle children.
// function toggle(d) {
//   if (d.children) {
//     d._children = d.children;
//     d.children = null;
//   } else {
//     d.children = d._children;
//     d._children = null;
//   }
// }






























        	// var svg = d3.select(element[0]).append('p').text('hey sridevi i am fine!!!!!!!!!!!')
         //  .append("svg")
         //  // .attr('width', width + margin.left + margin.right)
         //  // .attr('height', height + margin.top + margin.bottom)
         //  // .append("g")
         //    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
 
        	// svg.append('p').text('hey sridevi how are u doing??? ')
        	// console.log(window.users);
        	// // console.log(data)
        	// console.log('printed datatatatatatat..........................');
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
