(function () {
    'use strict';
    angular.module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$state'];

    function DashboardController($state) {
        var vm = this;
    }

})();