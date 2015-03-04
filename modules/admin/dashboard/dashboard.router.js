(function () {
    'use strict';
    angular.module('app.dashboard')
        .config(states);

    states.$inject = ['$stateProvider'];

    function states($stateProvider) {
        $stateProvider
            .state('admin.dashboard', {
                url: '',
                templateUrl: 'modules/admin/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm',
                settings: {
                    title: 'Dashboard',
                    icon: 'glyphicon-th',
                    authenticated: true,
                    order: 1,
                    parent: false,
                    color: 'text-info-dker'
                }
            });
    }
})();