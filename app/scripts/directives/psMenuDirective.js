'use strict';

angular.module('psMenu').directive('psMenu', ['$timeout', function ($timeout) {
    return {
        scope:{

        },
        transclude: true,
        templateUrl: 'views/ps/psMenuTemplate.html',
        controller: 'psMenuController',
        link: function (scope, el, attr) {
            //used to automatically select the first item in the menu
            var item = el.find('.ps-selectable-item:first');
            //call timeout so the click event happens after the digest cycle
            $timeout(function () {
                item.trigger('click');
            });
        }
    };
}]);
