/* exercĩcio 1
angular
    .module('alurapic')
    .controller('FotosController', function($scope){
        $scope.fotos = [
            {
            titulo : 'Foto PJE1',
            url : 'http://geradormemes.com/media/created/uk9prf.jpg'
            },
            {
            titulo : 'Foto PJE2',
            url : 'http://geradormemes.com/media/created/t7oy17.jpg'
            },
            {
            titulo : 'Foto PJE3',
            url : 'https://cdn.meme.am/instances/500x/58036541.jpg'
            },
        ];
    });
*/

angular
    .module('alurapic')
    .controller('FotosController', ['$scope','recursoFoto',
                    function($scope, recursoFoto){
                        $scope.fotos = [];
                        $scope.mensagem = '';

                        recursoFoto
                            .query(function(fotos) {
                                    $scope.fotos=fotos;
                                },
                                function (erro){
                                    console.log(erro);
                                });
                        $scope.remover = function (foto){
                            recursoFoto
                                .delete({fotoId: foto._id},
                                        function(){ /* success */
                                            var indiceFoto = $scope.fotos.indexOf(foto);
                                            $scope.fotos.splice(indiceFoto, 1);

                                            $scope.mensagem = 'Foto '+foto.titulo+ ' removida.';
                                            console.log('Foto '+foto.titulo+ ' removida.');
                                        },
                                        function(erro){ /* error */
                                            $scope.mensagem = 'Falha ao remover foto';
                                            console.log('Falha ao remover foto.');
                                        });
                            
                        };
                    }
               ]);