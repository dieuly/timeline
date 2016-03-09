/* global timelineApp */
/* global dataSource */
// Todo: Maybe sound can be used as embed code as well
// If has time: create embed code generator for sound and video
'use strict';
timelineApp.controller("timelineController", ["$scope", "$sce", function($scope, $sce) {
    
    // Preprocessing datasource
    
    function generateItemsArray(orgArray) {
        return orgArray.filter(function(item) {
            return item !== "";
        }).map(function(str) {
            var isVideo = str.indexOf("<iframe") > -1;
            if (isVideo) {
                str = $sce.trustAsHtml(str);
            }
            return {
                isVideo: isVideo,
                src: str, 
            };
        });
    }
    
    dataSource = dataSource.map(function(item) {
        item.title = item.datetime + " " + item.title;
        item.contents = generateItemsArray([item.firstItem, item.secondItem, item.thirdItem]);
        item.otherContents = item.contents.slice(1);
        item.hasSingleOtherContent == item.otherContents.length === 1;
        return item;
    });
    
    $scope.events = dataSource;
    console.log($scope.events);
    
    // Mock event for ng-repeat
    // var numberOfEvent = 5;
    // var eventMocks = new Array(numberOfEvent);
    // $scope.events = eventMocks;
    // for (var i = 0; i < eventMocks.length; i ++) {
    //     let isLongText = i % 2 === 0;
    //     let text = "";
    //     if (isLongText) {
    //        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit eleifend risus, quis finibus nisi vulputate sit amet. Pellentesque tempor, lacus sit amet vehicula rhoncus, odio felis mollis velit, sed semper risus diam vitae nulla. Donec lacinia bibendum augue ut sodales. Proin commodo vulputate libero, ut convallis neque accumsan nec. Donec luctus risus nulla, imperdiet sagittis lectus fermentum ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices tellus turpis, sed congue est convallis non. Praesent sit amet ultrices nunc, vitae volutpat ante. Duis eget purus sed mi ornare varius. Vestibulum congue fermentum est, eu facilisis lorem ornare vitae.";
    //     } else {
    //         text = "Duis sed lectus ac sem feugiat volutpat. Nullam tempor id eros ut vulputate. Duis sed lectus ac sem feugiat volutpat. Nullam tempor id eros ut vulputate. Quisque vehicula risus quis felis porta, a dapibus sem vulputat";
    //     }
    //     eventMocks[i] = {
    //         title: "1111 Whatever",
    //         hasSingleItem: i % 2 === 0,
    //         isLongText: isLongText,
    //         text: text
    //     }
    // } 
    
    $scope.slickConfig = {
        enabled: true,
        draggable: true,  
        autoplaySpeed: 3000,
        slidesToShow: 3,
        infinite: true,
        method: {},
        event: {
            beforeChange: function (event, slick, currentSlide, nextSlide) {
            },
            afterChange: function (event, slick, currentSlide, nextSlide) {
            }
        }
    };
    
    // Single open state view models
    $scope.isSingleOpen = false;
    
    $scope.openSingleItem = function($event) {
        // if (!$scope.isSingleOpen) {
        //     $scope.isSingleOpen = true;
        // }
        // var currentSlideIndex = $event.currentTarget.attributes["data-slick-index"].nodeValue;
        // console.log(currentSlideIndex);
    }
    
    $scope.closeSingleItem = function() {
        $scope.isSingleOpen = false;
    }
}]);