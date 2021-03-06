﻿'use strict';

angular.module('app').directive('wwaInventory',
    ['dataService',
    function (dataService) {
        return {
            templateUrl: 'views/wwaInventoryTemplate.html',
            link: function (scope, el, attrs) {
                dataService.getLocation(scope.item.widgetSettings.id)
                .then(function (data) {
                    scope.selectedLocation = data;
                });
            }
        };
    }]);
