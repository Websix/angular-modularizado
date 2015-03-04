(function () {
    'use strict';

    /**
     * Config for the router
     */
    angular.module('app')
        .run(
            ['$rootScope', '$state', '$stateParams',
                function ($rootScope, $state, $stateParams) {
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;
                }
            ]
    )
        .config(
            ['$stateProvider', '$urlRouterProvider', '$locationProvider',
                function ($stateProvider, $urlRouterProvider, $locationProvider) {

                    $locationProvider.html5Mode(true);

                    $urlRouterProvider
                        .otherwise("/admin");
                    $stateProvider
                        .state('admin', {
                            abstract: true,
                            url: '/admin',
                            views: {
                                '': {
                                    templateUrl: 'templates/admin.html',
                                    controller: 'AppController',
                                    controllerAs: 'app'
                                },
                                'nav@admin': {
                                    templateUrl: 'modules/admin/nav/nav.html',
                                    controller: 'NavController',
                                    controllerAs: 'vm'
                                },
                                'footer@admin': {
                                    templateUrl: 'templates/footer.html'
                                }
                            }
                        })
                        .state('main', {
                            url: "",
                            abstract: true,
                            templateUrl: 'templates/home.html',
                            controller: 'AppController',
                            controllerAs: 'app'
                        });
                }
            ]
    );
})();