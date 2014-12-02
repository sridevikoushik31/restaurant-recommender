'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');


  angular.module('ui.bootstrap').controller('AlertDemoCtrl', function ($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});


// angular.module('app', ['ui.bootstrap']).controller('CarouselDemoCtrl', function ($scope) {
//   $scope.myInterval = 3000;
//   $scope.slides = [
//     {
//       image: 'http://lorempixel.com/400/200/'
//     },
//     {
//       image: 'http://lorempixel.com/400/200/food'
//     },
//     {
//       image: 'http://lorempixel.com/400/200/sports'
//     },
//     {
//       image: 'http://lorempixel.com/400/200/people'
//     }
//   ];
//   console.log($scope.slides);
// });



ApplicationConfiguration.registerModule('carousel');
angular.module('carousel',  ['ui.bootstrap']).controller('CarouselDemoCtrl', ['$scope',
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
}]);



