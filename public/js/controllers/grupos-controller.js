angular
    .module('alurapic')
    .controller('GruposController', ['$scope','$http',
                    function($scope, $http){
                        $scope.grupos = [];
                        $scope.mensagem = '';

                        
                        $http
                            .get('/v1/grupos')
                            .success(function (data){
                                        $scope.grupos=data;
                                    })
                            .error(function (erro){
                                        console.log(erro);
                                    });
                    }
               ]);