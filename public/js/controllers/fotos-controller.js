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
    .controller('FotosController', ['$scope','$http',
                    function($scope, $http){
                        $scope.fotos = [];
                        $scope.mensagem = '';

                        
                        $http
                            .get('/v1/fotos')
                            .success(function (data){
                                        $scope.fotos=data;
                                    })
                            .error(function (erro){
                                        console.log(erro);
                                    })
                        $scope.remover = function (foto){
                            $http
                                .delete('/v1/fotos/'+foto._id)
                                .success(function(){
                                        var indiceFoto = $scope.fotos.indexOf(foto);
                                        $scope.fotos.splice(indiceFoto, 1);
                                
                                        $scope.mensagem = 'Foto '+foto.titulo+ ' de ID:' + foto._id + ' removida.';
                                        console.log('Foto '+foto.titulo+ ' removida.');
                                        })
                                .error(function(erro){
                                        $scope.mensagem = 'Falha ao remover foto';
                                        console.log('Falha ao remover foto.');
                                        });
                            
                        }
                    }
               ]);