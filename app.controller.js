(function () {
    'use strict';
    angular.module('app')
        .controller('AppController', AppController);

    function AppController() {
        var vm = this;

        vm.name = 'Angular Mod';
    }
})();