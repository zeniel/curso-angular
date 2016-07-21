angular
    .module('alurapic')
    .controller('FotoController', ['$scope','$http', '$routeParams',
                    function($scope, $http, $routeParams){
                        $scope.foto = {};
                        $scope.mensagem = '';
                        
                        if($routeParams.fotoId){
                            $http
                                    .get('/v1/fotos/'+$routeParams.fotoId)
                                    .success(function(foto) {
                                        $scope.foto = foto;
                                    })
                                    .error(function(erro) {
                                        console.log(erro);
                                        $scope.mensagem = 'N"ao foi possĩvel obter a foto';
                                    })
                        }
                        
                        $scope.submeter = function () {
                            if($scope.formulario.$valid){
                                if($routeParams.fotoId){
                                    $http
                                        .put('/v1/fotos/'+ $scope.foto._id, $scope.foto)
                                        .success(function(){
                                                $scope.foto = {};
                                                $scope.mensagem = "Foto alterada";
                                                console.log('Imagem salva - OK');
                                            })
                                        .error(function(erro){
                                                $scope.mensagem = "Falha ao alterar foto.";
                                                console.log(erro);
                                            })
                                }else{
                                    $http
                                        .post('/v1/fotos', $scope.foto)
                                        .success(function(){
                                                $scope.foto = {};
                                                $scope.mensagem = "Foto salva";
                                                console.log('Imagem salva - OK');
                                            })
                                        .error(function(erro){
                                                $scope.mensagem = "Falha ao salvar";
                                                console.log(erro);
                                            })
                                }
                            }
                        }
                    }
               ]);