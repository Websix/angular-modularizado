(function () {
    'use strict';
    angular.module('app.cliente')
        .config(states);

    states.$inject = ['$stateProvider'];

    function states($stateProvider) {
        $stateProvider
            .state('admin.cliente', {
                url: '/cliente',
                templateUrl: 'modules/admin/cliente/cliente.html',
                controller: 'ClienteController',
                controllerAs: 'vm',
                settings: {
                    title: 'Cliente',
                    icon: 'glyphicon-th',
                    authenticated: true,
                    order: 3,
                    parent: false,
                    color: 'text-info-dker'
                },
                resolve: {
                    clientes: function () {
                        return [{
                            name: 'RUbens'
                        }, {
                            name: 'Joao'
                        }];
                    }
                }
            });
    }
})();