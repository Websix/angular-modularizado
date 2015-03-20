# angular-modularizado
front Bootstrap, Angular UI Router

Skeleton using [AngularJs Guide Style](https://github.com/johnpapa/angular-styleguide) by John Papa

Thanks [John Papa](https://github.com/johnpapa) and [Awesome contributors](https://github.com/johnpapa/angular-styleguide/graphs/contributors) for this, make me learn clear and simple!

we fell in love @angularjs @websix

---------------------


###Steps  to add a module:###
* Create a folder in module directory (admin or public) ex:

 /modules/admin/newModule

* Create four files in the new folder:

newModule.controller.js newModule.html newModule.module.js newModule.router.js


- newModule.module.js
```javascript
    'use strict';

    angular.module('app.newModule', ['ui.router']);
```
- newModule.controller.js
```javascript
    'use strict';

    angular.module('app.newModule')
        .controller('NewModuleController', NewModuleController);

    NewModuleController.$inject = ['$state']; //if need injection

    function NewModuleController($state) {
        var vm = this;
        vm.title = 'Angular is Awesome'
    }
```
- newModule.html
```html
<div class="jumbotron">
    {{vm.title}}
</div>
```

- newModule.router.js
```javascript
'use strict';
    angular.module('app.newModule')
        .config(states);

    states.$inject = ['$stateProvider'];

    function states($stateProvider) {
        $stateProvider
            .state('admin.newmodule', {
                url: '/newmodule',
                templateUrl: 'modules/admin/newModule/newModule.html',
                controller: 'NewModuleController',
                controllerAs: 'vm',
                settings: {
                    title: 'New Module',
                    icon: 'glyphicon-th',
                    authenticated: false,
                    order: 1, //order to display
                    parent: false, //if is subnav add the parent state
                    color: 'text-info-dker'
                }
            });
    }
```

* Edit app.js to include newModule
```javascript
    'use strict';
    angular.module('app', [
        'ui.router',
        'app.core',
        'app.nav',
        'app.home',
        'app.cliente',
        'app.dashboard',
        'app.public.home',
        'app.newModule'
    ]);
```

* Add files to index.html
```html
    <!-- NewModule -->
    <script src="modules/admin/newModule/newModule.module.js"></script>
    <script src="modules/admin/newModule/newModule.controller.js"></script>
    <script src="modules/admin/newModule/newModule.router.js"></script>
```

* now new module is show on menu of http://localhost/admin