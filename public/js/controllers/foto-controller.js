angular
    .module('alurapic')
    .controller('FotoController', ['$scope','$routeParams', 'recursoFoto',
                    function($scope,  $routeParams, recursoFoto){
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
                                if($routeParams.fotoId){
                                    recursoFoto
                                        .update({fotoId: $scope.foto._id}, 
                                                $scope.foto,
                                                function(){ /* success */
                                                    $scope.mensagem = 'Foto alterada';
                                                    console.log('Imagem salva - OK');
                                                },
                                                function(erro){ /* error */
                                                    $scope.mensagem = 'Falha ao alterar foto.';
                                                    console.log(erro);
                                                });
                                }else{
                                    recursoFoto
                                        .save($scope.foto,
                                                function(){ /*on success*/
                                                    $scope.foto = {};
                                                    $scope.mensagem = 'Foto salva';
                                                    console.log('Imagem salva - OK');
                                                },
                                                function(erro){ /* on error */
                                                    $scope.mensagem = 'Falha ao salvar';
                                                    console.log(erro);
                                                });
                                }
                            }
                        };
                    }
               ]);