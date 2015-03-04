(function () {
    'use strict';
    angular.module('app.home')
        .config(states);

    states.$inject = ['$stateProvider'];

    function states($stateProvider) {
        $stateProvider
            .state('admin.home', {
                url: '/home',
                templateUrl: 'modules/admin/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                settings: {
                    title: 'Home',
                    icon: 'glyphicon-th',
                    authenticated: true,
                    order: 2,
                    parent: false,
                    color: 'text-info-dker'
                }
            });
    }
})();