angular.module('directory', ['ionic', 'directory.controllers', 'directory.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('search', {
                url: '/search',
                templateUrl: 'templates/company-list.html',
                controller: 'CompanyListCtrl'
            })

            .state('companies', {
                url: '/companies/:companyID',
                templateUrl: 'templates/company-detail.html',
                controller: 'CompanyDetailCtrl'
            });

        $urlRouterProvider.otherwise('/search');

    });