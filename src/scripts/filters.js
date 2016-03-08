/* global timelineApp */
'use strict';
timelineApp.filter("elipsiWhatever", [function($scope) {
    return function(input, limit) {
        limit = parseInt(limit);
 		if (!input) {
 			return "";
 		} 

 		if (input.length <= limit) {
 			 return input;
 		}

 		var shortenned = input.substring(0, limit - 3) + "...";
 		return shortenned;
 	};
}]);