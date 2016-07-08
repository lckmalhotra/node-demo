'use strict';

/**
 * @ngdoc function
 * @name alicalculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alicalculatorApp
 */
angular.module('imp')
    .controller("DashboardCtrl", ['$scope','$http','$state',
        function ($scope,$http,$state) {

            var ctrl = this;
            var removeListeners = {};

            ctrl.drivers = {};

            ctrl.getDrivers = function(){
                // Simple GET request example:
                $http({
                    method: 'GET',
                    url: '/drivers'
                }).then(function successCallback(response) {
                    ctrl.drivers = response.data;
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            };
            
            ctrl.getDrivers();

            ctrl.removeDriver = function(id){
              $http({
                  method: 'DELETE',
                  url: '/drivers/'+id
              }).then(function(response){
                  ctrl.getDrivers();
              },function(){})
            };

            ctrl.editDriver = function(id){
                $state.go('main.add',{ driverId : id });
            };

            // will destroy the Listeners
            $scope.$on('$destroy', function () {
                for (var key in removeListeners) {
                    if (removeListeners.hasOwnProperty(key) && (typeof removeListeners[key] === "function")) {
                        removeListeners[key]();
                    }
                }
            });
        }]);
