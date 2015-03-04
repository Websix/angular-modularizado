(function () {
    'use strict';
    angular.module('app.core')
        .factory('RouterFactory', RouterFactory);

    RouterFactory.$inject = ['$state'];

    function RouterFactory($state) {

        console.log($state.current);

        var service = {
            getStates: getStates,
            getMenus: getMenus
        };

        return service;

        function getStates() {
            return $state.get();
        }

        function getMenus() {
            var menus = mount();
            return menus;
        }

        function mount() {

            var router = getStates();
            var sortable;
            var ordered = {};
            var menus = [];


            for (var i in router) {
                var s = router[i];

                if (s.settings && s.settings.order && !s.settings.parent) {
                    var rota = {};
                    rota.settings = s.settings;
                    rota.name = s.name;
                    rota.haveChildrens = false;
                    rota.childrens = [];
                    menus.push(rota);
                }
            }

            for (var j in menus) {
                var m = menus[j];
                for (var y in router) {
                    var sc = router[y];

                    if (sc.settings && sc.settings.order && sc.settings.parent === m.name) {
                        m.haveChildrens = true;
                        m.childrens.push({
                            settings: sc.settings,
                            name: sc.name,
                            haveChildrens: false
                        });
                    }
                }

                m.childrens.sort(function (a, b) {
                    return a.settings.order - b.settings.order;
                });
            }

            menus.sort(function (a, b) {
                return a.settings.order - b.settings.order;
            });

            return menus;
        }

    }
})();