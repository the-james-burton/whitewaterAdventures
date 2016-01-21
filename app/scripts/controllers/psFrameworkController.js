﻿'use strict';

angular.module('psFramework').controller('psFrameworkController', ['$scope', '$rootScope', '$window', '$timeout', '$location',
    function ($scope, $rootScope, $window, $timeout, $location) {
        $scope.isMenuVisible = true;
        $scope.isMenuButtonVisible = true;
        $scope.isMenuVertical = true;
        
        $scope.$on('ps-menu-item-selected-event', function (evt, data) {
            $scope.routeString = data.route;
            $location.path(data.route);
            checkWidth();
            broadcastMenuState();
        });

        $scope.$on('ps-menu-orientation-changed-event', function (evt, data) {
            $scope.isMenuVertical = data.isMenuVertical;
            //resize widget grid when switching menu orientation
            //when this event is called angular is already in the middle of a digest cycle so 
            //$timeout is used to trigger an apply after the current cycle finishes
            $timeout(function () {
                $($window).trigger('resize');
            }, 0);
        });

        $($window).on('resize.psFramework', function () {
            $scope.$apply(function () {
                checkWidth();
                broadcastMenuState();
            });
        });
        $scope.$on('$destroy', function () {
            $($window).off('resize.psFramework'); // remove the handler added earlier
        });

        var checkWidth = function () {
            //Math.max gets full width of viewport to take scrollbar into account
            var width = Math.max($($window).width(), $window.innerWidth);
            $scope.isMenuVisible = (width >= 768);
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        };

        $scope.menuButtonClicked = function () {
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
            //$scope.$apply();
        };

        var broadcastMenuState = function () {
            $rootScope.$broadcast('ps-menu-show', {
                show: $scope.isMenuVisible,
                isVertical: $scope.isMenuVertical,
                allowHorizontalToggle: !$scope.isMenuButtonVisible
            });
        };

        $timeout(function () {
            checkWidth();
        }, 0);
    }
]);