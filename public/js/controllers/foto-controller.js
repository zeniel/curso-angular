angular
    .module('alurapic')
    .controller('FotoController', ['$scope','$routeParams', 'recursoFoto', 'cadastroDeFotos',
                    function($scope,  $routeParams, recursoFoto, cadastroDeFotos){
                        $scope.foto = {};
                        $scope.mensagem = '';
                        
                        debugger;
                        if($routeParams.fotoId){
                            debugger;
                            recursoFoto
                                    .get({fotoId: $routeParams.fotoId},
                                    function(foto) { /*success*/
                                        $scope.foto = foto;
                                    },
                                    function(erro) { /* error */
                                        console.log(erro);
                                        $scope.mensagem = 'Não foi possĩvel obter a foto';
                                    });
                        }
                        
                        $scope.submeter = function () {
                            if($scope.formulario.$valid){
                                cadastroDeFotos.cadastrar($scope.foto)
                                    .then(function(dados){
                                        if(dados.inclusao){
                                            $scope.foto = {};
                                        }
                                        $scope.mensagem = dados.msg;
                                        console.log(dados.msg);
                                        console.log('mandar focar....');
                                        $scope.focado = true; /* foca no link de voltar */
                                    })
                                    .catch(function(dados){
                                        $scope.mensagem = dados.msg;
                                        console.log(dados.msg);
                                    });
                            }
                        };
                    }
               ]);