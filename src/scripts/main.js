var timelineApp = angular.module("timelineApp", [])

// Inital config
timelineApp.run(["$rootScope", function($rootScope) {
    var root = {
        appTitle: "Timeline Prototype"
    }
    
    $rootScope.root = root;
}]);













