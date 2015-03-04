(function () {
    'use strict';
    angular.module('app.nav')
        .controller('NavController', NavController);

    NavController.$inject = ['RouterFactory'];

    function NavController(RouterFactory) {
        var vm = this;

        vm.title = 'NavController';
        vm.menus = RouterFactory.getMenus();
    }
})();