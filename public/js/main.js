angular
    .module('alurapic', ['minhasDiretivas', 'ngAnimate','meusFiltros', 'ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
    
        $routeProvider
            .when('/fotos', {
                templateUrl: 'partials/principal.html',
                controller: 'FotosController'
            })
            .when('/nova', {
                templateUrl: 'partials/foto.html',
                controller: 'FotoController'
            })
            .when('/fotos/edit/:fotoId', {
                templateUrl: 'partials/foto.html',
                controller: 'FotoController'
            })
            .otherwise({redirectTo: '/fotos'});
    });