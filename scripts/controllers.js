/* global timelineApp */
timelineApp.controller("timelineController", ["$scope", function($scope) {
    
    // Mock event for ng-repeat
    var numberOfEvent = 10;
    var eventMocks = new Array(numberOfEvent);
    for (var i = 0; i < eventMocks.length; i ++) 
        eventMocks[i] = "Foo" + i;
    console.log(eventMocks);
    $scope.events = eventMocks
}]);