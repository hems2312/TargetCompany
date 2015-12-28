angular.module('directory.controllers', [])

    .controller('CompanyListCtrl',['$scope', 'CompanyListService','$ionicLoading','$timeout', function ($scope, CompanyListService, $ionicLoading, $timeout) {
        $scope.searchKey = "";
        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.companies = CompanyListService.query({where: $scope.searchKey});
        }
        $scope.search = function () {
            $scope.companies = CompanyListService.query({where: $scope.searchKey});
        }
        $timeout(function () {
            $ionicLoading.hide();
            $scope.companies = CompanyListService.query();
        }, 3500);
        
    }])

    .controller('CompanyDetailCtrl', ['$scope','$stateParams', 'CompanyListService',function($scope, $stateParams, CompanyListService) {
        CompanyListService.query(function(response) {
                var company = response.filter(function (el) {
                    return el.companyID == $stateParams.companyID;
                });
                $scope.company = company[0];
        });
    }]);