import angular from 'angular';

class MyController {
    constructor($scope) {
    };
};

angular.module('MyApp', [])
    .controller('MyController', MyController);
