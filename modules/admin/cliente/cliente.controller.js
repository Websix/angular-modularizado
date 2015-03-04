(function () {
    'use strict';
    angular.module('app.cliente')
        .controller('ClienteController', ClienteController);

    ClienteController.$inject = ['$state', 'clientes', '$http'];

    function ClienteController($state, clientes, $http) {
        var vm = this;

        vm.clientes = clientes;

        vm.cep = '';


        vm.buscar = buscar;
        vm.endereco = null;


        function buscar() {
            vm.endereco = null;
            $http.get('http://cep.correiocontrol.com.br/' + vm.cep + '.json')
                .success(function (ret) {
                    console.log(ret);
                    vm.endereco = ret;
                }).error(function (err) {
                    console.log(err);
                });
        }






    }

})();