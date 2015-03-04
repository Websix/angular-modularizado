(function () {
    'use strict';
    angular.module('app', [
        'ui.router',
        'app.core',
        'app.nav',
        'app.home',
        'app.cliente',
        'app.dashboard',
        'app.public.home'
    ]);
})();