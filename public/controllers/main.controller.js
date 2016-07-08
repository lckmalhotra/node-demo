'use strict';

/**
 * @ngdoc function
 * @name alicalculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alicalculatorApp
 */
angular.module('imp')
    .controller("MainCtrl", ['$scope',
        function ($scope) {

            var ctrl = this;
            var removeListeners = {};

            ctrl.a = "Anurag";

            // will destroy the Listeners
            $scope.$on('$destroy', function () {
                for (var key in removeListeners) {
                    if (removeListeners.hasOwnProperty(key) && (typeof removeListeners[key] === "function")) {
                        removeListeners[key]();
                    }
                }
            });
        }]);
