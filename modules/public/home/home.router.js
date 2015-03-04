(function () {
    'use strict';
    angular.module('app.public.home')
        .config(states);

    states.$inject = ['$stateProvider'];

    function states($stateProvider) {
        $stateProvider
            .state('main.home', {
                url: "/",
                template: '<h1>teste</h1>'
            });
    }
})();