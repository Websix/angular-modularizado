(function () {
    'use strict';
    angular.module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$state'];

    function HomeController($state) {
        var vm = this;
    }

})();