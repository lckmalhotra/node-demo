'use strict';

/**
 * @ngdoc function
 * @name alicalculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alicalculatorApp
 */
angular.module('imp')
    .controller("AddCtrl", ['$scope','$http', '$stateParams','$state',
        function ($scope,$http,$stateParams,$state) {

            var ctrl = this;
            var removeListeners = {};
            ctrl.formData = {};
            ctrl.driverId = $stateParams.driverId || null;

            ctrl.getDriver = function(id){
                $http({
                    method: 'GET',
                    url: '/drivers/'+id
                }).then(function(response){
                    console.log(response.data);
                    ctrl.formData = response.data;
                },function(){})
            };

            if(ctrl.driverId){ctrl.getDriver(ctrl.driverId);}

            ctrl.addDrivers = function(data){
                // Simple GET request example:
                $http({
                    method: 'POST',
                    url: '/drivers',
                    data: JSON.stringify(data)
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    ctrl.formData = {};
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            };

            ctrl.editDrivers = function(data){
                // Simple GET request example:
                console.log(data);
                $http({
                    method: 'PUT',
                    url: '/drivers/' + data._id,
                    data: JSON.stringify(data)
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    ctrl.formData = {};
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
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
