var timelineApp = angular.module("timelineApp", [
    "slickCarousel",
    "ngSanitize"
])

// Inital config
timelineApp.run(["$rootScope", function($rootScope) {
    var root = {
        appTitle: "Timeline Prototypeeee"
    }
    
    $rootScope.root = root;
}]);













