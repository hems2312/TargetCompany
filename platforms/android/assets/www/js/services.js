angular.module('directory.services', ['ngResource'])

    .factory('CompanyListService', function ($resource) {
        return $resource('https://api.myjson.com/bins/2ggcs/', {});
    });