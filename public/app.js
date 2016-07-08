'use strict';

/**
 * @ngdoc overview
 * @name alicalculatorApp
 * @description
 * # alicalculatorApp
 *
 * Main module of the application.
 */
angular.module('imp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("main", {
                url: "/",
                templateUrl: "view/main.html",
                controller: "MainCtrl",
                controllerAs: "ctrl"
            })
            .state("main.dashboard", {
                url: "dashboard",
                templateUrl: "view/dashboard/dashboard.html",
                controller: "DashboardCtrl",
                controllerAs: "ctrl"

            })
            .state("main.add", {
                url: "add_driver",
                params: {
                    driverId : null
                },
                templateUrl: "view/dashboard/add-driver.html",
                controller: "AddCtrl",
                controllerAs: "ctrl"

            });

        $urlRouterProvider.otherwise('/dashboard');

    }).run(['$rootScope', '$window',
    function($rootScope, $window) {

        $rootScope.user = {};

        $window.fbAsyncInit = function() {
            // Executed when the SDK is loaded

            FB.init({

                /*
                 The app id of the web app;
                 To register a new app visit Facebook App Dashboard
                 ( https://developers.facebook.com/apps/ )
                 */

                appId: '1629686067291015',

                /*
                 Adding a Channel File improves the performance
                 of the javascript SDK, by addressing issues
                 with cross-domain communication in certain browsers.
                 */

                channelUrl: 'app/channel.html',

                /*
                 Set if you want to check the authentication status
                 at the start up of the app
                 */

                status: true,

                /*
                 Enable cookies to allow the server to access
                 the session
                 */

                cookie: true,

                /* Parse XFBML */

                xfbml: true
            });


        };

        (function(d){
            // load the Facebook javascript SDK

            var js,
                id = 'facebook-jssdk',
                ref = d.getElementsByTagName('script')[0];

            if (d.getElementById(id)) {
                return;
            }

            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "//connect.facebook.net/en_US/all.js";

            ref.parentNode.insertBefore(js, ref);

        }(document));

    }]);